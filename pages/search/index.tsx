import type { FC } from "react";
import type { TSectionItem } from "@/types";
import type { TPagination } from "@/components/common";
import type {
  TSearchPage,
  TServerSideSearchPageProps,
} from "../../types/search-page.type";

import { getConfig } from "@/lib/fetchers";
import {
  getSearchPageCount,
  getNoResultArticles,
  getPaginationInfoText,
  getArticlesForSearchPage,
  getTotalArticlesForSearchPageCount,
} from "@/helpers/card-data";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setSectionTextColor } from "@/helpers/text-color";
import { setImageSizesInConfig } from "@/helpers/image-sizes";

import Head from "next/head";

import { ArticleListing } from "@/components/article-listing/ArticleListing";
import { PageContainer, Pagination } from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading/SectionHeading";

const Page: FC<TSearchPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    config,
    styleConfig,
    paginationConfig,
    articles,
    noResultArticles,
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
        <title>Blog | SiteForge | This is a preview site</title>
      </Head>
      <Header {...headerConfig.data} />
      <ArticleListing
        showBg={showBg}
        data={{ config, styleConfig }}
        tagVariant={globalConfig.tagVariant}
        leftSectionArticles={articles.leftSectionArticles}
        noResultArticles={noResultArticles}
        rightSectionArticles={articles.rightSectionArticles}
        breadcrumbItems={[]}
        breadcrumbVariant={globalConfig.breadcrumbVariant}
        paginationComponent={
          paginationConfig.totalPageCount > 1 ? (
            <Pagination
              {...paginationConfig}
              paginationVariant={globalConfig.paginationVariant}
              pageUrl="search"
            />
          ) : null
        }
        leftSectionHeading={
          noResultArticles?.length ? (
            <SectionHeading
              headingVariant={globalConfig.heading.headingVariant}
              text={{
                topText: "You May",
                bottomText: "Also Like",
              }}
              layout={globalConfig.heading}
            />
          ) : config.leftSection.headingConfig?.config ? (
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
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

// prettier-ignore
export const getServerSideProps: TServerSideSearchPageProps = async (context) => {
  const searchQuery = context.query.s as string;
  const currentPage = Number((context.query.page as string) ?? 1);

  const {
    headerConfig,
    footerConfig,
    globalConfig,
    sections,
  } = getConfig();
  const {
    search_page: {
      0: { data, type, showBg },
    },
  } = sections;

  const { config, styleConfig } = data as TSectionItem<"search-page">["data"];

  setCardAppearance(config, type, globalConfig);
  setImageSizesInConfig(data, "search-page", globalConfig);
  setSectionTextColor(sections["search_page"][0], globalConfig.themeColors.backgroundColor);

  config.leftSection.showSearchTitle = true;
  config.leftSection.searchTitleConfig = {
    text: "Search For: ",
  };
  const articleCount = config.leftSection.config.cardCount;
  const totalArticleCount = getTotalArticlesForSearchPageCount(searchQuery);
  const paginationInfoText = getPaginationInfoText(currentPage, articleCount, totalArticleCount);
  const paginationConfig: TPagination = {
    infoText: paginationInfoText,
    currentPage: currentPage,
    totalPageCount: getSearchPageCount(searchQuery, config),
    maxPagesToShow: 3,
  };
  const articles = getArticlesForSearchPage(
    config,
    currentPage,
    articleCount,
    searchQuery
  );
  const noResultArticles = !articles?.leftSectionArticles.length 
    ? getNoResultArticles() 
    : [];

  if (articles == null || noResultArticles == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      showBg,
      articles,
      config,
      styleConfig,
      headerConfig,
      footerConfig,
      globalConfig,
      noResultArticles,
      paginationConfig,
    },
  };
};

export default Page;
