import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

export async function HeroBadge2() {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        🍁<hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#003DA5] via-[#FFFFFF] to-[#FFD100] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Backed by Nova Scotians
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
