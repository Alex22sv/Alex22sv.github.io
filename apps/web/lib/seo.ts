import { siteConfig } from "@/config/site";

export function createPageMetadata(
  title: string,
  description: string
) {
  return {
    title: `${title} | ${siteConfig.name}`,

    description,
  };
}