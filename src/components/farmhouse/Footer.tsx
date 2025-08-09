import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="mt-20 border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl tracking-tight">Serene Farmhouse</h3>
            <p className="text-sm text-foreground/70">
              Your perfect escape for relaxation and celebration.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <a href="mailto:k8110410@gmail.com" className="hover:text-primary transition-colors">
                  k8110410@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:82960XXXXX" className="hover:text-primary transition-colors">
                  82960XXXXX
                </a>
              </li>
              <li>
                <p>Moka Rd, Ballari, Karnataka 583103</p>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-3">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/60 space-y-2">
          <p>© {new Date().getFullYear()} Varshini Farmhouse. All Rights Reserved.</p>
          <p>Built with ❤️ by Karthikeya Reddy.</p>
        </div>
      </div>
    </footer>
  );
}