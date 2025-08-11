
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Varshini Farm House</h3>
          <p className="text-slate-300">
            Creating unforgettable experiences in the heart of Ballari. Your perfect escape for relaxation and celebration.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">Moka Rd, near Hanuman gooda, beside gulmohar Farmhouse, Ballari, Karnataka 583103</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@varshinifarmhouse.com</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About Us</a>
            <a href="#gallery" className="block text-slate-300 hover:text-white transition-colors">Gallery</a>
            <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#events" className="block text-slate-300 hover:text-white transition-colors">Events</a>
            <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
        <p>&copy; 2024 Varshini Farm House. All rights reserved.</p>
      </div>
    </footer>
  );
}
