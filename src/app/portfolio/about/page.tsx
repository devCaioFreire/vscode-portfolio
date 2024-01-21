import { CodePreview } from "@/components/CodePreview";
import shiki from "shiki";

export const revalidate = 1800;
export const metadata = {
  title: "About me",
};

export default async function AboutMe() {
  const gistURL =
    "https://gist.githubusercontent.com/devCaioFreire/c11546a6a4af68c7d98747dfa62f3e1d/raw/1f9804b16379518475d18e51b5ceb308caa9206c/aboutMe.json";
  const aboutResponse = await fetch(gistURL);
  const about = await aboutResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = highlighter.codeToHtml(about, { lang: "json" });

  return <CodePreview code={code} />;
}
