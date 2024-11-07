import { IAccordionItem } from "@doc/models/IStructureProps";

export const dataStructure: IAccordionItem[] = [
  {
    icon: "📁",
    title: "node_modules/",
    content: "Folder containing all external dependencies used by the project.",
  },
  {
    icon: "🌌",
    title: "public/",
    content: "Folder containing static files accessible in the browser.",
  },
  {
    icon: "🛠️",
    title: "src/",
    content: "Folder containing the source code of the project, including:",
    items: [
      {
        icon: "🚀",
        title: "app/",
        content: "Entry file - The Launchpad for our journey.",
      },
      { icon: "📚", title: "doc/", content: "Documentation." },
      {
        icon: "🎨",
        title: "layouts/",
        content: "Contains general layout components for the application.",
      },
      { icon: "📄", title: "pages/", content: "Contains page components." },
      {
        icon: "🌐",
        title: "router/",
        content: "Handles application routing.",
      },
      {
        icon: "🚀",
        title: "main.tsx",
        content: "The parent component for the application layout.",
      },
      {
        icon: "🎩",
        title: "vite-env.d.ts",
        content: "Custom typings for third-party modules.",
      },
      {
        icon: "⚙️",
        title: "config/",
        content: "Contains configuration files",
        items: [
          {
            icon: "📂",
            title: "assets/",
            content: "All forms of the application are located here.",
          },
          {
            icon: "⚙️",
            title: "components/",
            content: "Custom components of the application.",
          },
          {
            icon: "🏔️",
            title: "constant/",
            content: "Immutable values of the app.",
          },
          {
            icon: "🌐",
            title: "data/",
            content: "File where global data is stored.",
          },
          {
            icon: "🔗",
            title: "hooks/",
            content: "Custom hooks folder.",
          },
          {
            icon: "📚",
            title: "libs/",
            content: "Knowledge translations.",
          },
          {
            icon: "🤖",
            title: "models/",
            content: "File where global models are stored.",
          },
          {
            icon: "🎨",
            title: "mui/",
            content: "Mui designs, styles, icons, palettes, etc.",
          },
          {
            icon: "🌐",
            title: "redux/",
            content: "Global state management of the application.",
          },
          {
            icon: "🎭",
            title: "theme/",
            content:
              "Global template components, directives, pipes, styles, and utilities.",
          },
        ],
      },
    ],
  },
  {
    icon: "🚦",
    title: ".eslintrc.cjs",
    content: "File specifying ESLint configuration settings for the project.",
  },
  {
    icon: "🙈",
    title: ".gitignore",
    content: "File specifying Git configuration settings for the project.",
  },
  {
    icon: "📜",
    title: "declaration.d.ts",
    content: "File specifying TypeScript declaration settings for the project.",
  },
  {
    icon: "🌐",
    title: "index.html",
    content: "HTML file for the application.",
  },
  {
    icon: "🔒",
    title: "package.json",
    content: "Contains all dependencies used for production and development.",
  },
  {
    icon: "📖",
    title: "README.md",
    content: "Readme file.",
  },
  {
    icon: "🎛️",
    title: "tsconfig.json",
    content: "TypeScript configuration file for the app.",
  },
  {
    icon: "🎛️",
    title: "tsconfig.node.json",
    content: "TypeScript configuration file.",
  },
  {
    icon: "🚀",
    title: "vite.config.ts",
    content: "Configuration file for Vite.",
  },
  {
    icon: "🔐",
    title: "yarn.lock",
    content: "Lockfile for package versions.",
  },
];
