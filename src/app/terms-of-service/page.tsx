import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Watch This Capital and its portfolio of websites.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="April 2025">
      <p>
        These terms of service (&quot;Terms&quot;) govern your use of the websites operated by Watch This Capital Ltd
        (&quot;Watch This Capital&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), including{" "}
        <strong>watchthiscapital.com</strong> and all sites within our portfolio.
      </p>
      <p>
        By accessing or using any Watch This Capital site, you agree to be bound by these Terms.
        If you do not agree, please do not use our sites.
      </p>

      <h2>1. Our sites and content</h2>
      <p>
        Watch This Capital operates informational and comparison websites. The content on our sites is
        intended to provide general guidance and educational information. It does not constitute
        professional advice — financial, legal, tax, or otherwise.
      </p>
      <p>
        You should not rely solely on our content when making financial, legal, or tax decisions.
        Always consult a qualified professional where appropriate.
      </p>

      <h2>2. Accuracy and availability</h2>
      <p>
        We make reasonable efforts to ensure the accuracy of the information we publish. However,
        regulations, product offerings, and market conditions change frequently. We do not guarantee
        that our content is always current, complete, or error-free.
      </p>
      <p>
        We reserve the right to modify, suspend, or discontinue any part of our sites at any time
        without notice.
      </p>

      <h2>3. Affiliate and commercial relationships</h2>
      <p>
        Some of our content contains affiliate links. If you click an affiliate link and purchase a
        product or service, we may earn a commission. This does not affect the price you pay.
      </p>
      <p>
        Our editorial assessments are independent of our commercial relationships. We only recommend
        products and services we believe may be genuinely useful to our readers. See our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for full details.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        All content on our sites — including text, graphics, logos, and data — is owned by or licensed
        to Watch This Capital Ltd and protected by UK and international copyright law.
      </p>
      <p>
        You may view, print, and share our content for personal, non-commercial purposes. You may not
        reproduce, republish, or redistribute our content commercially without prior written permission.
      </p>

      <h2>5. User conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use our sites in any way that is unlawful, harmful, or fraudulent</li>
        <li>Attempt to gain unauthorised access to any part of our sites or infrastructure</li>
        <li>Introduce malware, viruses, or other harmful code</li>
        <li>Use automated tools to scrape or harvest content without permission</li>
        <li>Use our sites to transmit unsolicited commercial communications</li>
      </ul>

      <h2>6. Third-party links</h2>
      <p>
        Our sites contain links to third-party websites. These links are provided for convenience.
        We are not responsible for the content, privacy practices, or accuracy of third-party sites.
        Linking to a site does not constitute endorsement.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        Our sites and content are provided &quot;as is&quot; without warranties of any kind, express or implied.
        To the fullest extent permitted by law, Watch This Capital disclaims all warranties, including
        implied warranties of merchantability and fitness for a particular purpose.
      </p>
      <p>
        We do not warrant that our sites will be uninterrupted, error-free, or free of viruses or
        other harmful components.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Watch This Capital shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of our sites or
        reliance on our content.
      </p>
      <p>
        Our total liability to you for any claim arising from or related to our sites shall not exceed
        £100.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes arising shall be
        subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The date at the top of this page indicates when
        they were last revised. Continued use of our sites after changes constitutes acceptance of
        the revised Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these Terms, contact us at:{" "}
        <a href="mailto:hello@watchthiscapital.com">hello@watchthiscapital.com</a>
      </p>
    </LegalPageLayout>
  );
}
