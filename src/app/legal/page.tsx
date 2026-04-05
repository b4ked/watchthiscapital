import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal information for Watch This Capital Ltd — company registration, registered address, and regulatory details.",
};

export default function LegalPage() {
  return (
    <LegalPageLayout title="Legal Information" lastUpdated="April 2025">
      <p>
        This page contains the registered company information for Watch This Capital Ltd, the
        entity that operates this website and the portfolio of sites listed on our{" "}
        <a href="/portfolio">Portfolio page</a>.
      </p>

      <h2>Company details</h2>
      <ul>
        <li>
          <strong>Company name:</strong> Watch This Capital Ltd
        </li>
        <li>
          <strong>Company type:</strong> Private limited company
        </li>
        <li>
          <strong>Registered in:</strong> England and Wales
        </li>
        <li>
          <strong>Companies House number:</strong>{" "}
          <em>
            [Pending — to be updated upon completion of incorporation at Companies House.
            Expected: 2025.]
          </em>
        </li>
        <li>
          <strong>Registered office address:</strong>{" "}
          <em>[To be updated upon incorporation.]</em>
        </li>
      </ul>

      <h2>Tax and regulatory details</h2>
      <ul>
        <li>
          <strong>VAT registration number:</strong>{" "}
          <em>[To be updated if/when VAT registered. VAT registration required once turnover exceeds
          the UK registration threshold.]</em>
        </li>
        <li>
          <strong>ICO registration:</strong>{" "}
          <em>[Pending — to be updated upon registration with the Information Commissioner&apos;s Office,
          as required under UK GDPR for organisations that process personal data.]</em>
        </li>
      </ul>

      <h2>Contact information</h2>
      <ul>
        <li>
          <strong>General enquiries:</strong>{" "}
          <a href="mailto:hello@watchthiscapital.com">hello@watchthiscapital.com</a>
        </li>
        <li>
          <strong>Privacy / data enquiries:</strong>{" "}
          <a href="mailto:privacy@watchthiscapital.com">privacy@watchthiscapital.com</a>
        </li>
        <li>
          <strong>Commercial partnerships:</strong>{" "}
          <a href="mailto:partnerships@watchthiscapital.com">partnerships@watchthiscapital.com</a>
        </li>
      </ul>

      <h2>Website disclaimer</h2>
      <p>
        The content published on Watch This Capital websites and portfolio sites is for informational
        and educational purposes only. It does not constitute financial, legal, tax, or professional
        advice. Readers should seek qualified professional advice before making financial or legal
        decisions.
      </p>
      <p>
        While we make reasonable efforts to ensure the accuracy and currency of the content we publish,
        we make no warranty — express or implied — as to its completeness, accuracy, or fitness for
        a particular purpose.
      </p>

      <h2>Governing law</h2>
      <p>
        Watch This Capital Ltd is subject to the laws of England and Wales. Our terms of service,
        privacy policy, and all other agreements with users are governed by English law and subject
        to the jurisdiction of the courts of England and Wales.
      </p>

      <h2>Portfolio sites operated by Watch This Capital</h2>
      <p>
        The following sites are operated by Watch This Capital Ltd:
      </p>
      <ul>
        <li>
          <a href="https://soletraderguide.co.uk" target="_blank" rel="noopener noreferrer">
            soletraderguide.co.uk
          </a>{" "}
          — Making Tax Digital guidance for UK sole traders
        </li>
      </ul>
      <p>
        This list will be updated as additional sites within the portfolio are launched.
        See our <a href="/portfolio">Portfolio page</a> for the latest information.
      </p>

      <h2>Complaints</h2>
      <p>
        If you have a concern about the accuracy of our content, our compliance with advertising
        standards, or our handling of your personal data, please contact us in the first instance at{" "}
        <a href="mailto:hello@watchthiscapital.com">hello@watchthiscapital.com</a>.
      </p>
      <p>
        If your concern relates to data protection, you may also contact the Information
        Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>.
        If your concern relates to advertising standards, you may contact the Advertising Standards
        Authority (ASA) at{" "}
        <a href="https://www.asa.org.uk" target="_blank" rel="noopener noreferrer">
          asa.org.uk
        </a>.
      </p>
    </LegalPageLayout>
  );
}
