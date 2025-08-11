
import { Button } from "@/components/ui/button";

export default function Hero() {
  const gotoContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/hero-farmhouse.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Varshini Farm House
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Your perfect escape in Ballari. Peaceful stays, memorable events, and natural beauty await.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero" onClick={gotoContact}>
            Book Your Stay
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={gotoContact}>
            Plan an Event
          </Button>
        </div>
      </div>
    </section>
  );
}
