import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main">
      <div className="shell pt-40 pb-32">
        <p className="label label-accent mb-6">404</p>
        <h1 className="display text-5xl md:text-7xl mb-8">Page not found.</h1>
        <p className="text-lg text-on-surface-variant max-w-xl mb-9">
          The page you were looking for has moved or does not exist.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
