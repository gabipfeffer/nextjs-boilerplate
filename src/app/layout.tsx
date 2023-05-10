import "./globals.css";
import { Inter } from "next/font/google";
import Header from "src/components/Header";
import { navigation } from "src/constants/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pfef's NextJS Boilerplate",
  description: "Root for other projects with implemented design patterns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          logo={{ src: "/vercel.svg", alt: "vercel logo" }}
          navigation={navigation}
        />
        <main className={"absolute top-20"}>{children}</main>
      </body>
    </html>
  );
}
