import type { Icon } from "lucide-react";

interface MenuButtonProps {
  icon: Icon;
  isActive?: boolean;
  regular?: boolean;
  cursor?: boolean;
}

export const MenuButton = ({
  icon: Icon,
  isActive = false,
  regular = false,
  cursor = false,
}: MenuButtonProps) => {
  return (
    <div
      data-active={isActive}
      className="h-14 flex 
      justify-center items-center border-l-2 
      border-[#00000000] data-[active=true]:border-[#60FDC5]"
    >
      <Icon
        strokeWidth={regular ? 0.1 : 1.5}
        size={28}
        color={isActive ? "#60FDC5" : "#4C463C"}
        className={cursor ? "cursor-pointer" : "cursor-default"}
      />
    </div>
  );
};
