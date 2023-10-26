import { CodePreview } from "@/components/CodePreview";
import shiki from "shiki";

export const revalidate = 1800;
export const metadata = {
  title: "Contact",
};

export default async function Contact() {
  const gistURL =
    "https://gist.githubusercontent.com/devCaioFreire/1414cc1fd0e7e7dd621d48dd7078af33/raw/a6469aac25d7cef11b215da5d21a0516993ab28c/contact.ts";
  const aboutResponse = await fetch(gistURL);
  const contact = await aboutResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = highlighter.codeToHtml(contact, { lang: "typescript" });

  return <CodePreview code={code} />;
}
