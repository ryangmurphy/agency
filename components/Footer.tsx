import Image from "next/image";
import {
  IconBrandLinkedinFilled,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandX,
} from "@tabler/icons-react";
import { Trees } from "lucide-react";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "Ecommerce", href: "/services/ecommerce" },
      { name: "SEO", href: "/services/seo" },
      { name: "Technologies", href: "/services/technologies" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about/overview" },
      { name: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-12">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-muted-foreground to-transparent my-6"></div>
      <div className="container mx-auto w-full">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Trees className="size-11" />
                  <p className="text-3xl font-semibold">Everpine</p>
                </span>
                <p className="mt-4 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="/">
                    <IconBrandLinkedinFilled className="size-7" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="/">
                    <IconBrandInstagram className="size-7" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="/">
                    <IconBrandMeta className="size-7" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="/">
                    <IconBrandX className="size-7" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-2 md:mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-2 md:space-y-4 text-sm text-muted-foreground">
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
          <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 Everpine. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="md:text-sm text-xs hover:text-primary">
                <a href="/terms-of-service"> Terms and Conditions</a>
              </li>
              <li className="md:text-sm text-xs hover:text-primary">
                <a href="/privacy-policy"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
