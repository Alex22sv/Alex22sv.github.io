import {
  User,
  BookOpen,
  FolderGit2,
  FlaskConical,
  Image,
  BookMarked,
} from "lucide-react";

export const collections = [
  {
    name: "Acerca de mí",
    slug: "about",
    icon: User,
    description: "Conoce más sobre mí y mi trabajo.",
  },
  {
    name: "Diario",
    slug: "journal",
    icon: BookOpen,
    description: "Artículos, tutoriales y reflexiones.",
  },
  {
    name: "Proyectos",
    slug: "projects",
    icon: FolderGit2,
    description: "Proyectos terminados y en curso.",
  },
/*   {
    name: "Lab",
    slug: "lab",
    icon: FlaskConical,
    description: "Experimentos y prototipos.",
  }, */
  {
    name: "Galería",
    slug: "gallery",
    icon: Image,
    description: "Fotografía y trabajo visual.",
  },
/*   {
    name: "Lectura",
    slug: "reading",
    icon: BookMarked,
    description: "Libros, artículos y notas."
  } */
];