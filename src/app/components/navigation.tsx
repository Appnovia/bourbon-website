"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Services",
      items: ["Marine & Logistics", "Subsea Operations", "Passenger Mobility"],
    },
    {
      label: "Group",
      items: ["About Us", "Leadership", "Locations"],
    },
    {
      label: "Careers",
      items: ["Job Opportunities", "Life at Sea", "Training"],
    },
    {
      label: "News & Media",
      items: ["Latest News", "Press Releases", "Media Kit"],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image
            width={1000}
            height={1000}
            src="/assets/logo_bourbon.png"
            alt="logo"
            className="h-20 w-auto object-cover"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-[var(--transition-smooth)] font-medium">
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-[var(--transition-smooth)]" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-[var(--shadow-strong)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-[var(--transition-smooth)]"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#cc0000] text-white" size="lg">
              CONTACT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <Button size="lg" className="w-full bg-[#cc0000]">
              CONTACT
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
