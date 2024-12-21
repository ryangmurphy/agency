
import Marquee from "@/components/magicui/marquee";
import Companies from "@/components/hero/SocialProof";

export function InfiniteScrollingCompanies() {
  return (
    <div className="relative flex py-12 w-full flex-col items-center justify-center overflow-hidden rounded-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        <Companies />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 md:bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 md:bg-gradient-to-l from-background dark:from-background"></div>
    </div>
  );
}
