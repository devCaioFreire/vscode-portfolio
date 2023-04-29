"use client";

export const Header = () => {
  return (
    <header className="flex items-center px-2">
      <div className="flex flex-row gap-2">
        <div className="bg-macOsClose w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-macOsMinimise w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-macOsMaximise w-3 h-3 rounded-full cursor-pointer" />
      </div>

      <div className="text-sm text-textGray m-auto">
        Caio Freire - Visual Studio Code
      </div>
    </header>
  );
};
