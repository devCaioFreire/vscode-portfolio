import { CodePreview } from "@/components/CodePreview";
import shiki from "shiki";

export const revalidate = 1800;
export const metadata = {
  title: "Contact",
};

export default async function Contact() {
  const gistURL =
    "https://gist.githubusercontent.com/devCaioFreire/1414cc1fd0e7e7dd621d48dd7078af33/raw/c90be123210e02cecbbaa21653c3f6577378528b/contact.ts";
  const aboutResponse = await fetch(gistURL);
  const contact = await aboutResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = highlighter.codeToHtml(contact, { lang: "typescript" });

  return <CodePreview code={code} />;
}
