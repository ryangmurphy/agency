"use client";

import { Timeline } from "./timeline";
import { useRef } from "react";

import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";

const timelineItems = [
  {
    process:
      "We’ll kick things off with a call to learn about your business, your audience, and your goals. Whether it’s a new website or optimizing your current one, we’re here to help you make a strong digital impression.",
    title: "Discovery Call",
    step: 1,
  },
  {
    process:
      "After understanding your needs, we’ll outline a custom plan to enhance your online presence. This includes a clear timeline, design concepts, and actionable steps tailored to your brand.",
    title: "Strategy & Planning",
    step: 2,
  },
  {
    process:
      "While we bring your vision to life, you’ll receive regular updates on progress. Our process is transparent, and we ensure that every detail aligns with your business objectives.",
    title: "Development in Action",
    step: 3,
  },
  {
    process:
      "Once everything is finalized, we’ll deliver your completed project, ready to launch or implement. Plus, we’ll be available for post-delivery support to ensure your success.",
    title: "Launch & Growth",
    step: 4,
  },
];

export default function Process() {
const confettiRef = useRef<ConfettiRef>(null);

  return (
    <section id="Process" className="relative py-32 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Our Process
      </h2>
      <Timeline items={timelineItems} />
      <div className="flex justify-center mx-auto pt-36">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Celebrate
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-96 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      </div>
    </section>
  );
}
