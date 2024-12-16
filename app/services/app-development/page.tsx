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

export default function AppDevelopment() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Mobile & Web
            <br />
            <span className="text-emerald-600">Apps</span>
            <br />
            <span className="">That Innovate & Perform</span>
          </h1>
          <p className="text-lg max-w-xl">
            Transform your innovative ideas into powerful, user-centric
            applications that solve real-world problems. Our expert development
            team specializes in creating custom mobile and web applications that
            are not just technologically advanced, but strategically designed to
            drive business growth, enhance user engagement, and give you a
            competitive edge in the digital landscape.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Discuss Your App Idea
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/app-development.svg"
            alt="App Development Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/app-features.svg"
              alt="App Development Features Illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Development Capabilities
            </h2>
            <p className="text-lg">
              We offer end-to-end app development services that cover the entire
              product lifecycle. From initial concept and design to development,
              deployment, and ongoing support, our holistic approach ensures
              your application is robust, scalable, and aligned with your
              business objectives.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Cross-Platform Development
                </AccordionTrigger>
                <AccordionContent className="">
                  Maximize your reach with cross-platform applications that work
                  seamlessly across iOS, Android, and web platforms. Utilize
                  frameworks like React Native and Flutter to create consistent,
                  high-performance apps that reduce development time and cost.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  Custom UI/UX Design
                </AccordionTrigger>
                <AccordionContent className="">
                  Create intuitive, visually stunning interfaces that provide
                  exceptional user experiences. Our design process combines user
                  research, interactive prototyping, and iterative design to
                  craft applications that are both beautiful and highly
                  functional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Advanced Feature Integration
                </AccordionTrigger>
                <AccordionContent className="">
                  Implement cutting-edge features like AI capabilities,
                  real-time data synchronization, advanced analytics, machine
                  learning, and complex integrations with third-party services
                  to create truly innovative applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Performance Optimization
                </AccordionTrigger>
                <AccordionContent className="">
                  Develop lightning-fast applications with optimized code,
                  efficient data management, and intelligent caching strategies.
                  We ensure your app delivers a smooth, responsive experience
                  even under heavy user load.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Security & Compliance
                </AccordionTrigger>
                <AccordionContent className="">
                  Protect your application and user data with robust security
                  measures. We implement end-to-end encryption, secure
                  authentication, comprehensive vulnerability testing, and
                  ensure compliance with industry standards and regulations.
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
          <span className="block">Turn Your App Concept into Reality</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Your innovative app is just a conversation away.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Schedule App Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
