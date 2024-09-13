import type { TBreadcrumbItem, TPagination } from "@/components/common";
import type { TSectionItem } from "@/types";
import type { FC } from "react";
import type {
  TBlogListingPage,
  TServerSideBlogListingProps,
} from "../../types/blog-listing-page.type";

import {
  getArticlePageCount,
  getArticlesForListingPage,
  getPaginationInfoText,
  getTotalArticlesCount,
} from "@/helpers/card-data";
import { getConfig } from "@/lib/fetchers";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setImageSizesInConfig } from "@/helpers/image-sizes";
import { setSectionTextColor } from "@/helpers/text-color";

import Head from "next/head";

import { ArticleListing } from "@/components/article-listing/ArticleListing";
import {
  PageContainer,
  Pagination,
  SectionsContainer,
} from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading/SectionHeading";

const breadCrumbItems: TBreadcrumbItem[] = [
  { label: "Home", link: "/" },
  { label: "Blog" },
];

const Page: FC<TBlogListingPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    config,
    styleConfig,
    paginationConfig,
    articles,
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
        <title>Blog | domain | Tagline</title>
      </Head>
      <Header {...headerConfig.data} />
      <SectionsContainer
        $isHeaderSticky={headerConfig.data.config.stickyHeader || false}
      >
        <ArticleListing
          leftSectionArticles={articles.leftSectionArticles}
          rightSectionArticles={articles.rightSectionArticles}
          data={{ config, styleConfig }}
          showBg={showBg}
          tagVariant={globalConfig.tagVariant}
          breadcrumbItems={breadCrumbItems}
          breadcrumbVariant={globalConfig.breadcrumbVariant}
          paginationComponent={
            <Pagination
              {...paginationConfig}
              pageUrl="blog"
              paginationVariant={globalConfig.paginationVariant}
            />
          }
          leftSectionHeading={
            config.leftSection.headingConfig?.config ? (
              <SectionHeading
                headingVariant={globalConfig.heading.headingVariant}
                text={config.leftSection.headingConfig?.config}
                layout={globalConfig.heading}
              />
            ) : null
          }
          topRightSectionHeading={
            <SectionHeading
              headingVariant={globalConfig.heading.headingVariant}
              text={config.rightSection.top.headingConfig}
              layout={globalConfig.heading}
            />
          }
          middleRightSectionHeading={
            config.rightSection.middle?.headingConfig ? (
              <SectionHeading
                headingVariant={globalConfig.heading.headingVariant}
                text={config.rightSection.middle.headingConfig}
                layout={globalConfig.heading}
              />
            ) : null
          }
          bottomRightSectionHeading={
            config.rightSection.bottom?.headingConfig ? (
              <SectionHeading
                headingVariant={globalConfig.heading.headingVariant}
                text={config.rightSection.bottom.headingConfig}
                layout={globalConfig.heading}
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
export const getServerSideProps: TServerSideBlogListingProps = async (context) => {
  const currentPage = Number((context.query.page as string) ?? 1);
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    sections,
  } = getConfig();
  const {
    article_listing_page: {
      0: { data, type, showBg },
    },
  } = sections;
  const { config, styleConfig } = data as TSectionItem<"article-listing">["data"];
  
  setCardAppearance(config, type, globalConfig);
  setImageSizesInConfig(data, "article-listing", globalConfig);
  setSectionTextColor(sections["article_listing_page"][0], globalConfig.themeColors.backgroundColor);

  const articleCount = config.leftSection.config.cardCount;
  const articles = getArticlesForListingPage(config, currentPage, articleCount);
  if (articles == null) {
    return {
      notFound: true,
    }
  }
  const totalArticleCount = getTotalArticlesCount();
  const paginationInfoText = getPaginationInfoText(currentPage, articleCount, totalArticleCount);
  const paginationConfig: TPagination = {
    infoText: paginationInfoText,
    currentPage,
    totalPageCount: getArticlePageCount(config),
    maxPagesToShow: 3,
  };
  return {
    props: {
      headerConfig,
      footerConfig,
      globalConfig,
      config,
      styleConfig,
      articles,
      paginationConfig,
      showBg,
    },
  };
};

export default Page;
