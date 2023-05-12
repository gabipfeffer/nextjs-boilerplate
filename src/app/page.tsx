import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-between flex-wrap p-2 md:p-10">
      This is the Home Page
    </div>
  );
}
