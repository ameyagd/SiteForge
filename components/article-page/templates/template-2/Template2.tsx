import type { FC } from "react";
import type { TArticlePageTemplate } from "../../types";

import {
  SiteSection,
  SectionInnerContainer,
  GenericRightSection,
} from "@/components/common";
import { LayoutTemplate1 } from "@/components/common/layouts/templates";
import { ArticlePageLeftSection } from "../../components";

import {
  ArticleHeaderContainer,
  ArticlePicture,
  ArticleImage,
} from "./Template2.styled";
import { ArticleTitle } from "../styles/Common.styled";

export const Template2: FC<TArticlePageTemplate> = (props) => {
  const {
    config,
    showBg,
    tagVariant,
    breadcrumbComponent,
    leftSectionArticleDetail,
    rightSectionArticles,
    topRightSectionHeading,
  } = props;
  const attachmentUrl = leftSectionArticleDetail.attachment_url
    ? leftSectionArticleDetail.attachment_url
    : `/assets/card-image.jpg`;

  return (
    <SiteSection $showBg={showBg} $textColor={config.textColor}>
      <SectionInnerContainer>
        {breadcrumbComponent}
        <LayoutTemplate1
          leftSectionContent={
            <>
              <ArticleHeaderContainer
                $isArticlePictureOnTop={config.onTop === "image"}
              >
                <ArticlePicture>
                  <ArticleImage
                    key={leftSectionArticleDetail.post_name}
                    src={attachmentUrl}
                    alt={leftSectionArticleDetail.post_name}
                    sizes={config.articleImageSizes}
                    fill
                    priority
                  />
                </ArticlePicture>
                <ArticleTitle>{leftSectionArticleDetail.title}</ArticleTitle>
              </ArticleHeaderContainer>
              <ArticlePageLeftSection
                cardData={leftSectionArticleDetail}
                showPrevNextArticles={config.showPrevNextArticles}
              />
            </>
          }
          rightSectionContent={
            config.layout === "two_column" && config.rightSection ? (
              <GenericRightSection
                {...config.rightSection.top}
                showBg={showBg}
                tagVariant={tagVariant}
                articles={rightSectionArticles?.top ?? []}
                sectionHeadingComponent={topRightSectionHeading}
              />
            ) : null
          }
        />
      </SectionInnerContainer>
    </SiteSection>
  );
};
