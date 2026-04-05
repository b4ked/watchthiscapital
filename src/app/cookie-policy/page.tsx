import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for Watch This Capital — how we use cookies and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="April 2025">
      <p>
        This cookie policy explains how Watch This Capital Ltd (&quot;Watch This Capital&quot;, &quot;we&quot;, &quot;us&quot;) uses
        cookies and similar technologies on our websites, including{" "}
        <strong>watchthiscapital.com</strong> and all sites within our portfolio.
      </p>
      <p>
        We comply with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR
        in our use of cookies.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the
        site remember information about your visit, such as your preferences or how you navigated the
        site, and they can help us improve the experience for future visits.
      </p>

      <h2>2. Types of cookies we use</h2>

      <h3>Strictly necessary cookies</h3>
      <p>
        These cookies are essential for our sites to function. They do not require your consent.
        They may be used for security, load balancing, and to remember form submissions within a session.
      </p>

      <h3>Analytics cookies</h3>
      <p>
        We use analytics tools — which may include Google Analytics and Vercel Analytics — to understand
        how visitors use our sites. These cookies collect aggregated, anonymised data about page views,
        session duration, and navigation paths. They help us improve our sites.
      </p>
      <p>
        Analytics cookies require your consent before being set. Where we use a cookie consent
        mechanism, analytics cookies will only be placed if you accept them.
      </p>

      <h3>Affiliate and third-party cookies</h3>
      <p>
        Our sites contain affiliate links. When you click an affiliate link, the third-party site
        may set cookies to track referrals and attribute commissions. These cookies are set by the
        third party and are governed by their own privacy and cookie policies, not ours.
      </p>
      <p>
        We do not control third-party cookies and are not responsible for them.
      </p>

      <h2>3. Specific cookies used on this site</h2>
      <p>
        The following table describes the primary cookies set on our sites. The exact cookies present
        may vary depending on the tools and services active at the time of your visit.
      </p>
      <ul>
        <li>
          <strong>_ga, _ga_* (Google Analytics):</strong> Used to distinguish users and sessions.
          Retention: 2 years. Consent required.
        </li>
        <li>
          <strong>vercel_analytics (Vercel Analytics):</strong> Privacy-friendly analytics for page
          performance. Does not use persistent tracking cookies.
        </li>
      </ul>

      <h2>4. How to manage cookies</h2>
      <p>You can control and manage cookies in the following ways:</p>
      <ul>
        <li>
          <strong>Browser settings:</strong> You can block or delete cookies through your browser
          settings. Note that blocking all cookies may affect the functionality of some sites.
        </li>
        <li>
          <strong>Google Analytics opt-out:</strong> Install the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics opt-out browser add-on
          </a>{" "}
          to prevent your data from being used by Google Analytics.
        </li>
        <li>
          <strong>Consent tool:</strong> Where a cookie consent banner is displayed on one of our sites,
          you can manage your preferences there at any time.
        </li>
      </ul>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this cookie policy from time to time to reflect changes in the cookies we use
        or changes in applicable law. The date at the top of this page indicates when it was last
        revised.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions about our use of cookies, contact us at:{" "}
        <a href="mailto:privacy@watchthiscapital.com">privacy@watchthiscapital.com</a>
      </p>
    </LegalPageLayout>
  );
}
