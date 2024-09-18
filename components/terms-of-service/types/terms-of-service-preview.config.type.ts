import type {
  TConfigKeyAndId,
  TComponentWithTextColor,
  THeadingTextComponentConfig,
} from "@/types";

export type TTermsOfServiceTemplateKey = "template_1" | "template_2" | "template_3";

// prettier-ignore
export type TTermsOfServiceConfig = 
  & TComponentWithTextColor
  & TConfigKeyAndId<TTermsOfServiceTemplateKey> 
  & {
    headingTextConfig: THeadingTextComponentConfig;
    text: string;
    showImage: boolean;
    imgName?: string;
  };
