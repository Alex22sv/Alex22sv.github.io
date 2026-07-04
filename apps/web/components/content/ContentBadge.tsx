import { BookOpen, FolderGit2, NotebookPen } from "lucide-react";

interface Props {
  collection: string;
}

export function ContentBadge({ collection }: Props) {
  switch (collection) {
    case "journal":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
          <NotebookPen size={14} />
          Journal
        </span>
      );

    case "projects":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500">
          <FolderGit2 size={14} />
          Project
        </span>
      );

    case "library":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
          <BookOpen size={14} />
          Library
        </span>
      );

    default:
      return null;
  }
}