import React, { JSX } from "react";

export default function Header({ children }: { children: JSX.Element }) {
  return <div className="bg-gray-100 p-8 dark:bg-gray-800">{children}</div>;
}
