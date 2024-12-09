import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Blended Athletics", logo: "/balogo.png" },
  { name: "OPCardGame", logo: "/opcardlogo.png" },
  { name: "LevelUp", logo: "/balogo.png" },
  { name: "TopCoat", logo: "/topcoat.jpg" },
  { name: "OPCardGames", logo: "/500x500.png" },
  { name: "Blended Athletics", logo: "/balogo.png" },
];

export default function Companies() {
  return (
    <section id="companies">
      <div className="pt-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-md font-semibold text-gray-600">
            TRUSTED BY LEADING MARITIMES BUSINESSES
          </h3>
          <div className="relative mt-6 overflow-hidden">
            <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 xl:grid-cols-6">
              {companies.map((company, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <Image
                    src={company.logo}
                    width={250}
                    height={150}
                    className="object-contain h-32 w-auto rounded-2xl dark:brightness-0 dark:invert"
                    alt={company.name}
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-transparent dark:from-white/5"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-transparent dark:from-white/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
