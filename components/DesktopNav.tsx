import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./theme-toggle";

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

export const DesktopNav: React.FC = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/services/web-development" title="Web Development">
                Modern, responsive, and scalable websites.
              </ListItem>
              <ListItem href="/services/web-design" title="Web Design">
                Visually stunning custom UX/UI
              </ListItem>
              <ListItem href="/services/app-development" title="App Development">
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
                    <div className="mb-2 mt-4 text-lg font-medium">Our Team</div>
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
  );
};

export default DesktopNav; 