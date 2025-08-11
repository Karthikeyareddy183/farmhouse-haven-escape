
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-display text-xl font-bold">Varshini Farm House</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("gallery")} className="hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollTo("events")} className="hover:text-primary transition-colors">Events</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
          </div>
          
          <Button onClick={() => scrollTo("contact")} className="hidden md:flex">
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollTo("about")} className="block w-full text-left hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("gallery")} className="block w-full text-left hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollTo("pricing")} className="block w-full text-left hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollTo("events")} className="block w-full text-left hover:text-primary transition-colors">Events</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left hover:text-primary transition-colors">Contact</button>
            <Button onClick={() => scrollTo("contact")} className="w-full">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
