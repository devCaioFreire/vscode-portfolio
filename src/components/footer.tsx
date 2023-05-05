import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <div
      className="
      text-sm 
      text-textGray 
      flex
      mr-2
      items-center 
      justify-end 
      bg-vscodeBgSidebar"
    >
      <a
        href="https://github.com/devCaioFreire"
        target={"_blank"}
        rel="noreferrer"
        className="flex gap-1 items-center text-xs hover:text-[#E0DEF2]"
      >
        <Github size={14} color="#B3B3B3" />
        Github
      </a>
    </div>
  );
};
