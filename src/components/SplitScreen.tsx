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
    <div className={`flex absolute top-20 min-w-full min-h-full`}>
      <div className={`min-h-full flex-${leftWeight}`}>{left}</div>
      <div className={`min-h-full flex-${rightWeight}`}>{right}</div>
    </div>
  );
}
