import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function OverviewPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">

      
       
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="text-sm font-medium text-primary">ABOUT US</div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Streamlining Digital Presence to Maximize Business Value
          </h1>
          <p className="text-lg text-muted-foreground">
            We provide <span className="text-primary">intuitive solutions</span>{" "}
            for managing and scaling web development. We offer{" "}
            <span className="text-primary">seamless integrations</span>, clear
            abstractions, and{" "}
            <span className="text-primary">powerful tools</span> to enhance
            business productivity and value across teams of{" "}
            <span className="text-primary">all sizes</span> and experience
            levels.
          </p>
        </div>
        <div className="relative aspect-square max-w-md  mx-auto">
          <Image
            src="/citaldelhilltower2.png"
            alt="Citaldel Hill Clock Tower"
            width={400}
            height={600}
            className="w-full h-full"
          />
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Committed to fostering growth and prosperity in businesses in
            Atlantic Canada
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex items-center space-x-8 flex-wrap">
        <p className="text-lg pr-24">
          We are a team of passionate developers, designers, and entrepreneurs.
        </p>
        <div className="flex flex-wrap gap-8 items-center">
          <Image
            src="/ryan.jpg"
            alt="Vercel"
            width={80}
            height={32}
            className="rounded-full border-2 border-primary"
          />
          <Image
            src="/ryan.jpg"
            alt="shadcn/ui"
            width={80}
            height={32}
            className="rounded-full border-2 border-primary"
          />
          <Image
            src="/ryan.jpg"
            alt="Tailwind CSS"
            width={80}
            height={32}
            className="rounded-full border-2 border-primary"
          />
          <Image
            src="/ryan.jpg"
            alt="Supabase"
            width={80}
            height={32}
            className="rounded-full border-2 border-primary"
          />
        </div>
        <Button asChild className="">
          <Link href="/about/team">Meet the Team</Link>
        </Button>
      </div>

      {/* Why We Began Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why We Began</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The Munk Devs are proud to be a Nova Scotia based business.
              We&apos;ve seen firsthand the challenges businesses face with
              complex digital needs. Additionally, we noticed a gap in modern
              tech solutions available in Atlantic Canada. Our company is
              designed to help businesses scale their online presence, automate
              tasks, and most importantly generate value.
            </p>
            <p className="text-muted-foreground">
              Our mission is to provide businesses with the tools they need to
              build and scale projects efficiently. We believe that by removing
              the barriers to entry, collaboration and productivity, we can help
              businesses focus on what they do best.
            </p>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <Image
            src="/group.webp"
            alt=""
            width={600}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <div className="p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold">2024 Q4</div>
          <div className="text-sm text-muted-foreground">Launched</div>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold"></div>
          <div className="text-sm text-muted-foreground"></div>
        </div>
      </div>
    </section>
  );
}
