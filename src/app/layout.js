import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/Header/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
