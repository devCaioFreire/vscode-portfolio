"use client";
import { ChevronDown, ChevronRight, Folder as FolderIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface FolderProps {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export const Folder = ({
  title,
  children,
  defaultOpen = false,
}: FolderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger
        className="flex items-center gap-2 px-[1.25rem] py-1 w-full 
      hover:bg-[#322E46] 
      focus:bg-[#2E2B38] 
      hover:text-[#fff]
      "
      >
        {isOpen ? (
          <ChevronDown size={14} color="#B3B3B3" />
        ) : (
          <ChevronRight size={14} color="#B3B3B3" />
        )}

        <span
          className="
        flex gap-2 
        text-[0.625rem]
        text-textGray"
        >
          <FolderIcon size={14} color="#B3B3B3" />
          {title}
        </span>
      </Collapsible.Trigger>

      <Collapsible.CollapsibleContent>
        {children}
      </Collapsible.CollapsibleContent>
    </Collapsible.Root>
  );
};
