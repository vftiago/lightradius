import { type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    description: "Perfect for small businesses needing a professional online presence",
    features: [
      "Custom design",
      "Mobile-responsive layout",
      "SEO optimization",
      "Contact form integration",
      "4 week delivery",
    ],
    price: "€6.000",
    spots: 1,
    title: "Website",
  },
  {
    description: "For businesses ready to scale with a robust web application",
    features: [
      "Everything in Website",
      "Custom web application",
      "User authentication",
      "Database integration",
      "API development",
      "8 week delivery",
    ],
    price: "€12.000",
    spots: 0,
    title: "Webapp",
  },
  {
    description: "Enterprise-grade solutions tailored to your specific needs",
    features: [
      "Everything in Webapp",
      "Custom integrations",
      "Ongoing support",
      "Priority development",
      "Timeline based on scope",
    ],
    price: "Custom",
    spots: null,
    title: "Custom",
  },
];

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export const ServicesSection = ({ sectionRef }: ServicesSectionProps) => {
  return (
    <section className="px-6 py-24" id="services" ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mb-12 text-center text-muted-foreground">Choose the package that fits your needs</p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card className="relative flex flex-col" key={service.title}>
              {service.spots !== null && (
                <div className="absolute -top-3 right-4 flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${service.spots > 0 ? "bg-green-500 shadow-[0_0_4px_1px_rgba(34,197,94,0.5)]" : "bg-red-500 shadow-[0_0_4px_1px_rgba(239,68,68,0.5)]"}`}
                  />
                  {service.spots} {service.spots === 1 ? "spot" : "spots"} left
                </div>
              )}
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-6">
                  <div className="text-xs text-muted-foreground">
                    {service.title !== "Custom" ? <span>Starting at</span> : <span>&nbsp;</span>}
                  </div>

                  <div className="text-3xl font-bold">{service.price}</div>
                </div>
                <ul className="mb-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span className="text-orange-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild={service.spots !== 0}
                  className={
                    service.spots === 0
                      ? "w-full"
                      : service.spots === null
                        ? "w-full"
                        : "w-full bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                  }
                  disabled={service.spots === 0}
                  variant={service.spots === 0 ? "secondary" : service.spots === null ? "outline" : "default"}
                >
                  {service.spots === 0 ? (
                    "Sold Out"
                  ) : (
                    <a href="https://app.cal.com/vftiago/lightradius" rel="noopener noreferrer" target="_blank">
                      Contact Us
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
