import { CodePreview } from "@/components/CodePreview";
import { ProjectContainer } from "@/components/ProjectContainer";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div
      className="   
    grid  
    grid-cols-projects
    absolute 
    mt-10
    inset-0 
    overflow-auto 
    scrollbar 
    scrollbar-thumb-[#393552] 
    scrollbar-track-transparent"
    >
      <h1 className="p-4 text-textActive">
        <span className="text-textPurple mr-1">#</span>
        Projects
      </h1>
      <div className="mt-16 grid grid-cols-projects ml-[-25rem]">
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/4a/70/5e/4a705e028bb9f5d50995e68c791fb10a.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          liveDemo
          link={"#"}
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/fc/21/16/fc2116fb21de12a62d4b36c31bbb1e6f.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          liveDemo
          link={"#"}
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/a0/d5/81/a0d581666d26dd9c66bf8ed395cba948.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          liveDemo
          link={"#"}
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/c0/a5/21/c0a521e7bee348dd0f60646a49034559.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/3e/fc/f1/3efcf1e9a5f2c3354714699b321221b4.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/originals/4e/b5/54/4eb5547214d1c93ca01a195cd5dbdefb.gif"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </div>
    </div>
  );
}
