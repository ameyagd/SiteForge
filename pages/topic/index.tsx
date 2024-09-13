import type { FC } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { TImageSizes, TMonetizationPageConfig } from "@/types";
import type {
  TMonetizationPageData,
  TMonetizationSectionGeneric,
} from "@/components/monetization-page";

import Head from "next/head";
import { PageContainer } from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MonetizationSectionRenderer } from "@/components/monetization-page/MonetizationSectionRenderer";

import { getTextColor } from "@/helpers/text-color";
import { getQueryParamMap, isPhoneDevice } from "@/helpers/utils";
import { getEncryptedString } from "@/helpers/security";

import { getConfig } from "@/lib/fetchers";

import { getWebResults } from "@/components/monetization-page/web-results/web-results.helper";
import { getStaticContent } from "@/components/monetization-page/static-content/static-content.helper";
import {
  getGoogleAds,
  resetAlreadyShownGoogleAds,
} from "@/components/monetization-page/google-ads/google-ads.helper";
import { getArticleContent } from "@/components/monetization-page/article-content/article-content.helper";
import { getImageSizes } from "@/helpers/image-sizes";

type TPage = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page: FC<TPage> = (props) => {
  return (
    <>
      {props.test ? (
        <>
          {JSON.stringify(props.test)}
          <hr />
        </>
      ) : null}
      <PageContainer
        appHorizontalPadding={props.globalConfig.layout.appHorizontalPadding}
        backgroundColor={props.globalConfig.themeColors.backgroundColor}
        cardRoundness={props.globalConfig.cardRoundness}
        cardShadow={props.globalConfig.cardShadow}
        marginBottom={props.globalConfig.heading.marginBottom}
        marginTop={props.globalConfig.heading.marginTop}
        maxWidth={props.globalConfig.layout.maxWidth}
        primary={props.globalConfig.themeColors.primary}
        secondary={props.globalConfig.themeColors.secondary}
      >
        <Head>
          <title>| domain | Tagline</title>
        </Head>
        <Header {...props.headerConfig.data} />
        <MonetizationSectionRenderer
          sections={props.sections}
          pageData={props.pageData}
          textColor={props.textColor}
          showBg={props.showBgInMonetizationPage}
          isHeaderSticky={props.headerConfig.data.config.stickyHeader}
          backgroundColor={props.globalConfig.themeColors.backgroundColor}
        />
        <Footer {...props.footerConfig.data} />
      </PageContainer>
    </>
  );
};

// typescript is causing issues that's why types to GetServerSideProps is not given like other pages
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const isPhone = isPhoneDevice(context.req.headers);
    const decryptedQueryParams = getQueryParamMap(context.query, {
      withDecryption: true,
    });
    const {
      globalConfig,
      sections: {
        monetization_page: {
          0: {
            data: { config },
          },
        },
      },
    } = getConfig();
    const _config = config as TMonetizationPageConfig;
    const templateConfig = _config.templateList.find(
      (template) => template.monetizationTemplateKey === decryptedQueryParams.tk
    );
    if (!templateConfig || !decryptedQueryParams.slug) {
      return {
        notFound: true,
      };
    }

    const pageData: TMonetizationPageData = {
      "article-content": {},
      "google-ads": {},
      "static-content": {},
      "web-results": {},
    };
    resetAlreadyShownGoogleAds(decryptedQueryParams.slug);
    let staticContent: ReturnType<typeof getStaticContent> = null;
    const deviceType = isPhone ? "phone" : "desktop";
    for (let i = 0; i < templateConfig[deviceType].sections.length; i++) {
      const section = templateConfig[deviceType].sections[i];
      switch (section.type) {
        case "web-results":
          pageData[section.type][i] = getWebResults(
            section.config.adCount,
            decryptedQueryParams.slug,
            context.query.s! as string
          );
          break;
        case "static-content":
          staticContent = getStaticContent(
            section.config.wordCount,
            decryptedQueryParams.slug
          );
          if (!staticContent) {
            return {
              notFound: true,
            };
          }
          pageData[section.type][i] = {
            title: staticContent.title,
            staticContentHtml: staticContent.staticContentHtml,
            showTitle: section.config.showTitle,
          };
          break;
        // prettier-ignore
        case "article-content":
          const articleContent = getArticleContent(
            decryptedQueryParams.slug,
            staticContent?.lastIndex ?? 0
          );
          if (!articleContent) {
            return {
              notFound: true,
            };
          }
          pageData[section.type][i] = articleContent;
          const imageSizeOb: TImageSizes = { 
            desktop: { 
              value: globalConfig.layout.maxWidth - globalConfig.layout.appHorizontalPadding, 
              unit: "px"
            },
            tablet: {
              value: globalConfig.layout.maxWidth - globalConfig.layout.appHorizontalPadding,
              unit: "px"
            },
            phone: {
              value: 100,
              unit: "vw"
            }
          };
          section.config.imageSizes = getImageSizes(imageSizeOb) || "100vw";
          break;
        case "google-ads":
          pageData[section.type][i] = getGoogleAds(
            section.config.adCount,
            templateConfig.monetizationTemplateKey,
            section.config.targetTemplateId,
            decryptedQueryParams.slug,
            context.query as Record<string, string>
          );
          break;
        default:
          break;
      }
    }
    // prettier-ignore
    const headerSectionData = templateConfig[deviceType].sections[0].config as TMonetizationSectionGeneric<"header">["config"];
    headerSectionData.config.page = "monetization";
    if (headerSectionData.config.search.monetizationConfig) {
      headerSectionData.config.search.monetizationConfig.resultsTemplate =
        getEncryptedString(
          headerSectionData.config.search.monetizationConfig.resultsTemplate
        );
    }
    // prettier-ignore
    const footerSectionData = templateConfig[deviceType].sections.at(-1)!.config as TMonetizationSectionGeneric<"footer">["config"];
    return {
      // prettier-ignore
      props: {
        pageData,
        globalConfig,
        headerConfig: { data: { ...headerSectionData } },
        footerConfig: { data: { ...footerSectionData } },
        sections: templateConfig[deviceType].sections.slice(
          1,
          templateConfig[deviceType].sections.length - 1
        ),
        showBgInMonetizationPage: templateConfig[deviceType].showBg,
        test: context.query.test != null ? decryptedQueryParams : null,
        textColor: getTextColor(templateConfig[deviceType].showBg, globalConfig.themeColors.backgroundColor),
      },
    };
  } catch (error) {
    console.error("Error occurred in monetization page: ", error);
    return {
      notFound: true,
    };
  }
};

export default Page;
