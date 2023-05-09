import "./globals.css";
import { Inter } from "next/font/google";
import Header from "src/components/Header";

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
  const navigation = [
    { link: "/", text: "Home" },
    { link: "/splitscreen", text: "Split Screen" },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          logo={{ src: "/vercel.svg", alt: "vercel logo" }}
          navigation={navigation}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
