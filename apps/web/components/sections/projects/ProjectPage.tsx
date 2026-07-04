import { getAdjacentContent } from "@/lib/content/navigation";
import { getRelatedContent } from "@/lib/content/related";
import { ContentItem } from "@/lib/content/types";
import Link from "next/link";

import { ProjectLayout } from "@/components/sections/projects/ProjectLayout";
import { MDXRenderer } from "@/components/mdx/MDXRenderer";
import { PreviousNext } from "@/components/content/PreviousNext";
import { RelatedArticles } from "@/components/content/RelatedArticles";
import { TableOfContents } from "@/components/content/TableOfContents";

import { extractToc } from "@/lib/content/toc";

import { ProjectHero } from "./ProjectHero";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLinks } from "./ProjectLinks";
import { Gallery } from "../gallery/Gallery";

type Props = {
    project: ContentItem;
};

export function ProjectPage({
    project,
}: Props) {

    const toc = extractToc(project.body ?? "");
    const navigation = getAdjacentContent(project.collection, project.slug);
    const related = getRelatedContent(project.collection, project);

    return (

        <ProjectLayout
            title={project.title}
            description={project.description}
            date={project.date}
            updated={project.updated}
            author={project.author}
            readingTime={project.readingTime}
            tags={project.tags}
            cover={project.cover}
            toc={
                <TableOfContents
                    items={toc}
                />
            }
        >
            <Link
                href="/projects"
                className="mb-10 inline-flex text-sm text-primary hover:underline"
            >
                ← Volver a Proyectos
            </Link>

            <ProjectLinks
                repository={project.repository}
                website={project.website}
            />

            <ProjectInfo
                status={project.status}
                tech={project.tech}
            />

            <MDXRenderer
                source={project.body}
            />

            <Gallery
                images={project.gallery ?? []}
            />

            <PreviousNext
                previous={navigation.previous}
                next={navigation.next}
            />

            <RelatedArticles
                posts={related}
            />

        </ProjectLayout>

    );

}