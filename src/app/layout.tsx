import "./globals.css";
import { Inter } from "next/font/google";
import Header from "src/components/Header";
import SplitScreen from "src/components/SplitScreen";
import Navigation from "src/components/Navigation";

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
  const navigation = [{ link: "/", text: "Home" }];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header logo={{ src: "/vercel.svg", alt: "vercel logo" }} />
        <SplitScreen leftWeight={0} rightWeight={1}>
          <div
            className={
              "min-h-full px-5 md:px-10 py-5 md:min-w-[8rem] bg-[rgb(var(--background-start-rgb))]"
            }
          >
            <Navigation navigation={navigation} stacked={true} />
          </div>
          <main
            className={
              "flex-1 min-h-full px-5 md:px-10 py-5 bg-[rgb(var(--background-main-content))] text-[rgb(var(--foreground-rgb))]"
            }
          >
            {children}
          </main>
        </SplitScreen>
      </body>
    </html>
  );
}
