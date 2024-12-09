import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "BlendedFitness",
    img: "/balogo.png",
  },
  {
    name: "LevelUp",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "OP Card Game",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Kyle Wells",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white/40 bg-gray-950/[.01] hover:bg-gray-950/[.05] backdrop-blur-lg",
        // dark styles
        "dark:border-white/20 dark:bg-white/20 dark:hover:bg-white/30 backdrop-blur-lg"
      )}
    >
      <div className="flex flex-row justify-center gap-2">
        <Image className="rounded-xl" width={64} height={40} alt={`${name} logo`} src={img} />
      </div>
      <blockquote className="mt-2 text-sm">{name}</blockquote>
    </figure>
  );
};

export function InfiniteScroll() {
  return (
    <div className="relative flex py-6 w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}
