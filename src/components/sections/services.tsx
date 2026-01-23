import { type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice, type ServiceInfo } from "@/lib/edge-config";
import { type Region } from "@/middleware";

type BaseService = {
  description: string;
  features: string[];
  title: string;
};

type DynamicService = BaseService & {
  key: "webapp" | "website";
};

type StaticService = BaseService & {
  key: "custom";
  price: string;
  title: string;
};

const dynamicServices: DynamicService[] = [
  {
    description: "Perfect for small businesses needing a professional online presence",
    features: [
      "Custom design",
      "Mobile-responsive layout",
      "SEO optimization",
      "Contact form integration",
      "4 week delivery",
    ],
    key: "website",
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
    key: "webapp",
    title: "Webapp",
  },
];

const customService: StaticService = {
  description: "Enterprise-grade solutions tailored to your specific needs",
  features: [
    "Everything in Webapp",
    "Custom integrations",
    "Ongoing support",
    "Priority development",
    "Timeline based on scope",
  ],
  key: "custom",
  price: "Custom",
  title: "Custom",
};

type ServicesSectionProps = {
  region: Region;
  sectionRef: RefObject<HTMLElement | null>;
  serviceInfo: ServiceInfo;
};

export const ServicesSection = ({ region, sectionRef, serviceInfo }: ServicesSectionProps) => {
  return (
    <section className="px-6 py-24" id="services" ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mb-12 text-center text-muted-foreground">Choose the package that fits your needs</p>
        <div className="grid gap-6 md:grid-cols-3">
          {dynamicServices.map((service) => {
            const info = serviceInfo[service.key];
            const spots = info.spots;
            const price = formatPrice(info.prices[region], region);

            return (
              <Card className="relative flex flex-col" key={service.title}>
                <div className="absolute -top-3 right-4 flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${spots > 0 ? "bg-green-500 shadow-glow-available" : "bg-red-500 shadow-glow-unavailable"}`}
                  />
                  {spots} {spots === 1 ? "spot" : "spots"} left
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-6">
                    <div className="text-xs text-muted-foreground">
                      <span>Starting at</span>
                    </div>
                    <div className="text-3xl font-bold">{price}</div>
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
                    asChild={spots !== 0}
                    className={
                      spots === 0
                        ? "w-full"
                        : "w-full bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                    }
                    disabled={spots === 0}
                    variant={spots === 0 ? "secondary" : "default"}
                  >
                    {spots === 0 ? (
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

          <Card className="relative flex flex-col">
            <CardHeader>
              <CardTitle>{customService.title}</CardTitle>
              <CardDescription>{customService.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="mb-6">
                <div className="text-xs text-muted-foreground">
                  <span>&nbsp;</span>
                </div>
                <div className="text-3xl font-bold">{customService.price}</div>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {customService.features.map((feature) => (
                  <li className="flex items-center gap-2" key={feature}>
                    <span className="text-orange-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant="outline">
                <a href="https://app.cal.com/vftiago/lightradius" rel="noopener noreferrer" target="_blank">
                  Contact Us
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
