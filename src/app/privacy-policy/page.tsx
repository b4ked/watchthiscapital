import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Watch This Capital privacy policy — how we collect, use, and protect your personal data in compliance with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="April 2025">
      <p>
        This privacy policy explains how Watch This Capital Ltd (&quot;Watch This Capital&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
        collects, uses, and protects personal information when you visit our websites, including{" "}
        <strong>watchthiscapital.com</strong> and all sites within our portfolio.
      </p>
      <p>
        We are committed to protecting your privacy and handling your personal data in accordance with
        the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Watch This Capital Ltd is the data controller for personal data collected through our websites.
        Our registered address and company details are available on our{" "}
        <a href="/legal">Legal page</a>.
      </p>
      <p>
        If you have any questions about how we handle your data, contact us at:{" "}
        <a href="mailto:privacy@watchthiscapital.com">privacy@watchthiscapital.com</a>
      </p>

      <h2>2. What data we collect</h2>
      <p>We may collect the following types of personal data:</p>
      <ul>
        <li>
          <strong>Usage data:</strong> pages visited, time spent on site, browser type, device type,
          referring URL, and IP address — collected via analytics tools.
        </li>
        <li>
          <strong>Contact information:</strong> name and email address, if you contact us directly.
        </li>
        <li>
          <strong>Cookie data:</strong> see our <a href="/cookie-policy">Cookie Policy</a> for details.
        </li>
      </ul>
      <p>
        We do not collect sensitive personal data (such as financial account information, health data,
        or government-issued identity numbers) through our websites.
      </p>

      <h2>3. How we use your data</h2>
      <p>We use the data we collect to:</p>
      <ul>
        <li>Understand how our sites are used so we can improve them</li>
        <li>Respond to enquiries you send us</li>
        <li>Comply with legal obligations</li>
        <li>Detect and prevent fraud or abuse</li>
      </ul>
      <p>
        We do not use your personal data for automated decision-making or profiling that produces legal
        or similarly significant effects.
      </p>

      <h2>4. Legal basis for processing</h2>
      <p>We process your personal data on the following legal bases:</p>
      <ul>
        <li>
          <strong>Legitimate interests:</strong> analysing site usage to improve our services, where
          your interests do not override ours.
        </li>
        <li>
          <strong>Consent:</strong> where you have given explicit consent, for example by accepting
          analytics cookies.
        </li>
        <li>
          <strong>Legal obligation:</strong> where we are required by law to process data.
        </li>
      </ul>

      <h2>5. Data sharing and third parties</h2>
      <p>
        We do not sell your personal data. We may share data with trusted third-party service providers
        who process it on our behalf, including:
      </p>
      <ul>
        <li>Analytics providers (e.g. Google Analytics, Vercel Analytics)</li>
        <li>Hosting and infrastructure providers (e.g. Vercel)</li>
        <li>Email service providers, where you have contacted us</li>
      </ul>
      <p>
        We require all third-party processors to handle your data securely and in accordance with UK GDPR.
      </p>
      <p>
        Some of our content contains affiliate links. When you click these links, the third-party site
        may set cookies. We are not responsible for the privacy practices of third-party websites.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain personal data for only as long as necessary to fulfil the purposes for which it was
        collected, or as required by law. Analytics data is typically retained for 26 months.
        Contact enquiry data is retained for up to 24 months.
      </p>

      <h2>7. Your rights under UK GDPR</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
        <li><strong>Rectification:</strong> request that inaccurate data be corrected</li>
        <li><strong>Erasure:</strong> request that your data be deleted, subject to legal obligations</li>
        <li><strong>Restriction:</strong> request that we limit how we process your data</li>
        <li><strong>Portability:</strong> receive your data in a structured, machine-readable format</li>
        <li><strong>Object:</strong> object to processing based on legitimate interests</li>
        <li><strong>Withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:privacy@watchthiscapital.com">privacy@watchthiscapital.com</a>.
        We will respond within 30 days.
      </p>
      <p>
        You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>8. Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect your personal data against
        unauthorised access, loss, or disclosure. Our sites are served over HTTPS.
      </p>

      <h2>9. International transfers</h2>
      <p>
        Some of our third-party service providers may process data outside the UK. Where this occurs,
        we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or UK
        adequacy decisions.
      </p>

      <h2>10. Children</h2>
      <p>
        Our sites are not directed at children under 13. We do not knowingly collect personal data
        from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this page indicates when
        it was last revised. Continued use of our sites after changes constitutes acceptance of the
        revised policy.
      </p>

      <h2>12. Contact</h2>
      <p>
        For any privacy-related questions, contact us at:{" "}
        <a href="mailto:privacy@watchthiscapital.com">privacy@watchthiscapital.com</a>
      </p>
    </LegalPageLayout>
  );
}
