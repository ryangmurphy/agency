import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="max-w-2xl w-full h-auto overflow-x-none mx-auto rounded-2xl py-12 shadow-input px-6 md:px-4">
      <h1 className="font-bold text-4xl text-center pb-6">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" className="" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-lg font-semibold">
            What sets your agency apart from others?
          </AccordionTrigger>
          <AccordionContent>
            We focus on creativity, innovation, and delivering measurable
            results for our clients to create memorable brand experiences.{" "}
            <span className="font-semibold">We give more than we take.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-semibold text-lg">
            Do you work with businesses of all sizes?
          </AccordionTrigger>
          <AccordionContent>
            Yes, We collaborate with businesses of all sizes, including ambitious startups, growing small businesses, mid-sized enterprises, and established large corporations. We also love partnering with founders and aspiring entrepreneurs to bring their visions to life.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-semibold text-lg">
            How do you determine pricing for your services?
          </AccordionTrigger>
          <AccordionContent>
            Pricing is determined based on the scope of the project and the
            specific services you require. We offer customized packages to meet
            your budget and goals. Reach out to us and we can provide more info.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-lg font-semibold">
            What is the full range of the services you offer?
          </AccordionTrigger>
          <AccordionContent>
            The Munk Devs offers a comprehensive suite of services to meet your
            digital needs. We specialize in website development, including
            custom design, responsive layouts, and e-commerce solutions.
            Additionally, we provide a wide range of
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-lg  font-semibold">
            What type of websites do you develop?
          </AccordionTrigger>
          <AccordionContent>
            We create a wide range of websites tailored to your needs, from
            e-commerce stores and landing pages to fully customized solutions
            designed to elevate your business.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left text-lg font-semibold">
            What technology do you use?
          </AccordionTrigger>
          <AccordionContent>
            We use the latest technology available to build our websites and our
            marketing strategies. We use React-based Frameworks, Shopify,
            Wordpress, Webflow, Framer, Adobe Creative Cloud, Third-Party Integrations, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left text-lg font-semibold">
            Do you offer training and ongoing support?
          </AccordionTrigger>
          <AccordionContent>
            After the completion of your project, we offer
            comprehensive training sessions to ensure you are equipped to
            effectively manage and utilize your new website/app. Additionally, we
            provide maintenance and ongoing support services that can be
            tailored to your specific needs, which we can discuss in detail
            during your consultation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
