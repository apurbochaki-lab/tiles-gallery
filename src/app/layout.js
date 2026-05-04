import dns from "node:dns/promises"; 
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const outfitFont = Outfit({
  subsets: ["latin"]
})

export const metadata = {
  title: "Tile Vista | Best tiles in Bangladesh",
  description: "We have best collection of ceramic tiles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <header>
          <Navbar></Navbar>
        </header>

        <main className="flex-grow bg-blue-50/70">
          {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>


        <ToastContainer />
      </body>
    </html>
  );
}
