export type PortfolioSiteStatus = "live" | "development" | "planned";

export interface PortfolioSite {
  name: string;
  domain: string;
  url: string;
  description: string;
  category: string;
  status: PortfolioSiteStatus;
  launchYear?: number;
}
