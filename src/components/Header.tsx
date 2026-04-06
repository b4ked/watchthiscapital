"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 shadow-2xl shadow-blue-900/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-screen-xl mx-auto">
        {/* Wordmark */}
        <Link href="/" className="group" aria-label="Watch This Capital home">
          <Image
            src="/logo-transparent.png"
            alt="Watch This Capital"
            width={160}
            height={80}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline uppercase tracking-wider text-sm text-on-surface-variant hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm uppercase tracking-widest font-headline"
          >
            Work with us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-white/5 py-4 flex flex-col gap-2 px-6 bg-surface-container-lowest"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-white transition-colors font-headline uppercase tracking-wider py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary px-5 py-3 rounded-lg text-sm uppercase tracking-widest font-headline text-center mt-2"
          >
            Work with us
          </Link>
        </nav>
      )}
    </header>
  );
}
