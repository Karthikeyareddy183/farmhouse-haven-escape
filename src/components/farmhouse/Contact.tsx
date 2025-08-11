
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";
import BookingCalendar from "./BookingCalendar";

export default function Contact() {
  const address = "Moka Rd, near Hanuman gooda, beside gulmohar Farmhouse, Ballari, Karnataka 583103";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=varshini farmhouse, Ballari`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const inquiryData: TablesInsert<"inquiries"> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      preferred_date: (formData.get("date") as string) || null,
      message: (formData.get("message") as string) || null,
    };

    console.log("Submitting inquiry:", inquiryData);

    const { error } = await supabase.from("inquiries").insert([inquiryData]);

    if (error) {
      toast.error("There was an error sending your inquiry. Please try again.");
      console.error("Supabase error:", error);
    } else {
      toast.success("Thanks! We'll get back to you shortly.");
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Contact & Booking</h2>
          <p className="mt-3 text-foreground/80">Tell us about your stay or event plans — we'll tailor the experience.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="grid gap-4">
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

            <div className="mt-8 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p className="mt-2 text-foreground/80">
                {address}
              </p>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block"
              >
                <Button variant="outline">Get Directions</Button>
              </a>
            </div>
          </div>

          {/* Booking Calendar */}
          <div>
            <BookingCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}
