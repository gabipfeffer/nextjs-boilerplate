import "../globals.css";
import OnboardingFlow from "src/components/OnboardingFlow";

export const metadata = {
  title: "Onboarding Flow Layout",
  description: "Onboarding Flow Layout",
};

export default function OnboardingFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingFlow>
      <div className={"px-5 md:px-10 py-5 h-full w-full"}>{children}</div>
    </OnboardingFlow>
  );
}
