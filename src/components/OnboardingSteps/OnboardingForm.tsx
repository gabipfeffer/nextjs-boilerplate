"use client";
import OnboardingFlow from "src/components/OnboardingFlow";
import StepOne from "src/components/OnboardingSteps/StepOne";
import StepTwo from "src/components/OnboardingSteps/StepTwo";
import StepThree from "src/components/OnboardingSteps/StepThree";
import { useState } from "react";

export default function OnboardingForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState({});

  const onNext = (stepData: any) => {
    const updatedData = { ...onboardingData, ...stepData };
    setOnboardingData(updatedData);
    setCurrentIndex(currentIndex + 1);
  };

  const onPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const onFinish = (data) => console.log("data", data);

  return (
    <OnboardingFlow
      onFinish={onFinish}
      currentIndex={currentIndex}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </OnboardingFlow>
  );
}
