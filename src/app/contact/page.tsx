import type { Metadata } from "next";
import { Mail, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Watch This Capital. We work with software vendors, financial services providers, and other businesses who want to reach informed UK audiences.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="wtc-hero-gradient text-white py-16 md:py-20">
        <div className="page-container">
          <div className="max-w-2xl">
            <p className="text-[#d97706] text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h1>
            <p className="text-white/70 leading-relaxed">
              We work with software vendors, financial services providers, and specialist businesses
              who want to reach high-intent UK audiences. We also hear from readers with questions
              or feedback about our sites.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="page-container">
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* General */}
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#0f2340]/5 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-[#d97706]" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">General enquiries</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For questions about Watch This Capital, our editorial approach, or to report an
                inaccuracy on one of our sites, email us directly.
              </p>
              <a
                href="mailto:hello@watchthiscapital.com"
                className="text-sm font-semibold text-[#1e3a5f] hover:text-[#0f2340] transition-colors"
              >
                hello@watchthiscapital.com
              </a>
            </div>

            {/* Commercial */}
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#0f2340]/5 rounded-lg flex items-center justify-center">
                <Building2 size={20} className="text-[#d97706]" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Commercial partnerships</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We work with software vendors and financial services providers who want to be
                featured on our sites. If your product is genuinely good and a fit for one of our
                audiences, we want to hear from you.
              </p>
              <a
                href="mailto:partnerships@watchthiscapital.com"
                className="text-sm font-semibold text-[#1e3a5f] hover:text-[#0f2340] transition-colors"
              >
                partnerships@watchthiscapital.com
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="max-w-3xl mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">A note on commercial relationships:</strong> We disclose all commercial partnerships
              and affiliate arrangements on the relevant sites. Being featured on one of our sites does
              not guarantee a positive review. Our editorial assessments are independent of our commercial
              arrangements. See our{" "}
              <a href="/affiliate-disclosure" className="text-[#1e3a5f] underline font-medium">
                Affiliate Disclosure
              </a>{" "}
              for full details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
