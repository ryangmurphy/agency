"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Trees, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="px-4 left-0 right-0 top-0 py-6 sticky z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/10 border border-white/50 px-6 py-3 shadow-lg md:backdrop-blur-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Trees className="h-6 w-6" />
          <span className="text-xl font-semibold">Everpine</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNavbar
          isOpen={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
          trigger={
            <Button variant="ghost" size="icon" className="rounded-full">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          }
        />

        {/* Contact Button */}
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
