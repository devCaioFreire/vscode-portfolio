"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useOpenFiles } from "@/hooks/useOpenFile";

interface FileProps extends LinkProps {
  children: ReactNode[];
}

export function File(props: FileProps) {
  const { markFileAsOpen } = useOpenFiles();
  const pathName = usePathname();
  const isCurrentActive = pathName === props.href;

  return (
    <Link
      data-active={isCurrentActive}
      onClick={() => markFileAsOpen(props.href.toString())}
      className="flex text-xs items-center gap-2 py-1 px-4 pl-10
      text-textGray
      hover:bg-[#322E46]
      hover:text-[#E0DEF2]
      data-[active=true]:bg-[#2a273f]
      data-[active=true]:text-textPurple"
      {...props}
    />
  );
}
