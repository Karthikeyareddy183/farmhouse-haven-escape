import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Map from "./Map";

export default function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Contact & Location</h2>
          <p className="mt-3 text-foreground/80">Tell us about your stay or event plans — we’ll tailor the experience.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required name="name" placeholder="Your name" aria-label="Your name" />
              <Input required type="email" name="email" placeholder="Email address" aria-label="Email address" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="phone" placeholder="Phone (optional)" aria-label="Phone" />
              <Input type="date" name="date" aria-label="Preferred date" />
            </div>
            <Textarea name="message" placeholder="Tell us about your plan" className="min-h-28" />
            <Button type="submit" variant="hero" className="w-full sm:w-auto">Send Inquiry</Button>
          </form>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </section>
  );
}
