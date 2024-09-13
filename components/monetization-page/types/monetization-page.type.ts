import type {
  TComponentWithTextColor,
  TDevice,
  TFooterSectionConfig,
  THeaderSectionConfig,
  TShowBgConfig,
} from "@/types";
import type { TStaticContent } from "../static-content/static-content.type";
import type { TArticleContent } from "../article-content/article-content.type";
import type { TGoogleAdItem } from "../google-ads/google-ads.type";
import type { TWebResultItem } from "../web-results/web-results.type";

export type TMonetizationSectionType =
  | "header"
  | "article-content"
  | "google-ads"
  | "static-content"
  | "web-results"
  | "footer";

export type TMonetizationSectionWithDynamicData = Extract<
  TMonetizationSectionType,
  "article-content" | "google-ads" | "static-content" | "web-results"
>;

export type TMonetizationSectionConfig<T extends TMonetizationSectionType = any> =
  T extends "header"
    ? THeaderSectionConfig["data"]
    : T extends "article-content"
    ? {
        type: "read-more" | "expanded";
        imageSizes: string;
      }
    : T extends "static-content"
    ? {
        showTitle: boolean;
        wordCount: number;
      }
    : T extends "google-ads"
    ? {
        title: string;
        adCount: number;
        styleId: string;
        publisherId: string;
        targetTemplateId: string;
      }
    : T extends "web-results"
    ? {
        title: string;
        adCount: number;
        version?: number;
      }
    : T extends "footer"
    ? TFooterSectionConfig["data"]
    : never;

export type TMonetizationSectionData<T extends TMonetizationSectionType = any> =
  T extends "article-content"
    ? TArticleContent
    : T extends "static-content"
    ? TStaticContent
    : T extends "google-ads"
    ? TGoogleAdItem[]
    : T extends "web-results"
    ? TWebResultItem[]
    : never;

export type TMonetizationPageData = Record<
  TMonetizationSectionWithDynamicData,
  Record<number, TMonetizationSectionData>
>;

// prettier-ignore
export type TMonetizationSectionGeneric<T extends TMonetizationSectionType = any> = {
  id: string;
  type: T;
  config: TMonetizationSectionConfig<T>;
};

export type TMonetizationSection =
  | TMonetizationSectionGeneric<"header">
  | TMonetizationSectionGeneric<"article-content">
  | TMonetizationSectionGeneric<"google-ads">
  | TMonetizationSectionGeneric<"static-content">
  | TMonetizationSectionGeneric<"web-results">
  | TMonetizationSectionGeneric<"footer">;

export type TMonetizationTemplateConfig = TComponentWithTextColor &
  Required<
    Pick<
      TDevice<TShowBgConfig & { sections: TMonetizationSection[] }>,
      "desktop" | "phone"
    >
  > & {
    monetizationTemplateKey: string;
  };
