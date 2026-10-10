import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { STATUS_NOTE } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="section bg-surface-container-lowest">
      <div className="shell py-20 md:py-28">
        <FadeUp className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="label label-accent mb-6">Next step</p>
            <h2 className="heading text-3xl md:text-5xl max-w-2xl">
              Have a workflow in mind? Tell us about it.
            </h2>
            <p className="mt-5 text-on-surface-variant leading-relaxed max-w-xl">
              {STATUS_NOTE} If you describe the process, we can tell you
              whether it is the kind of work an agent would suit.
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <Link href="/contact" className="btn-primary">
              Contact us <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
