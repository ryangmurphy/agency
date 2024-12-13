import Image from "next/image";
import Link from "next/link";
import { HeroBadge } from "@/components/hero/HeroBadge";
import SocialProof from "./SocialProof";
import { BorderBeam } from "@/components/magicui/border-beam";
import WordPullUp from "@/components/magicui/word-pull-up";
import PulsatingButton from "@/components/magicui/pulsating-button";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background py-8 md:py-16">
      <div className="absolute inset-0 max-w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <HeroBadge />
            <WordPullUp
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              words="Build Smarter. Grow Faster."
            />
            <p className="mx-auto max-w-[700px] text-lg text-foreground sm:text-xl pt-6">
              Websites, apps, and software crafted to elevate your brand and
              grow your business. From idea to execution—your vision, our
              expertise.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/contact">
              <PulsatingButton>Get Started Today</PulsatingButton>
            </Link>
          </div>
          <div className="py-7">
            <SocialProof />
          </div>
          <div className="relative w-full px-2">
            <div className="overflow-hidden">
              <Iphone15Pro
                className="mx-auto relative z-10 drop-shadow-2xl p-2"
                src="/hero/trainwithus.png"
              />
              <Image
                src="/hero/dalle3.webp"
                alt="Train with Us"
                width={1920}
                height={1080}
                className="mx-auto w-full h-full absolute z-0 top-0 left-0 rounded-2xl"
              />
              <BorderBeam
                size={250}
                borderWidth={3}
                duration={30}
                className="rounded-2xl"
                colorFrom="#32CD32"
                colorTo="#0096FF"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
