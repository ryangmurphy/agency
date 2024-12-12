import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroContactSection() {
  return (
    <div className="w-full max-w-3xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        <span className="block">Ready to grow in the Maritimes?</span>
        <span className="block text-primary">
          Let&apos;s start today.
        </span>
      </h2>
      <p className="mt-4 text-xl text-muted-foreground">
        Our team is here to turn your ideas into reality.
        From concept to launch, we&apos;ve got you covered.
      </p>
      <div className="mt-8">
        <Link href="/contact" passHref>
          <Button size="lg" className="text-lg px-8 py-3">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
