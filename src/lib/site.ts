/* Shared content, so the home, service, about and media pages cannot drift apart. */

export const SITE_URL = "https://watchthiscapital.com";

export const TAGLINE =
  "AI agents that run your routine workflows, built and operated for you.";

export const SUMMARY =
  "Watch This Capital is a UK company building managed AI agents for routine business workflows. We scope the workflow, build and test the agent, and run it as a service, with a person approving every outgoing message and record change.";

export const STATUS = "In development";

export const STATUS_NOTE =
  "The service is in development. We are not yet onboarding customers.";

export const EMAIL_SERVICE = "partnerships@watchthiscapital.com";
export const EMAIL_GENERAL = "hello@watchthiscapital.com";

export interface Workflow {
  id: string;
  name: string;
  summary: string;
  /* Longer account for the service page. */
  input: string;
  agent: string;
  person: string;
}

export const workflows: Workflow[] = [
  {
    id: "intake",
    name: "Inbound triage",
    summary:
      "Sorting inbound email and documents, extracting the details and routing each item to the right person or system.",
    input: "A shared inbox, uploaded documents or a form queue.",
    agent:
      "Reads each item, works out what it is, pulls out the fields you care about and proposes where it should go.",
    person:
      "Confirms the routing and any reply before it is sent or filed.",
  },
  {
    id: "records",
    name: "Record keeping",
    summary:
      "Keeping records consistent across applications that are not integrated.",
    input: "Two or more systems that hold the same information and disagree.",
    agent:
      "Compares the records, flags the differences and prepares the correction, showing which system each value came from.",
    person: "Approves each change before any record is updated.",
  },
  {
    id: "answers",
    name: "Staff answers",
    summary:
      "Answering staff questions from the company's own policies and manuals.",
    input: "Your handbooks, procedures and internal guidance.",
    agent:
      "Answers in plain language and links to the passage it relied on. When the documents do not cover the question, it says so.",
    person:
      "Owns the documents. Gaps the agent finds go back to whoever maintains them.",
  },
  {
    id: "reports",
    name: "Regular reports",
    summary: "Assembling regular reports from several tools.",
    input: "The tools and exports someone currently copies figures out of.",
    agent:
      "Gathers the inputs on schedule, assembles the report in your format and marks anything that looks out of line with earlier periods.",
    person: "Reviews the draft and releases it.",
  },
];

export interface Control {
  id: string;
  name: string;
  summary: string;
  detail: string;
}

export const controls: Control[] = [
  {
    id: "source",
    name: "Sourced",
    summary: "Output links to its source material.",
    detail:
      "Every extracted field, answer and figure points back to the email, page or record it came from, so checking the agent takes seconds.",
  },
  {
    id: "approve",
    name: "Approved",
    summary: "A person approves any outgoing message or record change.",
    detail:
      "The agent prepares the work and stops. Nothing is sent and nothing is written to your systems until someone on your side says yes.",
  },
  {
    id: "score",
    name: "Scored",
    summary:
      "Each agent is scored against a test set built from the customer's own work.",
    detail:
      "Before an agent runs for real, it is measured on examples you already know the right answer to. You see the score before you rely on it.",
  },
];

export interface Step {
  name: string;
  summary: string;
  detail: string;
}

export const steps: Step[] = [
  {
    name: "Scope",
    summary: "Scope one workflow.",
    detail:
      "We pick a single process with you and write down what goes in, what should come out and what counts as correct.",
  },
  {
    name: "Build and test",
    summary: "Build and test the agent against real examples.",
    detail:
      "The agent is built around that process and scored on past cases from your own work until the results are good enough to trust.",
  },
  {
    name: "Run",
    summary: "Run it for a recurring fee.",
    detail:
      "We operate, monitor and maintain the agent. Your team approves its output and never has to manage the tooling.",
  },
  {
    name: "Review",
    summary: "Review its results with the customer.",
    detail:
      "We go through the scores and the corrections together at a regular interval, then adjust the agent or widen its scope.",
  },
];

export interface Venture {
  name: string;
  domain: string;
  url: string;
  description: string;
}

/* Only sites that are live. Each URL was checked on 2026-10-10. */
export const ventures: Venture[] = [
  {
    name: "SoleTraderGuide",
    domain: "soletraderguide.co.uk",
    url: "https://soletraderguide.co.uk",
    description:
      "Plain-English guidance on Making Tax Digital for UK sole traders, with software comparisons.",
  },
  {
    name: "AI Voice Review",
    domain: "aivoicereview.com",
    url: "https://aivoicereview.com",
    description: "Independent reviews and comparisons of AI voice generators.",
  },
  {
    name: "MySoftwareCompare",
    domain: "mysoftwarecompare.com",
    url: "https://mysoftwarecompare.com",
    description: "Reviews, pricing and comparisons of business software.",
  },
];
