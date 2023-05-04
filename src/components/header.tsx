export const Header = () => {
  return (
    <header className="flex items-center px-2 mobile:w-full">
      <div className="flex flex-row gap-2">
        <div
          className="bg-macOsClose w-3 h-3 rounded-full cursor-pointer 
        mobile:w-2 mobile:h-2 
        mobileLarge:w-3 mobileLarge:h-3"
        />
        <div
          className="bg-macOsMinimise w-3 h-3 rounded-full cursor-pointer 
        mobile:w-2 mobile:h-2
        mobileLarge:w-3 mobileLarge:h-3"
        />
        <div
          className="bg-macOsMaximise w-3 h-3 rounded-full cursor-pointer 
        mobile:w-2 mobile:h-2
        mobileLarge:w-3 mobileLarge:h-3"
        />
      </div>

      <div
        className="text-sm text-textGray m-auto 
      mobile:text-[0.625rem]
      mobileLarge:text-sm"
      >
        Caio Freire - Visual Studio Code
      </div>
    </header>
  );
};
