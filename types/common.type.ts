import type { TBreadcrumbProps } from "@/components/common";
import type { TTagProps } from "@/components/tag";
import type { ReactNode } from "react";
import type { TArticleData, TSectionType } from "./app-config.type";
import type { THeadingLayout } from "./app-theme.types";
import type { TImageFontColor } from "./ccpa.type";

export type TNavItem = {
  id: string;
  title: string;
  url: string;
  sublinks?: TNavItem[];
};

export type TRecursivePartial<T> = {
  [P in keyof T]?: TRecursivePartial<T[P]>;
};

export type TCustomStyles = {
  $customstyles?: string;
};

export type TLogoStyles = {
  $logoContainerStyles: string;
  $logoStyles: string;
};

export type TCardUnit = "none" | "xs" | "sm" | "md" | "lg";

/**
 * @description { key }
 * to set the type of config.
 */
export type TConfigKeyAndId<T = string> = { configKey: T } & TConfigId;

/**
 * @description to uniquely identify the config kind of primary key
 */
export type TConfigId = { id: string };
export class CategoryItem {
  id: string;
  title: string;
  url: string;

  constructor(id: string, title: string, url: string) {
    this.id = id;
    this.title = title;
    this.url = url;
  }
}

export class LinkGroupItem {
  id: string;
  title: string;
  noOfColumn: number;
  items: CategoryItem[];

  constructor(
    id: string,
    title: string,
    noOfColumn: number,
    items: CategoryItem[]
  ) {
    this.id = id;
    this.title = title;
    this.noOfColumn = noOfColumn;
    this.items = items;
  }
}

export type TTheme = "dark" | "light";
export type TBgMode = "custom" | "theme";

export type TColorConfig = {
  theme: TTheme;
  color: string | null;
  background: {
    color: string | null;
    mode: TBgMode;
  };
};

export type THeadingTextStyle = "normal" | "semi-bold" | "bold";
export type THeadingPosition = "top" | "bottom";
export type TTextConfig = {
  text: string;
  textStyle: THeadingTextStyle;
  fontSize: number;
};

/**
 * @description
 * default: no shape before text
 * type-1:  pill shape before text
 * type-2:  circle shape before text
 */
export type THeadingVariant = "default" | "type-1" | "type-2";

export type THeadingTextGlobalConfig = {
  topText: Pick<TTextConfig, "textStyle" | "fontSize">;
  bottomText?: Pick<TTextConfig, "textStyle" | "fontSize">;
  gapBetweenText: number;
  marginTop: number;
  marginBottom: number;
  headingLayout: THeadingLayout;
  headingVariant?: THeadingVariant;
};

export type TWithHeadingTextConfig = {
  headingTextConfig: THeadingTextComponentConfig;
};

export type THeadingTextComponentConfig = {
  topText: TTextConfig["text"];
  bottomText?: TTextConfig["text"];
  showRedirect?: boolean;
  redirectLink?: {
    text: string;
    fontSize: number;
    link: string;
  };
  ignoreSiteMargins?: "top" | "bottom" | "both";
};

export type TDevice<T> = {
  desktop: T;
  tablet: T;
  phone?: T;
};

export type TContactForm = {
  headingConfig?: THeadingTextComponentConfig;
  formTitle: string;
  emailPlaceholder: string;
  bodyPlaceholder: string;
  buttonText: string;
  action: string;
};

export type TListConfig = {
  count: number;
};

type TArticlePosts = {
  title: string;
  pubDate: string;
  description: string;
  encoded: string;
  post_id: number;
  post_date: string;
  post_date_gmt: string;
  comment_status: string;
  /**
   * @description {slug}
   */
  post_name: string;
  encryptedSlug: string;
  status: string;
  post_type: string;
  category: { title: string; slug: string }[];
  attachment_url: string | null;
  prev_post_name: string | null;
  next_post_name: string | null;
};

// for article page
export type TPostData = Pick<
  TArticlePosts,
  | "attachment_url"
  | "category"
  | "description"
  | "encoded"
  | "next_post_name"
  | "prev_post_name"
  | "title"
  | "post_name"
  | "post_id"
>;

// for hero, card, list components
export type TCardPostData = Pick<
  TArticlePosts,
  "attachment_url" | "category" | "description" | "title" | "post_name"
>;

export type TComponentWithArticles = {
  articles: TPostData[];
};

export type TComponentWithLimitedArticleData = {
  articles: TCardPostData[];
};

export type TComponentWithTextColor = {
  textColor: string;
};

export type TSectionWithArticles = {
  leftSectionArticles: TCardPostData[];
  noResultArticles?: TCardPostData[];
  rightSectionArticles: {
    top: TCardPostData[];
    middle: TCardPostData[];
    bottom: TCardPostData[];
  };
};

export type TArticleDetailPageArticles = {
  leftSectionArticles: TPostData;
} & Pick<TSectionWithArticles, "rightSectionArticles">;

export type TPageWithArticle = Partial<
  Record<TSectionType, Record<number, TArticlePosts[] | TSectionWithArticles>>
>;

export type TComponentWithSectionHeading = {
  sectionHeadingComponent: ReactNode;
};

export type TComponentWithBreadcrumb = Pick<
  TBreadcrumbProps,
  "breadcrumbVariant"
>;

export type TComponentWithAddress = {
  addressComponent: ReactNode;
};

export type TComponentWithTag = {
  tagComponent: ReactNode;
};

export type TComponentWithTagVariant = {
  tagVariant: TTagProps["variant"];
};

export type TSectionWithSectionHeading = {
  leftSectionHeading: ReactNode;
  topRightSectionHeading: ReactNode;
  middleRightSectionHeading: ReactNode;
  bottomRightSectionHeading: ReactNode;
};

export type TComponentWithPagination = {
  paginationComponent: ReactNode;
};

export type TComponentWithAddressImgFontColor = {
  imageFontColor: TImageFontColor;
};

export type TShowBgConfig = {
  showBg: boolean;
};

export type TSectionWithArticlesAndDetail = {
  leftSectionArticleDetail: TPostData;
} & Partial<Pick<TSectionWithArticles, "rightSectionArticles">>;

export type TSearchConfig = {
  isSearch?: boolean;
};

export type TContentDisplayOptions = {
  showTag: boolean;
  showDescription: boolean;
  showImage: boolean;
  showRedirect?: boolean;
};

export type TComponentWithCardData = {
  cardData: TPostData;
};

export type TImageSizeValue =
  | "maxWidth - appHorizontalPadding"
  | "maxWidth / 2"
  | "maxWidth"
  | number;

export type TImageSizeUnit = "px" | "vw";

/**
 * @description check `helpers/image-sizes.ts` for logic of imageSizes
 */
export type TImageSizes = Required<
  TDevice<{
    value: TImageSizeValue;
    unit: TImageSizeUnit;
  }>
>;

export type TComponentWithImageSizes = {
  imageSizes: string;
};