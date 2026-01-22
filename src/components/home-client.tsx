"use client";

import { useRef } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { type ServiceSpots } from "@/lib/edge-config";

interface HomeClientProps {
  serviceSpots: ServiceSpots;
}

export const HomeClient = ({ serviceSpots }: HomeClientProps) => {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection onScrollToServices={scrollToServices} />
        <ServicesSection sectionRef={servicesRef} spots={serviceSpots} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};
