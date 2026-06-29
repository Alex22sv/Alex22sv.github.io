import {
  BookOpen,
  FolderGit2,
  FlaskConical,
  Image,
  BookMarked,
} from "lucide-react";

export const collections = [
  {
    name: "Journal",
    slug: "journal",
    icon: BookOpen,
    description: "Articles, tutorials and reflections.",
  },
  {
    name: "Projects",
    slug: "projects",
    icon: FolderGit2,
    description: "Finished and ongoing projects.",
  },
  {
    name: "Lab",
    slug: "lab",
    icon: FlaskConical,
    description: "Experiments and prototypes.",
  },
  {
    name: "Gallery",
    slug: "gallery",
    icon: Image,
    description: "Photography and visual work.",
  },
  {
    name: "Reading",
    slug: "reading",
    icon: BookMarked,
    description: "Books, papers and notes."
  }
];