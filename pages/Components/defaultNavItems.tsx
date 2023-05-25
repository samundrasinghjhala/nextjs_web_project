import React from "react";
import {
  BellIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    href: "http://localhost:3005/home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Notification",
    href: "http://localhost:3005/contact",
    icon: <BellIcon className="w-6 h-6" />,
  },
  {
    label: "Users",
    href: "http://localhost:3005/blog",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "http://localhost:3005/about",
    icon: <FolderIcon className="w-6 h-6" />,
  },

  {
    label: "Logout",
    href: "",
    icon: <LockClosedIcon className="w-6 h-6" />,
  },
];
