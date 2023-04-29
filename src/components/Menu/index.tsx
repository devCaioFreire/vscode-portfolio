import { Files, Search, Cog } from "lucide-react";
import { IoGitBranchOutline } from "react-icons/io5";
import { VscExtensions, VscDebugAlt } from "react-icons/vsc";
import { MenuButton } from "./MenuButton";
import { SocialLinksButton } from "./SocialLinksButton";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <MenuButton icon={Files} isActive cursor />
        <MenuButton icon={Search} />
        <MenuButton icon={IoGitBranchOutline} />
        <MenuButton icon={VscExtensions} regular />
        <MenuButton icon={VscDebugAlt} regular />
      </div>

      <div className="flex flex-col items-center">
        <SocialLinksButton />
        <MenuButton icon={Cog} />
      </div>
    </div>
  );
};
