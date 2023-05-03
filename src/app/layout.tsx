import "../styles/globals.css";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Menu } from "@/components/Menu/";
import { Explorer } from "@/components/Explorer";
import { Footer } from "@/components/footer";
import { OpenFilesTabs } from "@/components/OpenFiles";
import { OpenFilesProvider } from "@/hooks/useOpenFile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Portfolio | Caio Freire",
    template: "%s | Caio Freire",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-app">
        <div className="h-screen p-20 flex items-center justify-center">
          <div
            className="
            bg-vscodeBg 
            w-full max-w-[1480px] 
            border
            border-[#72707D]
            rounded-md
            aspect-video
            shadow-custom
            overflow-hidden
            grid
            grid-rows-layout"
          >
            <OpenFilesProvider>
              <Header />

              <div className="grid grid-cols-editor max-h-full h-screen">
                <Menu />
                <Explorer />

                <div className="h-full relative flex flex-col">
                  <OpenFilesTabs />
                  <div className="h-full">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
