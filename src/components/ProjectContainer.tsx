import Image from "next/image";

interface ProjectProps {
  thumb: string;
  title: string;
  description: string;
  liveDemo?: boolean;
  link?: string;
  source?: string;
}

export const ProjectContainer = ({
  thumb,
  title,
  description,
  liveDemo = false,
  link,
  source
}: ProjectProps) => {
  return (
    <div className="pl-4 py-4">
      <div className="w-[20rem] bg-[#00000030] rounded-lg">
        <div className="border-b-2 border-textActive">
          <Image
            src={thumb}
            className="object-cover opacity-[0.7] rounded-t-lg h-[10rem]"
            width={320}
            height={0}
            alt=""
          />
        </div>
        <div className="p-4 flex flex-col gap-4 text-textGray">
          <h1 className="font-semibold text-lg text-textWhite">{title}</h1>
          <p>{description}</p>
          <div className="flex gap-4">
            {liveDemo && (
              <a
                target="_blank"
                className="
              p-2
              px-4
              border-[1px]
              border-textActive
              text-sm
              rounded-md
              hover:bg-[#322E46]
              hover:text-textWhite"
                href={link}
              >
                Live Demo
              </a>
            )}
            <a
              target="_blank"
              className="
              p-2
              px-4
              border-[1px]
              border-textActive
              text-sm
              rounded-md
              hover:bg-[#322E46]
              hover:text-textWhite"
              href={source}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
