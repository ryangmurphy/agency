import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./theme-toggle";

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  onClick,
}) => (
  <Link
    href={href}
    className="block py-2 hover:bg-accent rounded-md px-2 transition-colors hover:text-accent-foreground hover:underline-offset-2 hover:underline"
    onClick={onClick}
  >
    {children}
  </Link>
);

interface MobileNavLinksProps {
  onLinkClick: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ onLinkClick }) => (
  <div className="flex flex-col space-y-4 p-4">
    <div className="group">
      <div className="font-bold mb-2">Services</div>
      <div className="space-y-2">
        <MobileNavLink href="/services/web-development" onClick={onLinkClick}>
          Web Development
        </MobileNavLink>
        <MobileNavLink href="/services/web-design" onClick={onLinkClick}>
          Web Design
        </MobileNavLink>
        <MobileNavLink href="/services/app-development" onClick={onLinkClick}>
          App Development
        </MobileNavLink>
        <MobileNavLink href="/services/ecommerce" onClick={onLinkClick}>
          Ecommerce
        </MobileNavLink>
        <MobileNavLink href="/services/technologies" onClick={onLinkClick}>
          Technologies
        </MobileNavLink>
        <MobileNavLink href="/services/seo" onClick={onLinkClick}>
          SEO
        </MobileNavLink>
      </div>
    </div>

    <Link href="/work" onClick={onLinkClick}>
      <span className="font-bold">Work</span>
    </Link>

    <div className="group">
      <div className="font-semibold mb-2">About</div>
      <div className="space-y-2 pl-2">
        <MobileNavLink href="/about/team" onClick={onLinkClick}>
          Our Team
        </MobileNavLink>
        <MobileNavLink href="/about/overview" onClick={onLinkClick}>
          Overview
        </MobileNavLink>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <span>Theme</span>
      <ThemeToggle />
    </div>

    <Link href="/contact" className="w-full" onClick={onLinkClick}>
      <Button className="w-full rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90">
        Connect
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </Link>
  </div>
);

interface MobileNavbarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  onOpenChange,
  trigger,
}) => {
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <MobileNavLinks onLinkClick={() => onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar; 