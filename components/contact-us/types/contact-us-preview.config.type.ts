import type {
  TConfigKeyAndId,
  TComponentWithTextColor,
  THeadingTextComponentConfig,
  TComponentWithAddressImgFontColor,
} from "@/types";
import type { TImageFontColor } from "@/types/ccpa.type";
import type { TContactFormProps } from "../form/ContactForm.type";

type TContactUsTemplateKey = "horizontal" | "vertical";

// prettier-ignore
export type TContactUsConfig = 
  & TComponentWithTextColor
  & TComponentWithAddressImgFontColor
  & TConfigKeyAndId<TContactUsTemplateKey>
  & Pick<TContactFormProps, "showLabel" | "showIcon">
  & {
    headingTextConfig: THeadingTextComponentConfig;
    contactBtnText: string;
    imgName: string;
    imageFontColor: TImageFontColor;
  };
