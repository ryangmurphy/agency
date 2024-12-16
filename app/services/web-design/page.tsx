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

export default function WebDesign() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Design that
            <br />
            <span className="text-emerald-600">Captivates,</span>
            <br />
            <span className="">Converts & Connects</span>
          </h1>
          <p className="text-lg max-w-xl">
            Transform your digital presence with web design that goes beyond
            aesthetics. We craft pixel-perfect, strategically designed websites
            that tell your brand&apos;s story, engage your audience, and drive
            meaningful interactions. Our design approach blends creative
            excellence with user-centric functionality to create digital
            experiences that leave a lasting impression.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Get Design Consultation
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/webdesign.svg"
            alt="Web Design Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/designprocess.svg"
              alt="Design Process Illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Design Philosophy & Capabilities
            </h2>
            <p className="text-lg">
              We believe great design is more than visual appeal—it&apos;s a
              strategic tool that communicates your brand&apos;s essence, guides
              user behavior, and creates memorable digital experiences that
              differentiate you in a crowded marketplace.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Brand-Aligned Visual Design
                </AccordionTrigger>
                <AccordionContent className="">
                  Create a cohesive visual identity that reflects your
                  brand&apos;s personality. We develop custom design systems
                  that maintain consistency across all digital touchpoints, from
                  color palettes to typography.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  User Experience (UX) Design
                </AccordionTrigger>
                <AccordionContent className="">
                  Design intuitive, frictionless user journeys that guide
                  visitors towards your key business objectives. Our UX approach
                  combines user research, wireframing, and strategic interaction
                  design.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Responsive Design Mastery
                </AccordionTrigger>
                <AccordionContent className="">
                  Ensure a seamless experience across all devices. Our
                  responsive design techniques guarantee your website looks
                  stunning and functions perfectly from mobile phones to large
                  desktop monitors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Interactive & Animated Experiences
                </AccordionTrigger>
                <AccordionContent className="">
                  Elevate user engagement with thoughtful, performance-optimized
                  animations and interactions. We use cutting-edge techniques to
                  create dynamic experiences that delight and retain users.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Accessibility & Inclusive Design
                </AccordionTrigger>
                <AccordionContent className="">
                  Create websites that are beautiful and accessible to all
                  users, including those with disabilities. We follow WCAG
                  guidelines to ensure your design is both stunning and
                  universally usable.
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
          <span className="block">
            Ready to Redesign Your Digital Presence?
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Let&apos;s create a design that tells your unique story and drives
          results.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Schedule Design Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
