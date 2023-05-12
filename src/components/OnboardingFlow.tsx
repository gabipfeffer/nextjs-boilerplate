import React from "react";

type OnboardingFlowProps = {
  children: React.ReactNode;
  currentIndex: number;
  onNext: (data: any) => void;
  onPrevious: () => void;
};
export default function OnboardingFlow({
  children,
  onNext,
  onPrevious,
  currentIndex,
}: OnboardingFlowProps) {
  const currentChild = React.Children.toArray(children)[currentIndex];
  const goToNext = (stepData) => {
    onNext(stepData);
  };
  const goToPrevious = () => {
    onPrevious();
  };

  if (React.isValidElement(currentChild)) {
    // @ts-ignore
    return React.cloneElement(currentChild, {
      goToPrevious: currentIndex !== 0 ? goToPrevious : undefined,
      goToNext: currentIndex !== children.length - 1 ? goToNext : undefined,
    });
  }

  return currentChild;
}
