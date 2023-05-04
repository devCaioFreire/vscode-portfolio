import { CodePreview } from "@/components/CodePreview";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div>
      <h1 className="pl-4 pt-8 text-textActive">
        <span className="text-textPurple mr-1">#</span>
        Projects
        <p className="text-textGray text-xs">work in progress</p>
      </h1>
    </div>
  );
}
