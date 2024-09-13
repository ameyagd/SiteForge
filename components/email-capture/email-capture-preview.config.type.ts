import type {
  TComponentWithTextColor,
  TConfigKeyAndId,
  THeadingTextComponentConfig,
} from "@/types";

type TEmailCaptureTemplateKey = "template_1";

export type TEmailCaptureConfig = TComponentWithTextColor &
  TConfigKeyAndId<TEmailCaptureTemplateKey> & {
    headingTextConfig?: THeadingTextComponentConfig;
    emailIdPlaceholder: string;
    subscribeBtnText: string;
  };
