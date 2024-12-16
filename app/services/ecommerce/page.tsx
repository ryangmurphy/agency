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

export default function EcommerceServices() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            E-commerce Solutions that
            <br />
            <span className="text-emerald-600">Grow</span>
            <br />
            <span className="">Your Online Business</span>
          </h1>
          <p className="text-lg max-w-xl">
            Unlock the full potential of your online store with our
            comprehensive e-commerce development services. We create powerful,
            user-friendly online shopping experiences that drive conversions,
            enhance customer engagement, and scale with your business. From
            boutique shops to enterprise-level marketplaces, we deliver custom
            e-commerce solutions that transform browsers into buyers.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Start Your E-commerce Journey
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/ecommerce.svg"
            alt="E-commerce Platform Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/ecommerce-features.svg"
              alt="E-commerce Features Illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              E-commerce Capabilities
            </h2>
            <p className="text-lg">
              We don&apos;t just build online stores—we create comprehensive
              digital commerce ecosystems that integrate seamlessly with your
              business strategy, leveraging the latest technologies to drive
              growth, improve customer experience, and maximize your online
              potential.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Custom Platform Development
                </AccordionTrigger>
                <AccordionContent className="">
                  Develop fully customized e-commerce platforms tailored to your
                  unique business model. Whether you need a simple storefront or
                  a complex multi-vendor marketplace, we create solutions that
                  align perfectly with your brand and operational needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  Payment & Checkout Optimization
                </AccordionTrigger>
                <AccordionContent className="">
                  Implement secure, streamlined payment solutions that reduce
                  cart abandonment and enhance user experience. We support
                  multiple payment gateways, digital wallets, and seamless
                  checkout processes that increase conversion rates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Performance & Conversion Optimization
                </AccordionTrigger>
                <AccordionContent className="">
                  Maximize your online store&apos;s performance with speed
                  optimization, responsive design, and conversion-focused
                  features. We implement advanced analytics, A/B testing, and
                  user behavior tracking to continuously improve your
                  store&apos;s effectiveness.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Inventory & Order Management
                </AccordionTrigger>
                <AccordionContent className="">
                  Integrate robust inventory management systems that provide
                  real-time stock tracking, automated reordering, and seamless
                  order fulfillment. Our solutions help you maintain optimal
                  stock levels and provide a smooth customer experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Advanced Security & Compliance
                </AccordionTrigger>
                <AccordionContent className="">
                  Protect your business and customers with enterprise-grade
                  security measures. We implement PCI DSS compliance, secure
                  payment gateways, fraud prevention, and robust data protection
                  to ensure a safe shopping environment.
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
          <span className="block">Transform Your Online Sales Strategy</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Your e-commerce success starts with the right digital partner.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Get E-commerce Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
