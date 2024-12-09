import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroBadge } from "@/components/HeroBadge";
import SocialProof from "./SocialProof";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <HeroBadge />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              We build scalable web applications
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl py-8">
              Expert web development that drives results. From stunning designs
              to powerful functionality, we build solutions that help your
              business grow.
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
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
          <div className="pt-2">
            <SocialProof />
          </div>
          <div className="relative pt-12 w-full">
            <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
              <Iphone15Pro className="mx-auto" />
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Project Dashboard Preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
