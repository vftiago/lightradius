import { type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ServiceSpots } from "@/lib/edge-config";

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
    key: "website" as const,
    price: "€6.000",
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
    key: "webapp" as const,
    price: "€12.000",
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
    key: "custom" as const,
    price: "Custom",
    title: "Custom",
  },
];

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
  spots: ServiceSpots;
}

export const ServicesSection = ({ sectionRef, spots }: ServicesSectionProps) => {
  return (
    <section className="px-6 py-24" id="services" ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mb-12 text-center text-muted-foreground">Choose the package that fits your needs</p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const serviceSpots = spots[service.key];
            return (
              <Card className="relative flex flex-col" key={service.title}>
                {serviceSpots !== null && (
                  <div className="absolute -top-3 right-4 flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${serviceSpots > 0 ? "bg-green-500 shadow-[0_0_4px_1px_rgba(34,197,94,0.5)]" : "bg-red-500 shadow-[0_0_4px_1px_rgba(239,68,68,0.5)]"}`}
                    />
                    {serviceSpots} {serviceSpots === 1 ? "spot" : "spots"} left
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
                    asChild={serviceSpots !== 0}
                    className={
                      serviceSpots === 0
                        ? "w-full"
                        : serviceSpots === null
                          ? "w-full"
                          : "w-full bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                    }
                    disabled={serviceSpots === 0}
                    variant={service.key === "custom" ? "outline" : serviceSpots === 0 ? "secondary" : "default"}
                  >
                    {serviceSpots === 0 ? (
                      "Sold Out"
                    ) : (
                      <a href="https://app.cal.com/vftiago/lightradius" rel="noopener noreferrer" target="_blank">
                        Contact Us
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
