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
    <SplitScreen leftWeight={1} rightWeight={0}>
      <div className={"px-1 md:px-5 py-5 md:min-w-[8rem]"}>
        <Navigation navigation={navigation} stacked={true} />
      </div>
      <div
        className={
          "px-1 md:px-5 py-5 h-screen min-w-full overflow-y-scroll scrollbar-hide"
        }
      >
        {children}
      </div>
    </SplitScreen>
  );
}
