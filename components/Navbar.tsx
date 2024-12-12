"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Trees } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="px-4 left-0 right-0 top-0 py-6 sticky z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/10 border border-white/50 px-6 py-3 shadow-md backdrop-blur-2xl">
        <Link href="/" className="flex items-center space-x-2">
          <Trees className="h-6 w-6" />
          <span className="text-xl font-semibold">Everpine</span>
        </Link>

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
                className="text-primary cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:opacity-50"
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
                  {/*
                  <ListItem href="/about/blog" title="Blog">
                    Sign up for our newsletter and blog
                  </ListItem>
                  <ListItem href="/news" title="News">
                    News
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/contact">
          <Button className="rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            Connect
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

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
