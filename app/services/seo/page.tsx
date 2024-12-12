import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import HowItWorks from "@/components/services/HowItWorks";

export default function SEO() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Web Development that
            <br />
            <span className="text-emerald-600">looks good,</span>
            <br />
            <span className="">performs great.</span>
          </h1>
          <p className="text-lg max-w-xl">
            We specialize in crafting visually stunning, highly functional, and
            user-focused websites that bring your brand to life. Whether
            you&apos;re looking for a sleek e-commerce platform, an engaging
            portfolio, or a dynamic web app, our team of expert developers
            combines cutting-edge technologies with creative design to deliver
            custom solutions that meet your unique business needs. Let us
            transform your vision into a digital experience that drives results.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Start Now
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/webdev.svg"
            alt="AI Marketing Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/*Logo cloud 
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-xl text-gray-200">
          We've helped some of the top brands in the world win in the age of AI
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt={`Client logo ${i + 1}`}
                width={120}
                height={40}
                className="opacity-50 grayscale transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/devprod.svg"
              alt="Features illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Features & Insights
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Responsive Web Design
                </AccordionTrigger>
                <AccordionContent className="">
                  Ensure your website looks stunning and functions flawlessly on
                  all devices, from desktops to smartphones. Our responsive
                  design techniques create seamless user experiences across
                  screen sizes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  Accessibility Compliance
                </AccordionTrigger>
                <AccordionContent className="">
                  Ensure your website is inclusive and compliant with
                  accessibility standards like WCAG, making it user-friendly for
                  all audiences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Scalable Web Architecture
                </AccordionTrigger>
                <AccordionContent className="">
                  Build web solutions designed to grow with your business. Our
                  scalable architecture ensures your site remains fast, secure,
                  and capable of handling increasing traffic as your business
                  expands.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Custom Web Applications
                </AccordionTrigger>
                <AccordionContent className="">
                  Create powerful, feature-rich web applications tailored to
                  your unique needs. Our team combines the latest technologies
                  and best practices to deliver solutions that drive engagement
                  and streamline operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Advanced Security Measures
                </AccordionTrigger>
                <AccordionContent className="">
                  Protect your digital assets and user data with our advanced
                  security protocols. From secure coding practices to robust
                  encryption, we prioritize keeping your website safe from
                  threats.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="mx-auto py-24">
        <HowItWorks />
      </div>
      <div className="w-full max-w-3xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          <span className="block">Let&apos;s Build Your Website</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Custom website&apos;s that looks good, performs great, and drives
          results.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Book a Meeting
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
