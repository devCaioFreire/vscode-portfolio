"use client";

import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  return (
    <div
      id="shiki-code"
      style={jetBrainsMono.style}
      className="
      absolute 
      mt-10 
      inset-0 
      overflow-auto 
      leading-relaxed 
      scrollbar 
      scrollbar-thumb-[#393552] 
      scrollbar-track-transparent
      mobileLarge:ml-4
      mobile:ml-1"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
