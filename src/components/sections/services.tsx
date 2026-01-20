import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    cta: "Sold Out",
    description: "Perfect for small businesses needing a professional online presence",
    disabled: true,
    features: [
      "Custom design",
      "Mobile-responsive layout",
      "SEO optimization",
      "Contact form integration",
      "4 week delivery",
    ],
    price: "€6.000",
    spots: 0,
    title: "Website",
  },
  {
    cta: "Sold Out",
    description: "For businesses ready to scale with a robust web application",
    disabled: true,
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
    cta: "Contact Us",
    description: "Enterprise-grade solutions tailored to your specific needs",
    disabled: false,
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

export const ServicesSection = () => {
  return (
    <section className="px-6 py-24" id="services">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mb-12 text-center text-muted-foreground">Choose the package that fits your needs</p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card className="relative flex flex-col" key={service.title}>
              {service.spots === 0 && (
                <div className="absolute -top-3 right-4 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  0 spots left
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
                  asChild={!service.disabled}
                  className={
                    service.disabled
                      ? "w-full"
                      : "w-full bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                  }
                  disabled={service.disabled}
                  variant={service.disabled ? "secondary" : "default"}
                >
                  {service.disabled ? (
                    service.cta
                  ) : (
                    <a href="https://app.cal.com/vftiago/lightradius" rel="noopener noreferrer" target="_blank">
                      {service.cta}
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
