// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { toast } from "sonner";
// // import Map from "./Map";

// // export default function Contact() {
// //   const onSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     toast.success("Thanks! We'll get back to you shortly.");
// //     (e.target as HTMLFormElement).reset();
// //   };

// //   return (
// //     <section id="contact" className="py-20">
// //       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
// //         <div>
// //           <h2 className="font-display text-3xl md:text-4xl">Contact & Location</h2>
// //           <p className="mt-3 text-foreground/80">Tell us about your stay or event plans — we’ll tailor the experience.</p>

// //           <form onSubmit={onSubmit} className="mt-6 grid gap-4">
// //             <div className="grid sm:grid-cols-2 gap-4">
// //               <Input required name="name" placeholder="Your name" aria-label="Your name" />
// //               <Input required type="email" name="email" placeholder="Email address" aria-label="Email address" />
// //             </div>
// //             <div className="grid sm:grid-cols-2 gap-4">
// //               <Input name="phone" placeholder="Phone (optional)" aria-label="Phone" />
// //               <Input type="date" name="date" aria-label="Preferred date" />
// //             </div>
// //             <Textarea name="message" placeholder="Tell us about your plan" className="min-h-28" />
// //             <Button type="submit" variant="hero" className="w-full sm:w-auto">Send Inquiry</Button>
// //           </form>
// //         </div>

// //         <div>
// //           <Map />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// import Map from "./Map";
// import { supabase } from "@/integrations/supabase/client";
// import type { TablesInsert } from "@/integrations/supabase/types";

// export default function Contact() {
//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     // Create a type-safe object matching your Supabase table structure
//     const inquiryData: TablesInsert<"inquiries"> = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phone: (formData.get("phone") as string) || null,
//       preferred_date: (formData.get("date") as string) || null,
//       message: (formData.get("message") as string) || null,
//     };

//     // Supabase expects an array of objects for insertion
//     const { error } = await supabase.from("inquiries").insert([inquiryData]);

//     if (error) {
//       toast.error("There was an error sending your inquiry. Please try again.");
//       console.error("Supabase error:", error);
//     } else {
//       toast.success("Thanks! We'll get back to you shortly.");
//       e.currentTarget.reset();
//     }
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
//         <div>
//           <h2 className="font-display text-3xl md:text-4xl">Contact & Location</h2>
//           <p className="mt-3 text-foreground/80">Tell us about your stay or event plans — we’ll tailor the experience.</p>

//           <form onSubmit={onSubmit} className="mt-6 grid gap-4">
//             <div className="grid sm:grid-cols-2 gap-4">
//               <Input required name="name" placeholder="Your name" aria-label="Your name" />
//               <Input required type="email" name="email" placeholder="Email address" aria-label="Email address" />
//             </div>
//             <div className="grid sm:grid-cols-2 gap-4">
//               <Input name="phone" placeholder="Phone (optional)" aria-label="Phone" />
//               <Input type="date" name="date" aria-label="Preferred date" />
//             </div>
//             <Textarea name="message" placeholder="Tell us about your plan" className="min-h-28" />
//             <Button type="submit" variant="hero" className="w-full sm:w-auto">Send Inquiry</Button>
//           </form>
//         </div>

//         <div>
//           <Map />
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

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

        <div className="rounded-lg border bg-card p-6 shadow-sm">
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
    </section>
  );
}