import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    answer:
      "Our typical timeline is 4 weeks for a Website package and 8 weeks for a Webapp package. Custom projects are scoped individually based on requirements.",
    question: "How long does it take to build a website?",
  },
  {
    answer:
      "We work with a 50% upfront payment to begin the project, with the remaining 50% due upon completion before launch.",
    question: "What is your payment structure?",
  },
  {
    answer:
      "Yes, all our websites are built with modern responsive frameworks ensuring they look great on all devices - desktop, tablet, and mobile.",
    question: "Do you build mobile-responsive websites?",
  },
  {
    answer:
      "We primarily work with Next.js, React, and TypeScript for building high-performance, SEO-friendly web applications. We use Tailwind CSS for styling.",
    question: "What technologies do you use?",
  },
  {
    answer:
      "We offer ongoing support and maintenance packages after project completion. We can discuss your specific needs during our initial consultation.",
    question: "Do you provide ongoing support after launch?",
  },
];

export const FAQSection = () => {
  return (
    <section className="px-6 py-24" id="faq">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mb-12 text-center text-muted-foreground">Everything you need to know about working with us</p>
        <Accordion collapsible className="w-full" type="single">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
