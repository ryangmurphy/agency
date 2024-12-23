import Image from "next/image";
import Link from "next/link";
import { HeroBadge } from "@/components/hero/HeroBadge";
//import { BorderBeam } from "@/components/magicui/border-beam";
import WordPullUp from "@/components/magicui/word-pull-up";
import PulsatingButton from "@/components/magicui/pulsating-button";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { InfiniteScrollingCompanies } from "@/components/hero/InfiniteScrollingCompanies";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Dot pattern background 
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
*/}
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col mr-96">
              <HeroBadge />
              </div>
              <WordPullUp
                className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-left"
                words="Build Smarter."
              />
              <WordPullUp
                className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-left"
                words="Grow Faster."
              />
              <p className="text-lg text-muted-foreground">
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
          </div>

          {/* Right column - Floating images */}
          <div className="relative hidden h-[600px] lg:block">
            <div className="absolute -right-12 -top-8 w-64 rotate-6 transform">
              <Image
                src="/placeholder.svg?height=300&width=240"
                width={240}
                height={300}
                alt="Feature image 1"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
            <div className="absolute right-32 w-80 -rotate-3 transform overflow-hidden">
              <Iphone15Pro
                className="p-2 w-full h-full "
                src="/hero/trainwithus.png"
              />
            </div>
            <div className="absolute -right-4 top-64 w-80 rotate-6 transform">
              <Image
                src="/placeholder.svg?height=400&width=320"
                width={320}
                height={400}
                alt="Feature image 3"
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="pt-8 pb-6">
          <h3 className="text-center text-lg font-bold text-foreground">
            TRUSTED BY LEADING MARITIMES BUSINESSES
          </h3>
          <InfiniteScrollingCompanies />
        </div>
      </div>
    </section>
  );
}
