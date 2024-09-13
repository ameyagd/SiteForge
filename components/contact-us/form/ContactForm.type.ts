import type { TConfigId, TRecursivePartial } from "@/types";

export type TFormType = {
  formType: "horizontal" | "vertical";
};

export type _TContactFormStyleConfig = {
  form: string;
  label: string;
  logoContainer: string;
  fieldContainer: string;
  fieldText: string;
  fieldInput: string;
  messageTextArea: string;
  submitButton: string;
};

// prettier-ignore
export type TContactFormStyleConfig = 
  & TConfigId
  & TRecursivePartial<_TContactFormStyleConfig>;

export type TStyleConfig = Omit<TContactFormStyleConfig, "id">;

export type TContactFormProps = {
  styleConfig?: {
    default?: TStyleConfig;
    active?: TStyleConfig;
  };
  showIcon: boolean;
  showLabel: boolean;
};
