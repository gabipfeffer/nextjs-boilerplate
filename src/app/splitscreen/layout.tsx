import "../globals.css";
import SplitScreen from "src/components/SplitScreen";
import Navigation from "src/components/Navigation";
import { navigation } from "src/constants/navigation";

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
      <div className={"px-1 md:px-5 py-5 w-full md:min-w-[8rem]"}>
        <Navigation navigation={navigation} stacked={true} />
      </div>
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
