import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroBadge } from "@/components/HeroBadge";
import SocialProof from "./SocialProof";



export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background pt-16 md:py-24">
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <HeroBadge />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build Smarter. Grow Faster.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl py-8">
              Websites, apps, and software crafted to elevate your brand and
              grow your business. From idea to execution—your vision, our
              expertise.
            </p>
            <h2 className="text-xl font-bold">
              Helping Canadian businesses scale their digital presence
            </h2>
          </div>

          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg" className="h-12 px-8 rounded-2xl">
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-2xl"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
          <div className="pt-2">
            <SocialProof />
          </div>
          <div className="relative pt-12 w-full">
            <div className="overflow-hidden rounded-lg border bg-background shadow-2x">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Project Dashboard Preview"
                className="w-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
