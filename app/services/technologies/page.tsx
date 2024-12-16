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

export default function TechnologyServices() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Technology Solutions
            <br />
            <span className="text-emerald-600">Driving</span>
            <br />
            <span className="">Digital Transformation</span>
          </h1>
          <p className="text-lg max-w-xl">
            Navigate the complex world of technology with our comprehensive
            technology services. We provide cutting-edge solutions that bridge
            the gap between innovative technologies and your business
            objectives. From emerging tech consulting to full-scale
            implementation, our expert team ensures you stay ahead of the
            technological curve and unlock new opportunities for growth.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Explore Tech Solutions
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/technology.svg"
            alt="Technology Solutions Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/tech-features.svg"
              alt="Technology Services Features Illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Technology Capabilities
            </h2>
            <p className="text-lg">
              Our technology services encompass a holistic approach to digital
              innovation. We combine deep technical expertise, strategic
              thinking, and forward-looking solutions to help businesses
              leverage technology as a true competitive advantage.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Emerging Technology Consulting
                </AccordionTrigger>
                <AccordionContent className="">
                  Navigate the rapidly evolving tech landscape with expert
                  guidance. We help you identify, evaluate, and strategically
                  implement emerging technologies like AI, blockchain, IoT, and
                  edge computing to drive innovation and operational efficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  Cloud Architecture & Migration
                </AccordionTrigger>
                <AccordionContent className="">
                  Design and implement robust cloud solutions that optimize
                  performance, scalability, and cost-effectiveness. We provide
                  end-to-end cloud services, from initial strategy to seamless
                  migration and ongoing management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Advanced Data Solutions
                </AccordionTrigger>
                <AccordionContent className="">
                  Transform raw data into actionable insights with our
                  comprehensive data services. We offer data analytics, machine
                  learning model development, business intelligence, and
                  advanced predictive analytics solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Cybersecurity & Risk Management
                </AccordionTrigger>
                <AccordionContent className="">
                  Protect your digital assets with comprehensive cybersecurity
                  solutions. We provide vulnerability assessments, security
                  architecture design, threat detection, and ongoing monitoring
                  to safeguard your organization&apos;s technological
                  infrastructure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Technology Integration & Modernization
                </AccordionTrigger>
                <AccordionContent className="">
                  Modernize legacy systems and create seamless integration
                  between diverse technological platforms. We help you break
                  down technological silos, improve interoperability, and create
                  a unified, efficient technological ecosystem.
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
          <span className="block">Transform Your Technological Landscape</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Your technology transformation begins with a single conversation.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Schedule Technology Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
