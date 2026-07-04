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
  const techs = projects.reduce((acc, project) => {
    if (project.tech) {
      project.tech.forEach((tech) => {
        if (!acc.includes(tech)) {
          acc.push(tech);
        }
      });
    }
    return acc;
  }, [] as string[]);

  return {
    projects: projects.length,
    articles: journal.length,    
    technologies: techs.length,
    experiments: projects.filter(
      project => project.status === "experimental"
    ).length,
  };
}