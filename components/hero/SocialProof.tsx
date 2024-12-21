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
    <div className="flex flex-row justify-center place-items-center gap-4">
      {companies.map((company, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={company.logo}
            width={250}
            height={150}
            className="object-contain h-20 w-auto rounded-2xl dark:invert"
            alt={company.name}
          />
        </div>
      ))}
    </div>
  );
}
