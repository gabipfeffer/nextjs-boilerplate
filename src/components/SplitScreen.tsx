import React from "react";

type SplitScreenProps = {
  children: React.ReactNode;
  leftWeight: number;
  rightWeight: number;
};

export default function SplitScreen({
  leftWeight = 0,
  rightWeight = 1,
  children,
}: SplitScreenProps) {
  const [left, right] = children;

  return (
    <div className={`fixed flex min-w-full`}>
      <div
        className={`min-h-full flex-${leftWeight} bg-[rgb(var(--background-start-rgb))]`}
      >
        {left}
      </div>
      <div
        className={`min-h-full min-w-full flex-${rightWeight} bg-[rgb(var(--background-main-content))] text-[rgb(var(--foreground-rgb))]`}
      >
        {right}
      </div>
    </div>
  );
}
