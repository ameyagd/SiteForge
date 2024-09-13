import type { TComponentWithSectionHeading, TSectionItem } from "@/types";

// prettier-ignore
export type TGenericEmailCapture = 
  & TSectionItem<"email-capture">["data"]
  & TComponentWithSectionHeading;
