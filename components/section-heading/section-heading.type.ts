import type {
  TGlobalConfig,
  THeadingTextComponentConfig,
  THeadingTextGlobalConfig,
} from "@/types";

export type TSectionHeading = {
  text: THeadingTextComponentConfig;
  layout: TGlobalConfig["heading"];
} & Pick<THeadingTextGlobalConfig, "headingVariant">;
