import {
  BookOpen,
  FolderGit2,
  FlaskConical,
  Images,
} from "lucide-react";

export const collections = [
  {
    id: "journal",
    title: "Journal",
    description:
      "Articles, tutorials and reflections.",

    icon: BookOpen,
  },

  {
    id: "projects",
    title: "Projects",
    description:
      "Personal and professional work.",

    icon: FolderGit2,
  },

  {
    id: "lab",
    title: "Lab",
    description:
      "Experiments and prototypes.",

    icon: FlaskConical,
  },

  {
    id: "gallery",
    title: "Gallery",
    description:
      "Photography and digital art.",

    icon: Images,
  },
] as const;