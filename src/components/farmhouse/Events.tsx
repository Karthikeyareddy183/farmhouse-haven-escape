import stage from "@/assets/stage.jpg";

export default function Events() {
  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Events & Performances</h2>
          <p className="mt-3 text-foreground/80">
            Our ambient-lit outdoor stage sets the tone for unforgettable evenings — from intimate live music and karaoke nights to family functions and celebrations.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>• Stage, lighting, and seating arrangements</li>
            <li>• Flexible layout for performances and ceremonies</li>
            <li>• Garden-side backdrop for a warm, natural vibe</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden border bg-card">
          <img src={stage} alt="Outdoor stage ready for events" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
