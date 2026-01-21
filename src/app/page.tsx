"use client";

import { useRef } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

const Home = () => {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection onScrollToServices={scrollToServices} />
        <ServicesSection sectionRef={servicesRef} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
