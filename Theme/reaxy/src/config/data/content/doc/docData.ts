import { icons } from "@config/assets";
import { IDocDataProps } from "@doc/models";

export const docData = (): IDocDataProps[] => {
  return [
    {
      id: "intro",
      title: "title",
      path: "/doc/intro",
      icon: icons.DashboardIcon,
    },
    {
      id: "installation",
      title: "title",
      path: "/doc/installation",
      icon: icons.DashboardIcon,
    },

    {
      id: "structure",
      title: "title",
      path: "/doc/project_structure",
      icon: icons.DashboardIcon,
    },
    {
      id: "skins",
      title: "title",
      path: "/doc/skins",
      icon: icons.DashboardIcon,
    },
    {
      id: "new_page",
      title: "title",
      path: "/doc/new_page",
      icon: icons.DashboardIcon,
    },
    {
      id: "support",
      title: "title",
      path: "/doc/support",
      icon: icons.DashboardIcon,
    },

    {
      id: "conclusion",
      title: "title",
      path: "/doc/conclusion",
      icon: icons.DashboardIcon,
    },
  ];
};


export const getSectionIds = () => {
  const data = docData();
  const sectionIds = data.map((item) => item.id);
  return sectionIds;
};
