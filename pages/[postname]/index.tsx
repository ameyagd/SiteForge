import type { TImageSizes, TSectionItem } from "@/types";
import type { FC } from "react";
import type {
  TArticleDetailPage,
  TServerSideArticleDetailProps,
} from "../../types/article-detail-page.type";

import { getConfig } from "@/lib/fetchers";
import { getArticlesForArticlePage } from "@/helpers/card-data";
import {
  setImageSizesInConfig,
  getImageSizesBasedOnGlobalData,
} from "@/helpers/image-sizes";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setSectionTextColor } from "@/helpers/text-color";

import { defaultHeroStyleConfig } from "@/components/hero";

import Head from "next/head";
import { PageContainer, SectionsContainer } from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading/SectionHeading";
import { ArticlePage } from "@/components/article-page/ArticlePage";

const Page: FC<TArticleDetailPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    articleConfig,
    heroStyleConfig,
    posts,
    showBg,
  } = props;

  return (
    <PageContainer
      appHorizontalPadding={globalConfig.layout.appHorizontalPadding}
      backgroundColor={globalConfig.themeColors.backgroundColor}
      cardRoundness={globalConfig.cardRoundness}
      cardShadow={globalConfig.cardShadow}
      marginBottom={globalConfig.heading.marginBottom}
      marginTop={globalConfig.heading.marginTop}
      maxWidth={globalConfig.layout.maxWidth}
      primary={globalConfig.themeColors.primary}
      secondary={globalConfig.themeColors.secondary}
    >
      <Head>
        <title>{posts.leftSectionArticleDetail.title}</title>
      </Head>
      <Header {...headerConfig.data} />
      <SectionsContainer
        $isHeaderSticky={headerConfig.data.config.stickyHeader || false}
      >
        <ArticlePage
          {...posts}
          config={articleConfig}
          showBg={showBg}
          heroStyleConfig={heroStyleConfig}
          breadcrumbVariant={globalConfig.breadcrumbVariant}
          tagVariant={globalConfig.tagVariant}
          imageSizes={articleConfig.heroImageSizes || ""}
          cardRoundness={
            articleConfig.rightSection?.top.type === "articles"
              ? articleConfig.rightSection.top.config.cardRoundness ||
                globalConfig.cardRoundness
              : globalConfig.cardRoundness
          }
          cardShadow={
            articleConfig.rightSection?.top.type === "articles"
              ? articleConfig.rightSection.top.config.cardShadow ||
                globalConfig.cardShadow
              : globalConfig.cardShadow
          }
          topRightSectionHeading={
            articleConfig.rightSection ? (
              <SectionHeading
                layout={globalConfig.heading}
                text={{
                  ...articleConfig.rightSection.top.headingConfig,
                  ignoreSiteMargins: "top",
                }}
                headingVariant={globalConfig.heading.headingVariant}
              />
            ) : null
          }
        />
      </SectionsContainer>
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

// prettier-ignore
export const getServerSideProps: TServerSideArticleDetailProps = async (context) => {
  const siteConfig = getConfig();
  const postName = context.params!.postname as string;
  const articlePageSections = siteConfig.sections.article_page;
  const posts = getArticlesForArticlePage(articlePageSections, postName);
  if (!posts.leftSectionArticleDetail) {
    return {
      notFound: true,
    };
  }
  const { headerConfig, footerConfig, globalConfig, sections } = siteConfig;
  const { data, type, showBg } = sections["article_page"][0] as TSectionItem<"article-page">;
  let heroStyleConfig: TSectionItem<"hero">["data"]["styleConfig"];
  if (data.config.configKey === "template_3") {
    const heroData = sections["home_page"].find((section) => section.type === "hero");
    if (heroData?.data.styleConfig) {
      heroStyleConfig = heroData.data.styleConfig;
    } else {
      heroStyleConfig = defaultHeroStyleConfig;
    }
    data.config.heroImageSizes = getImageSizesBasedOnGlobalData(
      globalConfig.layout.maxWidth,
      globalConfig.layout.appHorizontalPadding,
      heroStyleConfig!.imageStyle?.imageSizes as TImageSizes
    );
  }
  setSectionTextColor(sections["article_page"][0], globalConfig.themeColors.backgroundColor);
  setImageSizesInConfig(data, type, globalConfig);
  setCardAppearance(data.config, type, globalConfig);
  return {
    props: {
      articleConfig: data.config,
      headerConfig,
      footerConfig,
      globalConfig,
      posts,
      showBg,
      heroStyleConfig: heroStyleConfig || null,
    },
  };
};

export default Page;
