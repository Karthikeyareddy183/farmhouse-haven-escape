import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmhouse.jpg";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" aria-label="Serene Farmhouse hero" className="relative">
      <div ref={heroRef} className="relative h-[90vh] min-h-[560px] w-full overflow-hidden pointer-spotlight">
        <img
          src={heroImage}
          alt="Elegant farmhouse with swimming pool at golden hour"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/10 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex items-center">
          <div className="max-w-2xl animate-enter">
            <p className="text-sm uppercase tracking-widest text-foreground/70 mb-3">Nature-inspired stays & events</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Serene Farmhouse Retreat
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              An elegant escape surrounded by greenery — poolside relaxation, cozy bamboo hut, lush gardens, and a stage ready for celebrations.
            </p>
            <div className="mt-8 flex gap-3">
              <Button variant="hero" onClick={scrollToPricing} className="hover-scale">Book Your Stay</Button>
              <a href="#gallery" className="story-link self-center">Explore the gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
