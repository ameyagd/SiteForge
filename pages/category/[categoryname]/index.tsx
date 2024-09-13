import type { FC } from "react";
import type { TSectionItem } from "@/types";
import type { TBreadcrumbItem, TPagination } from "@/components/common";
import type {
  TCategoryListingPage,
  TServerSideCategoryListingProps,
} from "../../../types/category-listing-page.type";

import { getConfig } from "@/lib/fetchers";
import {
  getArticlesForCategoryPage,
  getCategoryNameFromSlug,
  getCategoryPageCount,
  getPaginationInfoText,
  getTotalArticlesForCategoryPageCount,
} from "@/helpers/card-data";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setImageSizesInConfig } from "@/helpers/image-sizes";
import { setSectionTextColor } from "@/helpers/text-color";

import Head from "next/head";

import { ArticleListing } from "@/components/article-listing/ArticleListing";
import { PageContainer, Pagination } from "@/components/common";
import { SectionsContainer } from "@/components/common/app-components";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading/SectionHeading";

const Page: FC<TCategoryListingPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    config,
    styleConfig,
    articles,
    categoryName,
    categorySlug,
    paginationConfig,
    showBg,
  } = props;

  const breadCrumbItems: TBreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: categoryName },
  ];

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
        <title>{`${categoryName} | domain | Tagline`}</title>
      </Head>
      <Header {...headerConfig.data} />
      <SectionsContainer
        $isHeaderSticky={headerConfig.data.config.stickyHeader || false}
      >
        <ArticleListing
          {...articles}
          showBg={showBg}
          data={{ config, styleConfig }}
          tagVariant={globalConfig.tagVariant}
          breadcrumbItems={breadCrumbItems}
          breadcrumbVariant={globalConfig.breadcrumbVariant}
          paginationComponent={
            <Pagination
              {...paginationConfig}
              paginationVariant={globalConfig.paginationVariant}
              pageUrl={`category/${categorySlug}`}
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
export const getServerSideProps: TServerSideCategoryListingProps = async (context) => {
  const categorySlug = context.params!.categoryname as string;
  const categoryName = getCategoryNameFromSlug(categorySlug);

  if (!categoryName) {
    return {
      notFound: true,
    };
  }
  const currentPage = Number((context.query.page as string) ?? 1);
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    sections,
  } = getConfig();
  const {
    category_listing_page: {
      0: { data, type, showBg },
    },
  } = sections;
  const { config, styleConfig } = data as TSectionItem<"category-listing">["data"];
  
  setCardAppearance(config, type, globalConfig);
  setImageSizesInConfig(data, "category-listing", globalConfig);
  setSectionTextColor(sections["category_listing_page"][0], globalConfig.themeColors.backgroundColor);

  const articleCount = config.leftSection.config.cardCount;
  const totalArticleCount = getTotalArticlesForCategoryPageCount(categorySlug);
  const paginationInfoText = getPaginationInfoText(currentPage, articleCount, totalArticleCount);
  const paginationConfig: TPagination = {
    infoText: paginationInfoText,
    currentPage: currentPage,
    totalPageCount: getCategoryPageCount(categorySlug, config),
    maxPagesToShow: 3,
  };
  const articles = getArticlesForCategoryPage(
    config,
    currentPage,
    articleCount,
    categorySlug
  );

  if (articles == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      headerConfig,
      footerConfig,
      globalConfig,
      config,
      styleConfig,
      articles,
      paginationConfig,
      categoryName,
      categorySlug,
      showBg,
    },
  };
};

export default Page;
