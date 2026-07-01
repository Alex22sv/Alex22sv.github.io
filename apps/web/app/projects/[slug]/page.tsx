import { notFound } from "next/navigation";
import { getContent } from "@/lib/content/loader";
import { ProjectPage } from "@/components/projects/ProjectPage";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export default async function Page({ params }: Props) {
    const { slug } = await params;
    const project = getContent("projects", slug);
    if (!project) notFound();
    return (
        <ProjectPage
            project={project}
        />
    );
}