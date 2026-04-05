import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/legal", label: "Legal" },
];

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-10 py-16 max-w-screen-xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="text-xl font-black text-white font-headline mb-4">
            Watch This Capital
          </p>
          <p className="text-sm leading-relaxed text-on-surface-variant max-w-sm">
            We build trusted content and comparison resources in UK regulated
            markets — helping people make confident, informed decisions without
            jargon or bias.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-headline font-bold mb-5 text-xs uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-headline font-bold mb-5 text-xs uppercase tracking-widest">
            Legal
          </h4>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-10 py-6 border-t border-white/5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-on-surface-variant/60">
        <span>© {currentYear} Watch This Capital Ltd. All rights reserved.</span>
        <span>
          Registered in England and Wales · Company number:{" "}
          <span className="text-on-surface-variant">[pending]</span> · ICO:{" "}
          <span className="text-on-surface-variant">[pending]</span>
        </span>
      </div>
    </footer>
  );
}
