import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Blended Athletics", logo: "/hero/ba-logo-black.png" },
  { name: "TopCoat", logo: "/hero/topcoat-black.png" },
  { name: "Train With Us", logo: "/hero/train-with-us.png" },
  { name: "LevelUp", logo: "/hero/level-up.png" },
  { name: "OPCardGame", logo: "/hero/op-black.png" },
];

export default function Companies() {
  return (
    <section id="companies">
      <div className="">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-lg font-bold text-foreground">
            TRUSTED BY LEADING MARITIMES BUSINESSES
          </h3>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center place-items-center gap-4">
              {companies.map((company, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <Image
                    src={company.logo}
                    width={250}
                    height={150}
                    className="object-contain h-32 w-auto rounded-2xl dark:invert"
                    alt={company.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
