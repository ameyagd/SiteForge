import type {
  TBreadcrumbProps,
  TStaticPageHeaderVariant,
} from "@/components/common";
import type {
  TComponentWithAddress,
  TComponentWithSectionHeading,
  TComponentWithTextColor,
  TSectionItem,
} from "@/types";

// prettier-ignore
export type TContactUsTemplate = 
  & TSectionItem<"contact-us">["data"]
  & TBreadcrumbProps
  & TComponentWithTextColor
  & TComponentWithAddress
  & TComponentWithSectionHeading
  & TStaticPageHeaderVariant;
