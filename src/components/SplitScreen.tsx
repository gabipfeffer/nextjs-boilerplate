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
    <div className={`flex w-full fixed top-20`}>
      <div
        className={`flex-${leftWeight} bg-[rgb(var(--background-start-rgb))] ${
          leftWeight && "w-full"
        }`}
      >
        {left}
      </div>
      <div
        className={`flex-${rightWeight} bg-[rgb(var(--background-main-content))] text-[rgb(var(--foreground-rgb))] ${
          rightWeight && "w-full"
        }`}
      >
        {right}
      </div>
    </div>
  );
}
