import Link from "next/link";
import Image from "next/image";
import { STATUS } from "@/lib/site";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/legal", label: "Legal" },
];

const siteLinks = [
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/ventures", label: "Ventures" },
  { href: "/media", label: "Media Kit" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-line">
      <div className="shell grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 py-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-6">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/mark.png"
              alt=""
              width={796}
              height={431}
              className="h-7 w-auto"
            />
            <span className="font-headline font-medium text-white tracking-tight">
              Watch This <span className="text-on-surface-variant">Capital</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant max-w-sm">
            Managed AI agents for routine business workflows. Sourced, approved
            by a person, and scored before they are trusted.
          </p>
          <p className="label mt-6 flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 bg-primary" />
            Service status: {STATUS}
          </p>
        </div>

        {/* Company */}
        <div className="md:col-span-3">
          <h2 className="label mb-5">Company</h2>
          <ul className="space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-on-surface hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-3">
          <h2 className="label mb-5">Legal</h2>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-on-surface hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="shell py-6 flex flex-col md:flex-row justify-between gap-2 label !normal-case !tracking-normal text-xs">
          <span>© {currentYear} Watch This Capital Ltd. All rights reserved.</span>
          <span>United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
