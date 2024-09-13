import type {
  TConfigKeyAndId,
  TComponentWithTextColor,
  THeadingTextComponentConfig,
  TComponentWithAddressImgFontColor,
} from "@/types";

type TTextTemplateKey = "template_1" | "template_2" | "template_3";

// prettier-ignore
export type TPrivacyPolicyConfig =
  & TComponentWithTextColor
  & TConfigKeyAndId<TTextTemplateKey>
  & TComponentWithAddressImgFontColor
  & {
    headingTextConfig: THeadingTextComponentConfig;
    textTemplate: string;
    imgName?: string;
  };
