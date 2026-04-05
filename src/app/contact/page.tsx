import type { Metadata } from "next";
import { Mail, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Watch This Capital. We work with software vendors and financial services providers who want to reach high-intent UK audiences.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative px-6 md:px-10 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-sm">
              Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.9] tracking-tighter text-white mb-8">
              Talk to us.
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              We work with software vendors and financial services providers who
              want to reach informed, high-intent UK audiences. We also hear from
              readers with questions or feedback about our sites.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact options ── */}
      <section className="py-20 px-6 md:px-10 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {/* General */}
            <div className="bg-surface-container p-8 rounded-xl flex flex-col gap-5">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-headline font-bold text-white mb-3">
                  General enquiries
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Questions about Watch This Capital, our editorial approach, or
                  to report an inaccuracy on one of our sites.
                </p>
              </div>
              <a
                href="mailto:hello@watchthiscapital.com"
                className="text-sm font-bold text-primary hover:text-primary-fixed transition-colors font-headline uppercase tracking-widest"
              >
                hello@watchthiscapital.com
              </a>
            </div>

            {/* Commercial */}
            <div className="bg-surface-container p-8 rounded-xl flex flex-col gap-5">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-headline font-bold text-white mb-3">
                  Commercial partnerships
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  If your product is genuinely the right fit for one of our
                  audiences, we will give it a fair assessment and a proper
                  audience. We work with vendors who can stand independent
                  editorial scrutiny.
                </p>
              </div>
              <a
                href="mailto:partnerships@watchthiscapital.com"
                className="text-sm font-bold text-primary hover:text-primary-fixed transition-colors font-headline uppercase tracking-widest"
              >
                partnerships@watchthiscapital.com
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="max-w-3xl mt-10 bg-surface-container-high rounded-xl p-6 border border-outline-variant/20">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <span className="text-white font-semibold">
                On commercial relationships:
              </span>{" "}
              Every partnership and affiliate arrangement on our sites is
              disclosed. Being featured does not guarantee a positive assessment.
              Our editorial judgement is not for sale — that is what makes a
              listing on one of our sites worth having. See our{" "}
              <a
                href="/affiliate-disclosure"
                className="text-primary underline font-medium"
              >
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
