interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main id="main">
      <div className="shell pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">
          <header className="md:col-span-3 mb-10">
            <p className="label label-accent mb-3">Legal</p>
            <p className="label">Last updated: {lastUpdated}</p>
          </header>
          <div className="md:col-span-9 max-w-3xl">
            <h1 className="heading text-4xl md:text-5xl mb-10">{title}</h1>
            <div className="prose-legal">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
