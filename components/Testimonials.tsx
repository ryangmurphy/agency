import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Testimonial = {
  company: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    company: "Blended Athletics",
    quote:
      "The agency took our vision and turned it into a dynamic online platform. Our clients rave about the seamless experience—it's been a game-changer for our business.",
    author: "John Smith",
    title: "CEO & Owner",
    rating: 5,
  },
  {
    company: "TopCoat",
    quote:
      "From concept to launch, the  team was exceptional. Our site is fast, intuitive, and perfectly tailored to our brand. I can't recommend them enough!",
    author: "John Smith",
    title: "CEO",
    rating: 5,
  },
  {
    company: "LevelUp Apparel",
    quote:
      "Working with was the best decision for our digital transformation. They delivered a website that not only looks amazing but has streamlined our operations.",
    author: "John Smith",
    title: "Owner",
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
        <div className="font-serif text-2xl pt-4">{testimonial.company}</div>
        <StarRating rating={testimonial.rating} />
        <blockquote className="text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="space-y-1">
          <div className="font-medium">{testimonial.author}</div>
          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
