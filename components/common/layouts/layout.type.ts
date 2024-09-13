import type { ReactNode } from "react";

export type TLayoutTemplateKey = "template_1";

export type TLayoutConfig = {
  breadcrumb?: ReactNode;
  leftSectionContent: ReactNode;
  rightSectionContent?: ReactNode;
  topSectionContent?: ReactNode; // future template
  bottomSectionContent?: ReactNode; // future template
};
