import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToServices: () => void;
}

export const HeroSection = ({ onScrollToServices }: HeroSectionProps) => {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        We build websites that{" "}
        <span className="bg-linear-to-b from-orange-500 to-orange-600 bg-clip-text text-transparent">convert</span>
      </h1>
      <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
        AI-powered, no-frills, high-performance web solutions for startups and small businesses that want to grow.
      </p>
      <Button
        className="mt-8 bg-linear-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
        size="xl"
        onClick={onScrollToServices}
      >
        <span className="text-lg w-30">Book a Call</span>
      </Button>
    </section>
  );
};
