import { BentoGrid } from "@/components/WorkGrid"

const companies = [
  {
    name: "Blended Athletics",
    description: "Developed a custom social fitness mobile app",
    image: "/work/blended.jpg",
    services: ["App Development", "UX Design",]
  },
  {
    name: "LevelUp Apparel",
    description: "Developed website with Shopify CMS for local Ecommerce business to efficiently manage inventory and orders",
    image: "/work/clothes.webp",
    services: ["Web Development", "Ecommerce", "Shopify"]
  },
  {
    name: "TopCoat",
    description: "Created custom web design and developed website to convert leads into customers",
    image: "/work/tc.png",
    services: ["Web Development", "Web Design", "Technologies"]
  },
  {
    name: "OPCardGame",
    description: "Developed website with Shopify CMS for local Ecommerce business to efficiently manage inventory and orders",
    image: "/work/opcardgame.png",
    services: ["Web Development", "Ecommerce", "Shopify"]
  },
  {
    name: "This could be you here",
    description: "Contact us to see how we can help your business",
    image: "/placeholder.svg?height=400&width=400",
    services: ["Awesome", "Amazing", "Innovative"]
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center font-serif pb-8">Our Work</h1>
      <BentoGrid companies={companies} />
    </main>
  )
}
