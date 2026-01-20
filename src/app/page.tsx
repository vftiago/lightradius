import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

const Home = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default Home;
