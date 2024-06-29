
import {  Montserrat } from "next/font/google";
import "./globals.css";
import Leftcontainer from "./container/Leftcontainer";
import Maincontainer from "./container/Maincontainer";
import Navbar from "./components/Navbar";
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["100", "300", "500", "700", "900"] 
});

export const metadata = {
  title: "Franciss-prog || Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} flex gap-10 p-16 pb-20 transition-all max-xl:p-10 max-xl:pb-0`} >
      <Leftcontainer/>
      <Maincontainer>
        <Navbar />
        {children}
      </Maincontainer>
    </body>
    </html>
  );
}
