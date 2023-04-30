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
      px-2 
      py-1 r
      w-full
      bg-vscodeBg"
      >
        {isOpen ? (
          <ChevronDown size={14} color="#B3B3B3" />
        ) : (
          <ChevronRight size={14} color="#B3B3B3" />
        )}
        <span className="text-[0.625rem] font-bold text-textGray flex item-center">
          {title}
        </span>
      </Collapsible.Trigger>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
