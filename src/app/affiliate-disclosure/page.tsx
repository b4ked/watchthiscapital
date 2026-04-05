import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Watch This Capital affiliate disclosure — how our commercial relationships work and how they do and do not affect our content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure" lastUpdated="April 2025">
      <p>
        Watch This Capital Ltd operates a portfolio of content and comparison websites. Some of our
        content earns affiliate commission when readers purchase, sign up to, or take other actions
        with products or services we feature or recommend.
      </p>
      <p>
        This disclosure applies to <strong>watchthiscapital.com</strong> and all sites in our
        portfolio, including but not limited to:
      </p>
      <ul>
        <li>SoleTraderGuide.co.uk</li>
      </ul>
      <p>
        We are transparent about these arrangements because you have a right to know when a
        commercial relationship may exist. This page explains exactly how it works.
      </p>

      <h2>1. What is affiliate marketing?</h2>
      <p>
        Affiliate marketing is a performance-based commercial arrangement. When we include an affiliate
        link to a product or service, and a reader clicks that link and completes an action (such as
        purchasing a subscription or signing up for a trial), we may receive a commission from the
        product or service provider.
      </p>
      <p>
        The commission is paid by the advertiser. <strong>It does not affect the price you pay.</strong>
      </p>

      <h2>2. How we handle affiliate relationships</h2>
      <p>
        Our editorial assessments — recommendations, rankings, comparisons, and reviews — are made
        independently of our commercial relationships. We do not adjust our editorial judgement to
        favour a product because we earn more commission from it.
      </p>
      <p>Our approach to affiliate content:</p>
      <ul>
        <li>
          We only recommend products and services we believe are genuinely useful to our readers.
        </li>
        <li>
          We do not accept payment for editorial coverage. Being featured does not guarantee a
          positive review.
        </li>
        <li>
          We assess products based on quality, value, suitability for our audience, and where possible,
          user feedback and testing.
        </li>
        <li>
          Where we have a commercial relationship with a product that we also editorially assess,
          we disclose it clearly on that page.
        </li>
        <li>
          We include non-affiliated products and services in our comparisons where they are relevant
          and useful to the reader.
        </li>
      </ul>

      <h2>3. Which affiliate networks and programmes we use</h2>
      <p>
        We participate in a range of affiliate programmes relevant to the audiences we serve. These may
        include, but are not limited to:
      </p>
      <ul>
        <li>Direct affiliate programmes with software vendors (accounting software, compliance tools)</li>
        <li>AWIN (UK affiliate network)</li>
        <li>Partnerstack</li>
        <li>Other sector-specific affiliate programmes</li>
      </ul>
      <p>
        The specific programmes active on any given site are disclosed at the site level within the
        relevant content.
      </p>

      <h2>4. ASA and CAP Code compliance</h2>
      <p>
        We comply with the UK Advertising Standards Authority (ASA) guidelines and the Committee of
        Advertising Practice (CAP) Code, including requirements for the clear and prominent labelling
        of affiliate content.
      </p>
      <p>
        Where a piece of content has been paid for or otherwise commissioned by a third party, it
        will be clearly labelled as &quot;Sponsored&quot; or &quot;Paid&quot;.
      </p>
      <p>
        Standard editorial content that contains affiliate links — where the content itself was
        produced by us independently — is identified via site-level affiliate disclosure notices,
        including notices in article headers, site footers, and this disclosure page.
      </p>

      <h2>5. FTC compliance</h2>
      <p>
        Although our sites are primarily UK-focused, we also comply with the US Federal Trade
        Commission (FTC) guidelines on endorsements and testimonials where applicable. This means
        clearly disclosing any material connection between us and the products or services we recommend.
      </p>

      <h2>6. Content that does not involve affiliate links</h2>
      <p>
        Not all of our content contains affiliate links. We also publish purely informational content
        — guides, explainers, how-to articles — that does not include any commercial links. We do not
        lower our editorial standards for this content simply because it does not generate revenue.
      </p>

      <h2>7. Questions and concerns</h2>
      <p>
        If you have a question about a specific recommendation, a product we have covered, or our
        approach to commercial relationships, contact us at:{" "}
        <a href="mailto:hello@watchthiscapital.com">hello@watchthiscapital.com</a>
      </p>
      <p>
        If you believe we have not complied with advertising or disclosure standards, you may also
        report this to the ASA at{" "}
        <a href="https://www.asa.org.uk" target="_blank" rel="noopener noreferrer">
          asa.org.uk
        </a>.
      </p>
    </LegalPageLayout>
  );
}
