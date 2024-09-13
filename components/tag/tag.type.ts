import type { PropsWithChildren } from "react";

export type TTagProps = {
  variant: "default" | "dot" | "long-dash" | "short-dash" | "short-underline";
  textColor?: "primary" | string;
} & PropsWithChildren;
