import type {
  TConfigKeyAndId,
  TComponentWithTextColor,
  THeadingTextComponentConfig,
} from "@/types";

export type TAboutUsTemplateKey = "template_1" | "template_2" | "template_3";

// prettier-ignore
export type TAboutUsConfig = 
  & TComponentWithTextColor
  & TConfigKeyAndId<TAboutUsTemplateKey> 
  & {
    headingTextConfig: THeadingTextComponentConfig;
    text: string;
    showImage: boolean;
    imgName?: string;
  };
