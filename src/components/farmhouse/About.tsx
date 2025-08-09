import { Waves, Home, BedDouble, Trees, Mic2, Car } from "lucide-react";

const features = [
  { icon: Waves, title: "Swimming Pool", desc: "Crystal-clear pool with stone deck and loungers for serene afternoons." },
  { icon: Home, title: "Bamboo Hut", desc: "Charming hut house with bamboo — a cozy spot for tea and sunsets." },
  { icon: BedDouble, title: "Bedroom", desc: "Modern farmhouse bedroom with natural linens and calming views." },
  { icon: Trees, title: "Garden", desc: "Lush landscaped garden pathways and seasonal blooms." },
  { icon: Mic2, title: "Events Stage", desc: "Ambient-lit stage perfect for performances and functions." },
  { icon: Car, title: "Parking", desc: "Neat, well-lit parking space for a smooth arrival." },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Our Story</h2>
          <p className="mt-3 text-foreground/80">
            Rooted in nature and crafted with care, Serene Farmhouse blends earthy textures with modern comfort. Whether it’s a quiet weekend or a lively celebration, we’ve designed every corner to feel warm, elegant, and inviting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border bg-card hover-scale p-5 shadow-sm">
              <div className="size-10 rounded-md bg-secondary text-secondary-foreground grid place-items-center mb-3">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-foreground/70 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
