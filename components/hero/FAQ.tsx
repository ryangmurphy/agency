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
          <AccordionTrigger className="text-left font-semibold text-lg">
            Do you work with businesses of all sizes?
          </AccordionTrigger>
          <AccordionContent>
            Yes, We collaborate with businesses of all sizes, including
            ambitious startups, growing small businesses, mid-sized enterprises,
            and established large corporations. We also love partnering with
            founders and aspiring entrepreneurs to bring their visions to life.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-lg font-semibold">
            What technology do you use?
          </AccordionTrigger>
          <AccordionContent>
            We use cutting-edge technologies to create bespoke solutions for
            websites, apps, and software, ensuring each project is optimized for
            performance and scalability. Our approach starts with a deep
            understanding of every business&apos;s unique needs, allowing us to
            select the best tools for the job.
            <br /> <br />
            <ul className="list-disc space-y-4">
              <li>
                <span className="font-bold">Web Development:</span> We build
                fast, responsive, and user-friendly websites using modern
                React-based frameworks like Next.js and Svelte.
              </li>

              <li>
                <span className="font-bold">
                  Content Management Systems (CMS):
                </span>{" "}
                We primarily use PayloadCMS for its exceptional flexibility,
                advanced features, and seamless integration with custom designs
                and workflows, making it an ideal choice for businesses of all
                sizes, from small startups to large enterprises. For e-commerce
                solutions, we also leverage Shopify to create scalable and
                robust online stores.
              </li>
              <li>
                <span className="font-bold">Mobile Development:</span> For
                mobile apps, we rely on React Native to create high-performance,
                cross-platform solutions that work seamlessly on both iOS and
                Android.
              </li>
            </ul>
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
          <AccordionTrigger className="text-left text-lg  font-semibold">
            What kinds of websites do you develop?
          </AccordionTrigger>
          <AccordionContent>
            We specialize in creating a wide variety of websites and
            applications, tailored to meet the needs of businesses of all sizes.
            Our expertise includes:
            <br />
            <br />
            <ul className="list-disc space-y-4">
              <li>
                <span className="font-bold">
                  Enterprise Websites and Applications
                </span>{" "}
                Scalable and secure solutions designed to support the complex
                needs of large organizations and streamline operations.
              </li>
              <li>
                <span className="font-bold">E-commerce Platforms:</span> Robust
                online stores with seamless user experiences and powerful
                management tools.
              </li>
              <li>
                <span className="font-bold">Engaging Landing Pages:</span>{" "}
                High-converting pages crafted to captivate audiences and drive
                results.
              </li>
              <li>
                <span className="font-bold">Fully Customized Solutions:</span>{" "}
                Specialized websites and web applications tailored to your
                specific goals and growth strategies.
              </li>
            </ul>
            <br />
            Whether you&apos;re a small business or a large enterprise, we
            deliver solutions designed to elevate your online presence and
            support your success.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-lg font-semibold">
            Do you offer training and ongoing support?
          </AccordionTrigger>
          <AccordionContent>
            After the completion of your project, we offer comprehensive
            training sessions to ensure you are equipped to effectively manage
            and utilize your new website/app. Additionally, we provide
            maintenance and ongoing support services that can be tailored to
            your specific needs, which we can discuss in detail during your
            consultation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
