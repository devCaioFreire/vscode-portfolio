"use client";

export const Header = () => {
  return (
    <header className="flex items-center mb-4">
      <div className="flex flex-row gap-2 pl-1">
        <div className="bg-macOsClose w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-macOsMinimise w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-macOsMaximise w-3 h-3 rounded-full cursor-pointer" />
      </div>
      <div className="text-sm text-textGray m-auto pr-12">
        Caio Freire - Visual Studio Code
      </div>
    </header>
  );
};
