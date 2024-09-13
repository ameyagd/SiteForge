import type { FC } from "react";
import type { TArticlePageTemplate } from "../../types";
import { Hero } from "@/components/hero";
import {
  SiteSection,
  SectionInnerContainer,
  GenericRightSection,
} from "@/components/common";
import { LayoutTemplate1 } from "@/components/common/layouts/templates";
import { ArticlePageLeftSection } from "../../components";

export const Template3: FC<TArticlePageTemplate<"template_3">> = (props) => {
  const {
    config,
    showBg,
    tagVariant,
    cardRoundness,
    cardShadow,
    heroStyleConfig,
    heroImageSizes,
    breadcrumbComponent,
    leftSectionArticleDetail,
    rightSectionArticles,
    topRightSectionHeading,
  } = props;

  return (
    <>
      <Hero
        key={leftSectionArticleDetail.post_name}
        showBg={false}
        preventRedirect={true}
        articles={[leftSectionArticleDetail]}
        tagVariant={tagVariant}
        config={{
          configKey: "template_1",
          id: "article-page-hero",
          showDescription: false,
          showTag: true,
          roundness: cardRoundness,
          shadow: cardShadow,
          imageSizes: heroImageSizes,
          textColor: config.textColor,
        }}
        styleConfig={
          heroStyleConfig
            ? {
                ...heroStyleConfig,
                content: {
                  ...heroStyleConfig.content,
                  heading:
                    (heroStyleConfig.content?.heading || "") +
                    `--line-count: 6; font-size: clamp(40px, 3vw, 50px);`,
                },
              }
            : undefined
        }
      />
      <SiteSection $showBg={showBg} $textColor={config.textColor}>
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
    </>
  );
};
