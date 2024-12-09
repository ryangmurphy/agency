import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Company {
  name: string;
  description: string;
  image: string;
  services: string[];
}

interface BentoGridProps {
  companies: Company[];
}

export function BentoGrid({ companies }: BentoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {companies.map((company, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl aspect-square group"
        >
          <Image
            src={company.image}
            alt={company.name}
            width={1200}
            height={600}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold mb-1">{company.name}</h3>
            <p className="text-sm mb-2 line-clamp-2">{company.description}</p>
            <div className="flex flex-wrap gap-2">
              {company.services.map((service, serviceIndex) => (
                <Badge
                  key={serviceIndex}
                  variant="secondary"
                  className="bg-white/20 text-white"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
