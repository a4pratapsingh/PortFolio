import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import MouseFollower from "./components/MouseFollower";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});


export const metadata = {
  title: "portfolio - Ankit Singh",
  description: "This is Ankit singh Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <MouseFollower/>
        {children}
      </body>
    </html>
  );
}
