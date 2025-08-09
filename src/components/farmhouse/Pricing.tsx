import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Weekday Escape",
    price: "₹8,500",
    note: "per night",
    features: ["Pool & garden access", "Bamboo hut seating", "Complimentary breakfast"],
  },
  {
    name: "Weekend Retreat",
    price: "₹12,000",
    note: "per night",
    features: ["All weekday inclusions", "Stage & lights (2 hrs)", "Welcome refreshments"],
    highlight: true,
  },
  {
    name: "Full Event Day",
    price: "₹35,000",
    note: "one day",
    features: ["Private venue access", "Stage, lights & sound", "Dedicated parking assistance"],
  },
];

export default function Pricing() {
  const gotoContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Pricing & Booking</h2>
          <p className="mt-3 text-foreground/80">Transparent packages for stress-free planning. Custom quotes available.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Card key={t.name} className={`relative overflow-hidden transition-all hover:shadow-xl ${t.highlight ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{t.name}</CardTitle>
                <CardDescription>{t.note}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold">{t.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {t.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="hero" className="w-full" onClick={gotoContact}>Request to Book</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
