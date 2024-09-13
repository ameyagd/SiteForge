import type { FC } from "react";
import type { TSectionItem } from "@/types";
import type { TBreadcrumbItem, TPagination } from "@/components/common";
import type {
  TServerSideTagListingProps,
  TTagListingPage,
} from "@/types/tag-listing-page.type";

import { getConfig } from "@/lib/fetchers";
import {
  isValidTag,
  getTagCards,
  getTagArticlesCount,
  getPaginationInfoText,
  getTotalArticlesForTagPageCount,
} from "@/helpers/card-data";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setImageSizesInConfig } from "@/helpers/image-sizes";
import { setSectionTextColor } from "@/helpers/text-color";

import Head from "next/head";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleListing } from "@/components/article-listing/ArticleListing";
import { SectionsContainer } from "@/components/common/app-components";
import { SectionHeading } from "@/components/section-heading/SectionHeading";
import { PageContainer, Pagination } from "@/components/common";

const Page: FC<TTagListingPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    config,
    styleConfig,
    articles,
    tag,
    paginationConfig,
    showBg,
  } = props;

  const breadCrumbItems: TBreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: tag },
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
        <title>{`${tag} | domain | Tagline`}</title>
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
              pageUrl={`tag/${tag}`}
              key="tag"
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
export const getServerSideProps: TServerSideTagListingProps = async (context) => {
  const tag = context.params!.tagname as string;
  if (!isValidTag(tag)) {
    return {
      notFound: true,
    }
  }
  const currentPage = Number((context.query.page as string) ?? 1);
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    sections,
  } = getConfig();
  const {
    tag_listing_page: {
      0: { data, type, showBg },
    },
  } = sections;

  const { config, styleConfig } = data as TSectionItem<"tag-listing">["data"];

  setCardAppearance(config, type, globalConfig);
  setImageSizesInConfig(data, "tag-listing", globalConfig);
  setSectionTextColor(sections["tag_listing_page"][0], globalConfig.themeColors.backgroundColor);

  const articleCount = config.leftSection.config.cardCount;
  const totalArticleCount = getTotalArticlesForTagPageCount(tag);
  const paginationInfo = getPaginationInfoText(currentPage, articleCount, totalArticleCount);
  const paginationConfig: TPagination = {
    infoText: paginationInfo,
    currentPage: currentPage,
    totalPageCount: getTagArticlesCount(tag, config),
    maxPagesToShow: 3,
  };
  const articles = getTagCards(
    config,
    currentPage,
    articleCount,
    tag
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
      categorySlug: tag,
      showBg,
      tag
    },
  };
};

export default Page;
