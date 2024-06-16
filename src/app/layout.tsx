import type { Metadata } from "next";
import "./globals.css";

// Fonts
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] }); 


// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


export const metadata: Metadata = {
  title: "Board.io",
  description: "An opensource whiteboard app for funsies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
          {children}
      </body>
    </html>
    // <html lang="en">
    //   <body className={rubik.className}>
    //     <main className="flex">
    //       <div className="w-[15%] max-w-[400px] min-w-[200px]">
    //       <Sidebar />
    //       </div>
    //       <div className="w-[85%]">
    //       {children}
    //       </div>
    //     </main>
    //   </body>
    // </html>
  );
}
