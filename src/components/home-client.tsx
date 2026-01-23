"use client";

import { useRef } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { type ServiceInfo } from "@/lib/edge-config";
import { type Region } from "@/middleware";

type HomeClientProps = {
  region: Region;
  serviceInfo: ServiceInfo;
}

export const HomeClient = ({ region, serviceInfo }: HomeClientProps) => {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection onScrollToServices={scrollToServices} />
        <ServicesSection region={region} sectionRef={servicesRef} serviceInfo={serviceInfo} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};
