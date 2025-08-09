import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 2.5,
      center: [78.9629, 20.5937], // India as placeholder
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current) return;
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });
    spinGlobe();

    return () => { map.current?.remove(); };
  }, [token]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-3">
        <label htmlFor="mapbox-token" className="text-sm text-foreground/70">Mapbox public token</label>
        <input
          id="mapbox-token"
          placeholder="Paste your Mapbox public token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="relative w-full h-[360px] md:h-[420px] rounded-lg overflow-hidden border">
        {!token && (
          <div className="absolute inset-0 z-10 grid place-items-center bg-background/70 text-center px-6">
            <p className="text-sm text-foreground/80">Enter your Mapbox public token to view the interactive map.</p>
          </div>
        )}
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
      </div>
    </div>
  );
};

export default Map;
