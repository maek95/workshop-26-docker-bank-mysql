import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Socials from "@/components/Socials";
import TopBar from "@/components/TopBar";

//const inter = Inter({ subsets: ["latin"] });

// design of app inspired by https://www.figma.com/community/file/1006124254408605916/mobile-banking

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`z-40 min-h-screen font-montserrat bg-[rgb(18,20,51)] text-white lg:text-[20px]`}>

    {/* <div className="hidden md:block">

      <TopBar stickyOrFixed={"sticky"}></TopBar>
    </div> */}
        
          {children}
       
       {/* <div className="mt-20 sticky ">
       <NavBar stickyOrFixed={"fixed"}></NavBar>
       </div> */}
      </body>
    </html>
  );
}
