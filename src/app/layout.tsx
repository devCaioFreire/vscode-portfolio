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
        <div
          className="
        bg-app 
        h-screen 
        flex 
        items-center 
        justify-center
        default:p-20
        mobile:p-8"
        >
          <div
            className="
            bg-vscodeBg 
            border
            border-[#72707D]
            rounded-md
            shadow-custom
            overflow-hidden
            grid
            default:aspect-video
            default:w-full 
            default:max-w-[1480px] 
            mobile:w-full
            default:grid-rows-default
            desktop:grid-rows-laptop
            tablet:grid-rows-tablet
            mobile:grid-rows-mobile"
          >
            <OpenFilesProvider>
              <Header />

              <div className="
              grid 
              max-h-full 
              h-screen
              default:grid-cols-default
              mobileLarge:grid-cols-mobileLarge
              mobile:grid-cols-mobile">
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
