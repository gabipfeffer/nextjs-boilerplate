import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  return (
    <div className={"px-1 md:px-5 py-5 w-full md:min-w-[8rem]"}>{children}</div>
  );
}
