import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "App Development", href: "#" },
      { name: "Web Design", href: "#" },
      { name: "Ecommerce", href: "#" },
      { name: "AI Integration", href: "#" },
      { name: "SEO", href: "#" },
      { name: "Technologies", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about/overview" },
      { name: "Team", href: "/about/team" },
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const Footer7 = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto w-full">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <img src="" alt="logo" className="h-11" />
                  <p className="text-3xl font-semibold">MunkDevs</p>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  we are goated
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <Linkedin className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <Instagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <Facebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <Twitter className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 MunkDevs. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer7;
