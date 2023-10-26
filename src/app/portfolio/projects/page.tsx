import { ProjectContainer } from "@/components/ProjectContainer";

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
          thumb="https://i.pinimg.com/736x/76/82/13/768213e844b14ad4934851731fc4fe2c.jpg"
          title="Rock | Paper | Scissors"
          description="Game: rock, paper, scissors"
          liveDemo
          link={"https://rock-paper-scissor-devfreire.vercel.app/"}
          source="https://github.com/devCaioFreire/rock-paper-scissor"
        />
        <ProjectContainer
          thumb="https://opportunitydesk.org/wp-content/uploads/2023/08/Mastering-Personal-Finances-scaled.jpg"
          title="Personal Finance Software"
          description="My app to control my finances"
          liveDemo
          link={"https://finance-management-nine.vercel.app/"}
          source="https://github.com/devCaioFreire/finance-manager"
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/564x/15/5a/ee/155aee17772e517d46e9f6d50fa0b1ed.jpg"
          title="Newsletter"
          description="I developed a newsletter, a scalable way to inform, sell, and acquire customers or users for your business or application"
          liveDemo
          link={"https://newsletter-devfreire.vercel.app"}
          source={"https://github.com/devCaioFreire/newsletter"}
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/564x/92/18/4a/92184a471672bcd65d46557674d14206.jpg"
          title="POS | PDV"
          description="Business Project"
          source={"https://github.com/devCaioFreire/sat"}
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/564x/92/18/4a/92184a471672bcd65d46557674d14206.jpg"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <ProjectContainer
          thumb="https://i.pinimg.com/564x/92/18/4a/92184a471672bcd65d46557674d14206.jpg"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </div>
    </div>
  );
}
