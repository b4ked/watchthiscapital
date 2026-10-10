"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-line">
      <div className="shell flex justify-between items-center h-16">
        {/* Mark + name */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Watch This Capital home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/mark.png"
            alt=""
            width={796}
            height={431}
            className="h-6 w-auto"
            priority
          />
          <span className="font-headline font-medium text-[15px] tracking-tight text-white">
            Watch This <span className="text-on-surface-variant">Capital</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`label transition-colors duration-200 hover:text-white ${
                  active ? "!text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary !py-2.5">
            Discuss a workflow
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-line bg-surface-container-lowest"
          aria-label="Mobile navigation"
        >
          <div className="shell py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label py-3.5 border-b border-line hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-5"
            >
              Discuss a workflow
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
