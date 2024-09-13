import type {
  TAboutUsConfig,
  TAboutUsStyleConfig,
} from "@/components/about-us/types";
import type {
  TBreadcrumbVariant,
  TListingPageConfig,
  TPaginationVariant,
  TStaticPageHeaderVariant,
} from "@/components/common";
import type {
  TContactUsConfig,
  TContactUsStyleConfig,
} from "@/components/contact-us/types";
import type {
  TEmailCaptureConfig,
  TEmailCaptureStyleConfig,
} from "@/components/email-capture";
import type {
  TFooterConfig,
  TFooterStyleConfig,
} from "@/components/footer/types";
import type {
  THeaderConfig,
  THeaderStyleConfig,
} from "@/components/header/types";
import type {
  TPrivacyPolicyConfig,
  TPrivacyPolicyStyleConfig,
} from "@/components/privacy-policy/types";
import type { TSectionConfig } from "@/components/section/types";
import type { TTagProps } from "@/components/tag";
import type { THeroConfig, THeroStyleConfig } from "@/components/hero";
import type { TMonetizationTemplateConfig } from "@/components/monetization-page";
import type { TGridData, TGridStoreConfig } from "@/components/new-grid";
import type { TArticlePageConfig } from "@/components/article-page/types";
import type {
  TLayoutState,
  TThemeColorConfig,
  TThemeColors,
} from "./app-theme.types";
import type { TAgencyKeys, TAllMccKeys } from "./ccpa.type";
import type {
  TCardUnit,
  TConfigId,
  THeadingTextGlobalConfig,
  TPostData,
  TShowBgConfig,
} from "./common.type";

export type TPageKey =
  | "home_page"
  | "article_listing_page"
  | "article_page"
  | "category_listing_page"
  | "tag_listing_page"
  | "search_page"
  | "about_us"
  | "privacy_policy"
  | "contact_us"
  | "monetization_page";

export type TGlobalConfig = {
  cardShadow: TCardUnit;
  cardRoundness: TCardUnit;
  colors: TThemeColorConfig;
  themeColors: TThemeColors;
  layout: TLayoutState;
  heading: THeadingTextGlobalConfig;
  paginationVariant: TPaginationVariant;
  tagVariant: TTagProps["variant"];
  breadcrumbVariant: TBreadcrumbVariant;
  staticPageVariant: TStaticPageHeaderVariant["variant"];
};

export type TSectionType =
  | "header"
  | "grid"
  | "hero"
  | "section"
  | "email-capture"
  | "about-us"
  | "contact-us"
  | "privacy-policy"
  | "article-listing"
  | "article-page"
  | "category-listing"
  | "tag-listing"
  | "search-page"
  | "monetization-page"
  | "footer";

type TSectionKeyWithBg = Extract<
  TSectionType,
  | "grid"
  | "hero"
  | "section"
  | "email-capture"
  | "about-us"
  | "contact-us"
  | "privacy-policy"
  | "article-listing"
  | "article-page"
  | "category-listing"
  | "tag-listing"
  | "search-page"
  | "monetization-page"
>;

export type TMonetizationPageConfig = {
  activeIndex: number;
  templateList: TMonetizationTemplateConfig[];
};

export type TSectionItem<T extends TSectionKeyWithBg = any> = T extends "hero"
  ? {
      id: string;
      type: "hero";
      data: { config: THeroConfig; styleConfig?: THeroStyleConfig };
    } & TShowBgConfig
  : T extends "email-capture"
  ? {
      id: string;
      type: "email-capture";
      data: {
        config: TEmailCaptureConfig;
        styleConfig?: TEmailCaptureStyleConfig;
      };
    } & TShowBgConfig
  : T extends "section"
  ? {
      id: string;
      type: "section";
      data: { config: TSectionConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "grid"
  ? {
      id: string;
      type: "grid";
      data: {
        config: TGridStoreConfig;
        styleConfig?: TGridData["styleConfig"] & TConfigId;
      };
    } & TShowBgConfig
  : T extends "about-us"
  ? {
      id: string;
      type: "about-us";
      data: { config: TAboutUsConfig; styleConfig?: TAboutUsStyleConfig };
    } & TShowBgConfig
  : T extends "contact-us"
  ? {
      id: string;
      type: "contact-us";
      data: { config: TContactUsConfig; styleConfig?: TContactUsStyleConfig };
    } & TShowBgConfig
  : T extends "privacy-policy"
  ? {
      id: string;
      type: "privacy-policy";
      data: {
        config: TPrivacyPolicyConfig;
        styleConfig?: TPrivacyPolicyStyleConfig;
      };
    } & TShowBgConfig
  : T extends "article-page"
  ? {
      id: string;
      type: "article-page";
      data: { config: TArticlePageConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "article-listing"
  ? {
      id: string;
      type: "article-listing";
      data: { config: TListingPageConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "category-listing"
  ? {
      id: string;
      type: "category-listing";
      data: { config: TListingPageConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "tag-listing"
  ? {
      id: string;
      type: "tag-listing";
      data: { config: TListingPageConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "search-page"
  ? {
      id: string;
      type: "search-page";
      data: { config: TListingPageConfig; styleConfig?: any };
    } & TShowBgConfig
  : T extends "monetization-page"
  ? {
      id: string;
      type: "monetization-page";
      data: { config: TMonetizationPageConfig; styleConfig?: any };
    } & TShowBgConfig
  : never;

export type THeaderSectionConfig = {
  id: string;
  type: "header";
  data: {
    config: THeaderConfig;
    styleConfig?: THeaderStyleConfig;
  };
};

export type TFooterSectionConfig = {
  id: string;
  type: "footer";
  data: {
    config: TFooterConfig;
    styleConfig?: TFooterStyleConfig;
  };
};

/**
 * @description for Agency and MCC mapping of Integration tab
 */
type TCcpaConfig = {
  agency: TAgencyKeys;
  mcc: TAllMccKeys;
};

type TDomainConfig = {
  siteName: string;
};

type TIntergationConfig = {
  ccpa: TCcpaConfig;
  domain: TDomainConfig;
};

export type TAppConfig = {
  headerConfig: THeaderSectionConfig;
  footerConfig: TFooterSectionConfig;
  sections: Record<TPageKey, TSectionItem[]>;
  globalConfig: TGlobalConfig;
  integrationConfig: TIntergationConfig;
};

export type TArticleData = {
  posts: Record<string, TPostData>;
  categorySlugs: Record<string, string>;
  categories: Record<string, number[]>;
  slugPostIdMap: Record<string, string>;
  tagsMapping: Record<string, number[]>;
};
