import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import pool from "@/assets/pool.jpg";
import hut from "@/assets/hut-bamboo.jpg";
import bedroom from "@/assets/bedroom.jpg";
import garden from "@/assets/garden.jpg";
import stage from "@/assets/stage.jpg";
import parking from "@/assets/parking.jpg";

const items = [
  { src: pool, alt: "Farmhouse swimming pool with loungers" },
  { src: hut, alt: "Cozy bamboo hut house" },
  { src: bedroom, alt: "Modern farmhouse bedroom" },
  { src: garden, alt: "Vibrant farmhouse garden" },
  { src: stage, alt: "Outdoor stage for events" },
  { src: parking, alt: "Neat farmhouse parking area" },
];

export default function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Gallery</h2>
          <p className="mt-3 text-foreground/80">A glimpse into our spaces — photos to spark your plans. Click to view.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button
                  className="group relative overflow-hidden rounded-md border bg-card hover-scale"
                  onClick={() => setActive(item)}
                  aria-label={`Open ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img src={active?.src} alt={active?.alt || "Selected image"} className="w-full h-auto rounded-md" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
