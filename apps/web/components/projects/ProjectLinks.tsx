import { FolderGit2, Globe } from "lucide-react";

type Props = {
  repository?: string;
  website?: string;
};

export function ProjectLinks({
  repository,
  website,
}: Props) {
  if (!repository && !website) {
    return null;
  }

  return (
    <div className="mb-12 flex flex-wrap gap-4">

      {repository && (
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:border-primary"
        >
          <FolderGit2 size={18} />
          Repository
        </a>
      )}

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:border-primary"
        >
          <Globe size={18} />
          Website
        </a>
      )}

    </div>
  );
}