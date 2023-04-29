import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Folder } from "./Folder";
import { SubMenu } from "./SubMenu";
import { File } from "./File";

export const Explorer = () => {
  return (
    <div className="bg-vscodeBgSidebar border-x-[1.5px] border-[#000]">
      <div className="flex justify-between px-2 mb-4 mt-1">
        <p className="text-[0.625rem] text-textGray">EXPLORER</p>
        <MoreHorizontal color="#B3B3B3" size={18} />
      </div>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">{/* <OpenFilesSubMenu /> */}</SubMenu>

        <SubMenu title="PORTFOLIO" defaultOpen>
          <Folder title="About Me">
            <File />
          </Folder>
        </SubMenu>
      </nav>
    </div>
  );
};
