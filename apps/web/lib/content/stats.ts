import { getCollection } from "./loader";

export interface SiteStats {
  projects: number;
  articles: number;
  technologies: number;
  experiments: number;
}

export function getSiteStats(): SiteStats {
  const projects = getCollection("projects");
  const journal = getCollection("journal");

  return {
    projects: projects.length,
    articles: journal.length,
    technologies: 12,
    experiments: projects.filter(
      project => project.status === "experimental"
    ).length,
  };
}