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
    <main className="py-12 md:py-16">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 pb-6 border-b border-slate-200">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h1>
            <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          </header>
          <div className="prose-legal">{children}</div>
        </div>
      </div>
    </main>
  );
}
