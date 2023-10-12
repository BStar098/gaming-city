import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { exo2 } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: "Gaming City",
    template: "%s | Gaming City",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={exo2.variable}>
      <body className=" bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex gap-1 border-t py-2 justify-center">
          Game data and images courtesy of
          <a
            className="cursor-pointer font-bold text-orange-800 hover:underline"
            href="https://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
