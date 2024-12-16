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

export default function SEOServices() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Dominate Search
            <br />
            <span className="text-emerald-600">Rankings</span>
            <br />
            <span className="">Grow Your Online Presence</span>
          </h1>
          <p className="text-lg max-w-xl">
            Unlock the power of strategic search engine optimization that goes
            beyond keywords. Our comprehensive SEO services are designed to
            increase your visibility, drive targeted organic traffic, and
            transform your website into a powerful lead generation machine. We
            don&apos;t just improve rankings—we create a holistic digital
            strategy that connects you with your ideal customers.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700" size="lg">
            Get SEO Audit
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <Image
            src="/services/seo.svg"
            alt="SEO Strategy Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src="/services/seo-features.svg"
              alt="SEO Features Illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">SEO Capabilities</h2>
            <p className="text-lg">
              Our search engine optimization approach is comprehensive and
              data-driven. We combine technical expertise, content strategy, and
              advanced analytics to create a customized SEO solution that
              delivers measurable results and sustainable growth for your
              digital presence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  Comprehensive SEO Auditing
                </AccordionTrigger>
                <AccordionContent className="">
                  Conduct in-depth analysis of your current digital presence,
                  identifying technical issues, content gaps, and optimization
                  opportunities. Our detailed audits provide a clear roadmap for
                  improving search engine performance and user experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  Strategic Content Optimization
                </AccordionTrigger>
                <AccordionContent className="">
                  Develop high-quality, keyword-rich content that engages your
                  target audience and satisfies search engine algorithms. We
                  create content strategies that position you as an industry
                  leader while improving search rankings and driving organic
                  traffic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  Technical SEO Optimization
                </AccordionTrigger>
                <AccordionContent className="">
                  Enhance your website&apos;s technical foundation with advanced
                  optimization techniques. We improve site speed, mobile
                  responsiveness, crawlability, and implement structured data to
                  boost search engine visibility and user experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="">
                  Link Building & Domain Authority
                </AccordionTrigger>
                <AccordionContent className="">
                  Develop a robust link-building strategy that increases your
                  domain authority and credibility. We focus on acquiring
                  high-quality, relevant backlinks from reputable sources to
                  improve your search engine rankings and online reputation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="">
                  Comprehensive Analytics & Reporting
                </AccordionTrigger>
                <AccordionContent className="">
                  Provide transparent, detailed reporting that tracks your SEO
                  performance. Our advanced analytics give you insights into
                  keyword rankings, organic traffic, conversion rates, and ROI,
                  ensuring you understand the impact of our optimization
                  efforts.
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
          <span className="block">Ready to Elevate Your Search Rankings?</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Your path to digital visibility starts here.
        </p>
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              Request SEO Strategy Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
