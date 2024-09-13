import type {
  TCardUnit,
  TComponentWithImageSizes,
  TComponentWithTextColor,
  TConfigKeyAndId,
  TContentDisplayOptions,
} from "@/types";

type THeroTemplateKey = "template_1";

// prettier-ignore
export type THeroConfig = 
  & TComponentWithTextColor
  & TComponentWithImageSizes
  & TConfigKeyAndId<THeroTemplateKey>
  & Omit<TContentDisplayOptions, "showImage">
  & {
    shadow?: TCardUnit;
    roundness?: TCardUnit;
  };
