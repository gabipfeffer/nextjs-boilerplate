import "../globals.css";
import SplitScreen from "src/components/SplitScreen";
import Sidebar from "src/components/Sidebar";

export const metadata = {
  title: "SplitScreen Layout",
  description: "SplitScreen Layout",
};

export default function SplitScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SplitScreen leftWeight={0} rightWeight={1}>
      <Sidebar>Sidebar</Sidebar>
      <div
        className={
          "px-1 md:px-5 py-5 h-screen overflow-y-scroll scrollbar-hide"
        }
      >
        {children}
      </div>
    </SplitScreen>
  );
}
