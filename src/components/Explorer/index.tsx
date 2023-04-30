import {
  ChevronRight,
  CurlyBraces,
  FileJson,
  MoreHorizontal,
} from "lucide-react";
import { Folder } from "./Folder";
import { SubMenu } from "./SubMenu";
import { File } from "./File";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const Explorer = () => {
  return (
    <div className="bg-vscodeBgSidebar border-x-[1px] border-[#000]">
      <div className="flex justify-between px-2 mb-4 mt-1">
        <p className="text-[0.625rem] text-textGray">EXPLORER</p>
        <MoreHorizontal color="#B3B3B3" size={18} />
      </div>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">{/* <OpenFilesSubMenu /> */}</SubMenu>

        <SubMenu title="PORTFOLIO" defaultOpen>
          <Folder title="About Me">
            <File
              title="aboutMe.json"
              icon={CurlyBraces}
              color="#FFBD44"
              size={14}
            />
          </Folder>

          <Folder title="Projects">
            <File
              title="projects.tsx"
              icon={IoLogoReact}
              color="#0B76B4"
              size={14}
            />
          </Folder>

          <Folder title="Contact">
            <File
              title="contact.ts"
              icon={SiTypescript}
              color="#0B76B4"
              size={12}
            />
          </Folder>
        </SubMenu>
      </nav>
    </div>
  );
};
