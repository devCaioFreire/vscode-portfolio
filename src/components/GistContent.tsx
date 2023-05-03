import React, { useState, useEffect } from "react";
import shiki from "shiki";
import { CodePreview } from "./CodePreview";

interface GistProps {
  gistURL: string;
  fileExt?: string;
  section: "about" | "contact";
  data: any;
  language?: string;
}

export function GistContent({
  gistURL,
  fileExt,
  section,
  data,
  language,
}: GistProps): JSX.Element {
  const [code, setCode] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      const response = await fetch(gistURL);
      const data = await response.json();

      const highlighter = await shiki.getHighlighter({
        theme: "dracula",
      });

      let lang = language || "text";
      if (fileExt === ".json") {
        lang = "json";
      } else if (fileExt === ".ts") {
        lang = "typescript";
      }

      setCode(highlighter.codeToHtml(data[section], { lang }));
    };

    fetchCode();
  }, [gistURL, fileExt, section, language]);

  return <CodePreview code={code} />;
}
