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
    <footer className="bg-[#0f2340] text-white/70 mt-20 border-t border-white/10">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-[#d97706] font-bold text-lg mb-3">Watch This Capital</p>
            <p className="text-sm leading-relaxed text-white/60">
              We build trusted content and comparison resources in UK regulated markets.
              Our sites help people make confident, informed decisions.
            </p>
          </div>

          {/* Site links */}
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Company</p>
            <ul className="flex flex-col gap-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Legal</p>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} Watch This Capital Ltd. All rights reserved.</p>
          <p>
            Registered in England and Wales.
            Company number: <span className="text-white/60">[pending — update after incorporation]</span>.
            ICO Registration: <span className="text-white/60">[pending]</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
