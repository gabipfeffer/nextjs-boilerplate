import "./globals.css";
import { Inter } from "next/font/google";
import Header from "src/components/Header";
import { navigation } from "src/constants/navigation";
import SessionProvider from "src/components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "src/components/Login";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pfef's NextJS Boilerplate",
  description: "Root for other projects with implemented design patterns",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!session ? (
          <Login />
        ) : (
          <SessionProvider session={session}>
            <Header
              logo={{ src: "/vercel.svg", alt: "vercel logo" }}
              navigation={navigation}
            />
            <main>{children}</main>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
