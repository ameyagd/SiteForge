import type { FC } from "react";
import type { TArticlePageTemplate } from "../../types";

import {
  StaticPageHeader,
  SiteSection,
  SectionInnerContainer,
  GenericRightSection,
} from "@/components/common";
import { Tag } from "@/components/tag";
import { LayoutTemplate1 } from "@/components/common/layouts/templates";
import { ArticlePageLeftSection } from "../../components";

import { ArticleTitle } from "../styles/Common.styled";
import {
  Section,
  InnerContainer,
  Header,
  ImageWrapper,
  T1Image,
} from "./Template1.styled";

export const Template1: FC<TArticlePageTemplate> = (props) => {
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
    <Section
      $withoutTopPadding
      $withoutBottomPadding
      $textColor={config.textColor}
    >
      <StaticPageHeader variant="default">
        <InnerContainer>
          <Header>
            <Tag variant={tagVariant}>
              {leftSectionArticleDetail.category[0].title}
            </Tag>
            <ArticleTitle>{leftSectionArticleDetail.title}</ArticleTitle>
          </Header>
          <ImageWrapper>
            <T1Image
              key={leftSectionArticleDetail.post_name}
              src={attachmentUrl}
              alt={leftSectionArticleDetail.post_name}
              fill
              priority
              sizes="50vw"
            />
          </ImageWrapper>
        </InnerContainer>
      </StaticPageHeader>
      <SiteSection as="div" $showBg={showBg}>
        <SectionInnerContainer>
          <LayoutTemplate1
            leftSectionContent={
              <ArticlePageLeftSection
                cardData={leftSectionArticleDetail}
                breadcrumbComponent={breadcrumbComponent}
                showPrevNextArticles={config.showPrevNextArticles}
              />
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
    </Section>
  );
};
