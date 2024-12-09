import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
//import HeroCTA from "@/components/HeroCTA";
import { WhatWeDo } from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";

import Achievements from "@/components/Achievements"
import HeroContactSection from "@/components/HeroContact";



export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhatWeDo />
      <Achievements />
      <Testimonials/>
      <FAQ />
      <HeroContactSection />
    </main>
  );
}
