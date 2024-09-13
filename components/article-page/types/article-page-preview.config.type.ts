import type { TListingRightSection } from "@/components/common";
import type {
  TComponentWithImageSizes,
  TComponentWithTextColor,
  TConfigKeyAndId,
} from "@/types";

type TArticlePageLayoutTemplateKey = "template_1" | "template_2" | "template_3";

export type TArticlePageConfig = TComponentWithTextColor &
  TConfigKeyAndId<TArticlePageLayoutTemplateKey> & {
    layout: "single_column" | "two_column";
    onTop: "title" | "image";
    showPrevNextArticles: boolean;
    articleImageSizes?: TComponentWithImageSizes["imageSizes"];
    heroImageSizes?: TComponentWithImageSizes["imageSizes"];
    rightSection?: TListingRightSection;
  };
