import type { ReactNode } from "react";
import type { TArticlePageConfig } from "./article-page-preview.config.type";
import type {
  TAppConfig,
  TSectionItem,
  TShowBgConfig,
  TComponentWithTagVariant,
  TSectionWithArticlesAndDetail,
  TSectionWithSectionHeading,
} from "@/types";

// prettier-ignore
type _TTemplate = 
  & TShowBgConfig
  & TComponentWithTagVariant
  & TSectionWithArticlesAndDetail
  & Pick<TSectionWithSectionHeading, "topRightSectionHeading">
  & { config: Omit<TArticlePageConfig, "templateKey" | "id"> }
  & {
    breadcrumbComponent: ReactNode;
  };

// prettier-ignore
export type TArticlePageTemplate<T extends TArticlePageConfig["configKey"] = any> =
  T extends "template_3"
    ? _TTemplate &
        Pick<TAppConfig["globalConfig"], "cardRoundness" | "cardShadow"> & {
          heroStyleConfig: TSectionItem<"hero">["data"]["styleConfig"] | null;
          heroImageSizes: TSectionItem<"hero">["data"]["config"]["imageSizes"];
        }
    : _TTemplate;
