//import Image from "next/image";
import Link from "next/link";
import { HeroBadge } from "@/components/hero/HeroBadge";
//import { BorderBeam } from "@/components/magicui/border-beam";
import WordPullUp from "@/components/magicui/word-pull-up";
import PulsatingButton from "@/components/magicui/pulsating-button";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { InfiniteScrollingCompanies } from "@/components/hero/InfiniteScrollingCompanies";
import { Button } from "../ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background py-8 md:py-16 overflow-hidden">
      <div className="absolute inset-0 max-w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0" style={{
          maskImage: 'radial-gradient(circle at 50% 39%, black, transparent 55%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 39%, black, transparent 55%)'
        }}>
         <DotPattern />
        </div>
      </div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <HeroBadge />
            <WordPullUp
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              words="Build Smarter. Grow Faster."
            />
            <p className="mx-auto max-w-[700px] text-lg text-foreground sm:text-xl md:pt-6">
              Websites, apps, and software crafted to elevate your brand and
              grow your business. From idea to execution—your vision, our
              expertise.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <Link href="/contact">
              <PulsatingButton>Schedule a Call</PulsatingButton>
            </Link>
            <Link href="/work">
              <Button>View Our Work</Button>
            </Link>
          </div>

          <div className="py-7">
            <h3 className="text-center text-lg font-bold text-foreground">
              TRUSTED BY LEADING MARITIMES BUSINESSES
            </h3>
            <InfiniteScrollingCompanies />
          </div>
          <div className="relative w-full px-2">
            <div className="overflow-hidden">
              <Iphone15Pro
                className="mx-auto relative z-10 p-2 w-full"
                src="/hero/trainwithus.png"
              />
              {/*
              <Image
                src=""
                alt="Train with Us"
                width={1920}
                height={1080}
                className="mx-auto w-full h-full absolute z-0 top-0 left-0 rounded-2xl hidden md:block"
              />
              <BorderBeam
                size={250}
                borderWidth={3}
                duration={30}
                className="rounded-2xl"
                colorFrom="#32CD32"
                colorTo="#0096FF"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
