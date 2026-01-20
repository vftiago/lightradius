import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        We build websites that{" "}
        <span className="bg-linear-to-b from-orange-500 to-orange-600 bg-clip-text text-transparent">convert</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        High-performance web development for startups and businesses. From landing pages to full-scale applications.
      </p>
      <Button
        asChild
        className="mt-8 bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
        size="lg"
      >
        <a href="https://app.cal.com/vftiago/lightradius" rel="noopener noreferrer" target="_blank">
          Book a Call
        </a>
      </Button>
    </section>
  );
};
