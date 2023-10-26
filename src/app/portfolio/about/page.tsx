import { CodePreview } from "@/components/CodePreview";
import shiki from "shiki";

export const revalidate = 1800;
export const metadata = {
  title: "About me",
};

export default async function AboutMe() {
  const gistURL =
    "https://gist.githubusercontent.com/devCaioFreire/c11546a6a4af68c7d98747dfa62f3e1d/raw/fe296d0b7f1949adfac8095593870a835e4fabd1/aboutMe.json";
  const aboutResponse = await fetch(gistURL);
  const about = await aboutResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = highlighter.codeToHtml(about, { lang: "json" });

  return <CodePreview code={code} />;
}
