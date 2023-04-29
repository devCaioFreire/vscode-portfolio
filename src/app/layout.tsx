import { Menu } from "@/components/Menu/";
import "../styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Explorer } from "@/components/Explorer";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Portfolio | Caio Freire",
    template: "%s | Caio Freire",
  },
  robots: {
    index: true,
    follow: true,
  },
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
            <Header />

            <div className="grid grid-cols-editor max-h-full h-screen">
              <Menu />
              <Explorer />
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
