import type { TConfigId, TRecursivePartial } from "@/types";
import type { TContactFormProps } from "../form/ContactForm.type";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
  /**
   * @description for VerticalTemplate
   */
  contentContainer: string;
};

type TContactUsStyle = {
  container: TContainerStyle;
  contactContainer: string;
  contactInput: string;
  contactBtn: string;
};

// prettier-ignore
export type TContactUsStyleConfig = 
  & TConfigId
  & TRecursivePartial<TContactUsStyle>
  & TContactFormProps["styleConfig"];
