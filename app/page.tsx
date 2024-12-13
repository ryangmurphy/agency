import FAQ from "@/components/hero/FAQ";
import Hero from "@/components/hero/Hero";
//import HeroCTA from "@/components/HeroCTA";
import { WhatWeDo } from "@/components/hero/WhatWeDo";
import Testimonials from "@/components/hero/Testimonials";

import Achievements from "@/components/hero/Achievements"
import HeroContactSection from "@/components/hero/HeroContact";



export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Achievements />
      <Testimonials/>
      <FAQ />
      <HeroContactSection />
    </main>
  );
}
