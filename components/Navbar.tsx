"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Trees, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Reusable ListItem component (same as original)
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  // Mobile Navigation Links
  const MobileNavLinks = () => (
    <div className="flex flex-col space-y-4 p-4">
      <div className="group">
        <div className="font-bold mb-2">Services</div>
        <div className="space-y-2">
          <MobileNavLink href="/services/web-development">
            Web Development
          </MobileNavLink>
          <MobileNavLink href="/services/web-design">Web Design</MobileNavLink>
          <MobileNavLink href="/services/app-development">
            App Development
          </MobileNavLink>
          <MobileNavLink href="/services/ecommerce">Ecommerce</MobileNavLink>
          <MobileNavLink href="/services/technologies">
            Technologies
          </MobileNavLink>
          <MobileNavLink href="/services/seo">SEO</MobileNavLink>
        </div>
      </div>

      <Link href="/work">
        <span className="font-bold">Work</span>
      </Link>

      <div className="group">
        <div className="font-semibold mb-2">About</div>
        <div className="space-y-2 pl-2">
          <MobileNavLink href="/about/team">Our Team</MobileNavLink>
          <MobileNavLink href="/about/overview">Overview</MobileNavLink>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span>Theme</span>
        <ThemeToggle />
      </div>

      <Link href="/contact" className="w-full">
        <Button className="w-full rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90">
          Connect
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </div>
  );

  // Mobile Navigation Link Component
  const MobileNavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="block py-2 hover:bg-accent rounded-md px-2 transition-colors hover:text-accent-foreground hover:underline-offset-2 hover:underline"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <div className="px-4 left-0 right-0 top-0 py-6 sticky z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/10 border border-white/50 px-6 py-3 shadow-lg backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Trees className="h-6 w-6" />
          <span className="text-xl font-semibold">MunkDevs</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/services/web-development"
                    title="Web Development"
                  >
                    Modern, responsive, and scalable websites.
                  </ListItem>
                  <ListItem href="/services/web-design" title="Web Design">
                    Visually stunning custom UX/UI
                  </ListItem>
                  <ListItem
                    href="/services/app-development"
                    title="App Development"
                  >
                    Intuitive mobile experiences for all users.
                  </ListItem>
                  <ListItem href="/services/ecommerce" title="Ecommerce">
                    Build powerful online shopping experience.
                  </ListItem>
                  <ListItem href="/services/technologies" title="Technologies">
                    Cutting-edge tools for future-ready solutions.
                  </ListItem>
                  <ListItem href="/services/seo" title="SEO">
                    Boost visibility and attract organic traffic.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/work"
                className="text-primary cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:opacity-50"
              >
                Work
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about/team"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Our Team
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Meet our team, full of hard work and open minds
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about/overview" title="Overview">
                    Learn about our story and mission values
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <MobileNavLinks />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Connect Button */}
        <Link href="/contact" className="hidden md:block">
          <Button className="rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            Connect
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
