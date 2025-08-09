import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "pricing", label: "Pricing & Booking" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" onClick={() => handleNavClick("home")} className="font-display text-xl tracking-tight story-link">
          Serene Farmhouse
        </a>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              aria-label={`Go to ${s.label}`}
            >
              {s.label}
            </button>
          ))}
          <Button variant="hero" onClick={() => handleNavClick("pricing")}>Book Now</Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu />
        </Button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-background/90 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className="text-left text-foreground/90"
              >
                {s.label}
              </button>
            ))}
            <Button variant="hero" onClick={() => handleNavClick("pricing")}>Book Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
