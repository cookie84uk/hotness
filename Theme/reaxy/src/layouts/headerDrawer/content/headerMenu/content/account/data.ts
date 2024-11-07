import {
  EditIcon,
  HelpIcon,
  LockIcon,
  LogoutIcon,
  PersonIcon,
  SettingsIcon,
} from "@config/assets/icons";

interface IData {
  id: number;
  title: string;
  icon: any;
  path: string;
}

export const data: IData[] = [
  { id: 1, title: "Profile", icon: PersonIcon, path: "/profile/project" },
  { id: 2, title: "Edit Profile", icon: EditIcon, path: "/profile/user-info" },
  { id: 3, title: "Settings", icon: SettingsIcon, path: "/setting" },
  { id: 2, title: "Lock screen", icon: LockIcon, path: "/" },
  { id: 2, title: "Help", icon: HelpIcon, path: "/help" },
  { id: 2, title: "Log out", icon: LogoutIcon, path: "/login" },
];
