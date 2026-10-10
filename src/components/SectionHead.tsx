import FadeUp from "@/components/FadeUp";

interface SectionHeadProps {
  index: string;
  label: string;
  title: string;
  intro?: React.ReactNode;
}

/* Index and label on the left, heading and intro on the right. */
export default function SectionHead({ index, label, title, intro }: SectionHeadProps) {
  return (
    <FadeUp className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-5 mb-12 md:mb-16">
      <p className="label md:col-span-3 flex gap-3 md:pt-2">
        <span className="label-accent">{index}</span>
        <span>{label}</span>
      </p>
      <div className="md:col-span-9 max-w-3xl">
        <h2 className="heading text-3xl md:text-[2.75rem]">{title}</h2>
        {intro && (
          <p className="mt-5 text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
