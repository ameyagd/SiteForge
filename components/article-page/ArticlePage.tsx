import type { FC } from "react";
import type { TBreadcrumbItem } from "../common";
import type {
  TSectionItem,
  TGlobalConfig,
  TShowBgConfig,
  TComponentWithImageSizes,
  TComponentWithBreadcrumb,
  TComponentWithTagVariant,
  TSectionWithSectionHeading,
  TSectionWithArticlesAndDetail,
} from "@/types";

import { Breadcrumb } from "../common";

import { Template1, Template2, Template3 } from "./templates";

// prettier-ignore
type TListingPreview = 
  & TShowBgConfig
  & TComponentWithTagVariant
  & TComponentWithBreadcrumb
  & TComponentWithImageSizes
  & TSectionWithArticlesAndDetail
  & TSectionItem<"article-page">["data"]
  & Pick<TGlobalConfig, "cardRoundness" | "cardShadow">
  & Pick<TSectionWithSectionHeading, "topRightSectionHeading">
  & {
    heroStyleConfig: TSectionItem<"hero">["data"]["styleConfig"] | null
  };

export const ArticlePage: FC<TListingPreview> = (props) => {
  const {
    config,
    showBg,
    imageSizes,
    leftSectionArticleDetail,
    topRightSectionHeading,
    rightSectionArticles,
    tagVariant,
    breadcrumbVariant,
    cardRoundness,
    cardShadow,
    heroStyleConfig,
  } = props;

  const breadcrumbItems: TBreadcrumbItem[] = [
    { label: "Home", link: "/" },
    {
      label: `${leftSectionArticleDetail.category[0].title}`,
      link: `/category/${leftSectionArticleDetail.category[0].slug}`,
    },
    { label: `${leftSectionArticleDetail.title}` },
  ];

  return (
    <>
      {config.configKey === "template_1" ? (
        <Template1
          showBg={showBg}
          config={config}
          tagVariant={tagVariant}
          rightSectionArticles={rightSectionArticles}
          topRightSectionHeading={topRightSectionHeading}
          leftSectionArticleDetail={leftSectionArticleDetail}
          breadcrumbComponent={
            <Breadcrumb
              breadcrumbVariant={breadcrumbVariant}
              breadcrumbItems={breadcrumbItems}
            />
          }
        />
      ) : config.configKey === "template_2" ? (
        <Template2
          showBg={showBg}
          config={config}
          tagVariant={tagVariant}
          rightSectionArticles={rightSectionArticles}
          topRightSectionHeading={topRightSectionHeading}
          leftSectionArticleDetail={leftSectionArticleDetail}
          breadcrumbComponent={
            <Breadcrumb
              breadcrumbVariant={breadcrumbVariant}
              breadcrumbItems={breadcrumbItems}
            />
          }
        />
      ) : config.configKey === "template_3" ? (
        <Template3
          showBg={showBg}
          config={config}
          tagVariant={tagVariant}
          cardShadow={cardShadow}
          cardRoundness={cardRoundness}
          heroStyleConfig={heroStyleConfig}
          heroImageSizes={imageSizes}
          rightSectionArticles={rightSectionArticles}
          topRightSectionHeading={topRightSectionHeading}
          leftSectionArticleDetail={leftSectionArticleDetail}
          breadcrumbComponent={
            <Breadcrumb
              breadcrumbVariant={breadcrumbVariant}
              breadcrumbItems={breadcrumbItems}
            />
          }
        />
      ) : null}
    </>
  );
};
