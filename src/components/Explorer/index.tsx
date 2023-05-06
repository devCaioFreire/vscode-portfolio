"use client";
import { CurlyBraces, MoreHorizontal } from "lucide-react";
import { Folder } from "./Folder";
import { SubMenu } from "./SubMenu";
import { File } from "./File";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { OpenFilesSubMenu } from "../OpenFiles/OpenFileSubMenu";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/portfolio/about": {
    icon: <CurlyBraces size={14} color="#FFBD44" />,
    title: "aboutMe.json",
  },
  "/portfolio/projects": {
    icon: <IoLogoReact size={14} color="#0B76B4" />,
    title: "projects.tsx",
  },
  "/portfolio/contact": {
    icon: <SiTypescript size={14} color="#0B76B4" />,
    title: "contact.ts",
  },
};

export const Explorer = () => {
  return (
    <div
      className="
    bg-vscodeBgSidebar
    mobileLarge:border-x-[1px] border-[#000]
    mobileLarge:block
    mobile:hidden
    "
    >
      <div
        className="
        flex
        justify-between
        px-2
        mb-4
        mt-1"
      >
        <p
          className="
        text-[0.625rem]
        text-textGray"
        >
          EXPLORER
        </p>
        <MoreHorizontal color="#B3B3B3" size={18} />
      </div>

      <nav
        className="
        mt-4
        mobileLarge:flex
        flex-col
        mobile:w-full"
      >
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu title="PORTFOLIO" defaultOpen>
          <Folder title="About Me" defaultOpen>
            <File href="/portfolio/about">
              <CurlyBraces size={14} color="#FFBD44" />
              aboutMe.json
            </File>
          </Folder>

          <Folder title="Projects">
            <File href={"/portfolio/projects"}>
              <IoLogoReact size={14} color="#0B76B4" />
              projects.tsx
            </File>
          </Folder>

          <Folder title="Contact">
            <File href={"/portfolio/contact"}>
              <SiTypescript size={12} color="#0B76B4" />
              contact.ts
            </File>
          </Folder>
        </SubMenu>
      </nav>
    </div>
  );
};
