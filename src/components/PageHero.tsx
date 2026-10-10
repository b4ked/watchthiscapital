interface PageHeroProps {
  label: string;
  title: string;
  intro: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({ label, title, intro, children }: PageHeroProps) {
  return (
    <section>
      <div className="shell pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-4xl">
          <p className="label label-accent mb-6">{label}</p>
          <h1 className="display text-[2.5rem] sm:text-6xl md:text-7xl mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            {intro}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
