import { FileJson, Icon } from "lucide-react";
import React from "react";

interface FileProps {
  title: string;
  children?: React.ReactNode;
  icon: Icon;
  color?: string;
  size?: number;
}

export const File = ({ title, children, icon, size, color}: FileProps) => {
  return (
    <div
      className="
    pl-12
    p-1
    justify-center
    items-center
    self-center
    hover:bg-[#322E46] 
    hover:text-textGray
    focus: text-textActive
    cursor-pointer
    "
    >
      <p
        className=" 
      flex gap-2 
      text-xs
      text-textGray
      "
      >
        {icon && React.createElement(icon, { size: size, color: color })}
        {title}
      </p>
    </div>
  );
};
