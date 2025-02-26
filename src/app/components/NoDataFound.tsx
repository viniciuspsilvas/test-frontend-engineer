"use client";

import { HTMLAttributes, JSX } from "react";

export interface NoDataFoundProps extends HTMLAttributes<HTMLLabelElement> {
  text?: string;
}

export const NoDataFound = ({
  text = "No data found"
}: NoDataFoundProps): JSX.Element => {
  return (
    <div className="w-full text-center p-4">
      <span className="">{text}</span>
    </div>
  );
};
