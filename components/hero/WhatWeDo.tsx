import {
  BellIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Web Development",
    description:
      "Build responsive and scalable websites to engage users and improve business outcomes.",
    href: "/services/web-development",
    cta: "Learn more",
    background: (
      <Image
        src=""
        alt="Web Development Background"
        width={200}
        height={200}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "App Development",
    description:
      "Create user-friendly mobile applications to connect with your audience anywhere.",
    href: "/services/app-development",
    cta: "Learn more",
    background: (
      <Image
        src=""
        alt="App Development Background"
        width={200}
        height={200}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Website Design",
    description:
      "Design visually appealing and intuitive websites to enhance user experience.",
    href: "/services/website-design",
    cta: "Learn more",
    background: (
      <Image
        src=""
        alt="Website Design Background"
        width={200}
        height={200}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BackpackIcon,
    name: "Ecommerce",
    description:
      "Build custom ecommerce website that is easy to use and scale with your business.",
    href: "/services/ecommerce",
    cta: "Learn more",
    background: (
      <Image
        src=""
        alt="SEO Background"
        width={200}
        height={200}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "Search Engine Optimization",
    description:
      "Optimize your website to rank higher in search engines and attract more traffic.",
    href: "/services/seo",
    cta: "Learn more",
    background: (
      <Image
        src=""
        alt="AI Integration Background"
        width={200}
        height={200}
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

export async function WhatWeDo() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-semibold text-5xl font-bold text-center py-12">
        What We Do
      </h1>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
