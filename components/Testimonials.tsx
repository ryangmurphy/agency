import { Card, CardContent } from "@/components/ui/card";
import { Star, VerifiedIcon } from "lucide-react";
import Link from "next/link";

type Testimonial = {
  company: string;
  link: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    company: "Blended Athletics",
    link: "https://blendedathletics.com",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ultrices turpis sit amet sagittis. Donec placerat tortor eros. Nam cursus magna et leo aliquam,",
    author: "Dave Rafuse",
    title: "CEO & Owner",
    rating: 5,
  },
  {
    company: "LevelUp Apparel",
    link: "https://blendedathletics.com",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ultrices turpis sit amet sagittis. Donec placerat tortor eros. Nam cursus magna et leo aliquam,",
    author: "Mike Carew",
    title: "Owner",
    rating: 5,
  },
  {
    company: "TopCoat",
    link: "https://blendedathletics.com",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ultrices turpis sit amet sagittis. Donec placerat tortor eros. Nam cursus magna et leo aliquam,",
    author: "Nick McKenzie",
    title: "CEO",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="space-y-4">
        <div className="font-serif text-2xl pt-4">
          <Link href={testimonial.link} target="_blank" className="hover:underline hover:text-emerald-600">
            {testimonial.company}
          </Link>
        </div>
        <StarRating rating={testimonial.rating} />
        <blockquote className="text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-medium">
            {testimonial.author}
            <span>
              <VerifiedIcon />
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.title}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <div className="text-sm font-medium"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            See what some Maritimers have said
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
