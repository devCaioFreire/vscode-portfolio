"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Github, Linkedin, Instagram, User } from "lucide-react";
import { MenuButton } from "./MenuButton";

const socialLinks = [
  {
    name: "github",
    url: "https://github.com/",
    icon: <Github size={14} />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/",
    icon: <Linkedin size={14} />,
  },
  {
    name: "instagram",
    url: "https://github.com/",
    icon: <Instagram size={14} />,
  },
];

export const SocialLinksButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <MenuButton icon={User} cursor />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="right"
          className="
          bg-[#2a273f] 
          flex flex-col 
          rounded-lg 
          overflow-hidden
          z-10"
        >
          {socialLinks.map((socialItem) => {
            return (
              <DropdownMenu.Item key={socialItem.url} className=" outline-0">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-textGray flex items-center gap-2 px-4 py-3
                  hover:bg-vscodeBgSidebar hover:text-textWhite"
                >
                  {socialItem.icon}
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
