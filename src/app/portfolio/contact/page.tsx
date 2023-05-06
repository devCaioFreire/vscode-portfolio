import shiki from "shiki";
import { CodePreview } from "@/components/CodePreview";

export const revalidate = 1800;
export const metadata = {
  title: "Contact",
};

export default async function Contact() {
  const gistURL =
    "https://gist.githubusercontent.com/devCaioFreire/1414cc1fd0e7e7dd621d48dd7078af33/raw/c6d7dcb97fcb5dc4e509c7db495503fdb76b0d7d/contact.ts";
  const aboutResponse = await fetch(gistURL);
  const contact = await aboutResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = highlighter.codeToHtml(contact, { lang: "typescript" });

  return <CodePreview code={code} />;
}
