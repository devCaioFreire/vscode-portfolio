"use client";
import { ChevronDown, ChevronRight, Folder as FolderIcon } from "lucide-react";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface FolderProps {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export const SubMenu = ({
  title,
  children,
  defaultOpen = false,
}: FolderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger
        className="
      flex 
      items-center 
      gap-2
      py-1
      w-full
      bg-vscodeBg
      mobileLarge:px-2 
      mobile:px-0"
      >
        {isOpen ? (
          <ChevronDown size={14} color="#B3B3B3" />
        ) : (
          <ChevronRight size={14} color="#B3B3B3" />
        )}
        <span
          className="
        flex 
        item-center
        text-[0.625rem] 
        font-bold 
        text-textGray"
        >
          {title}
        </span>
      </Collapsible.Trigger>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
