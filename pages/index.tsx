import type { FC } from "react";
import type { TPostData, TSectionWithArticles } from "@/types";
import type { THomePage, THomePageStaticProps } from "@/types/home-page.type";

import Head from "next/head";

import { getConfig } from "@/lib/fetchers";
import { getArticlesForHomePage } from "@/helpers/card-data";
import { setCardAppearance } from "@/helpers/card-appearance";
import { setSectionTextColor } from "@/helpers/text-color";
import { setImageSizesInConfig } from "@/helpers/image-sizes";

import { PageContainer, SectionsContainer } from "@/components/common";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

const Page: FC<THomePage> = (props) => {
  // prettier-ignore
  const { headerConfig, footerConfig, globalConfig, sections, articles } = props;

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
        <title>Domain | Tagline</title>
      </Head>
      <Header {...headerConfig.data} />
      <SectionsContainer
        $isHeaderSticky={headerConfig.data.config.stickyHeader || false}
      >
        {sections.map((section, index) => {
          switch (section.type) {
            case "hero":
              return (
                // prettier-ignore
                <Hero
                  key={section.id}
                  articles={(articles[section.type]?.[index] as TPostData[]) || []}
                  tagVariant={globalConfig.tagVariant}
                  showBg={section.showBg}
                  config={section.data.config}
                  styleConfig={section.data.styleConfig}
                />
              );
            case "email-capture":
              return (
                <EmailCapture
                  key={section.id}
                  config={section.data.config}
                  styleConfig={section.data.styleConfig}
                  showBg={section.showBg}
                  sectionHeadingComponent={
                    section.data.config.headingTextConfig ? (
                      <SectionHeading
                        headingVariant={globalConfig.heading.headingVariant}
                        layout={{
                          ...globalConfig.heading,
                          marginTop: 0,
                          marginBottom: 0,
                        }}
                        text={section.data.config.headingTextConfig}
                      />
                    ) : null
                  }
                />
              );
            case "grid":
              return (
                <Grid
                  key={section.id}
                  config={section.data.config}
                  styleConfig={section.data.styleConfig}
                  showBg={section.showBg}
                  tagVariant={globalConfig.tagVariant}
                  // prettier-ignore
                  articles={(articles[section.type]?.[index] as TPostData[]) || []}
                  sectionHeadingComponent={
                    <SectionHeading
                      headingVariant={globalConfig.heading.headingVariant}
                      text={section.data.config.headingTextConfig}
                      layout={globalConfig.heading}
                    />
                  }
                  imageSizes={section.data.config.imageSizes}
                />
              );
            case "section": {
              // prettier-ignore
              const { leftSectionArticles, rightSectionArticles } = (articles[section.type]?.[index] as TSectionWithArticles) || [];
              return (
                <Section
                  key={section.id}
                  config={section.data.config}
                  showBg={section.showBg}
                  leftSectionArticles={leftSectionArticles}
                  rightSectionArticles={rightSectionArticles}
                  tagVariant={globalConfig.tagVariant}
                  leftSectionHeading={
                    section.data.config.leftSection.headingConfig?.config ? (
                      <SectionHeading
                        headingVariant={globalConfig.heading.headingVariant}
                        text={
                          section.data.config.leftSection.headingConfig.config
                        }
                        layout={globalConfig.heading}
                      />
                    ) : null
                  }
                  topRightSectionHeading={
                    <SectionHeading
                      headingVariant={globalConfig.heading.headingVariant}
                      text={section.data.config.rightSection.top.headingConfig}
                      layout={globalConfig.heading}
                    />
                  }
                  middleRightSectionHeading={
                    section.data.config.rightSection.middle?.headingConfig ? (
                      <SectionHeading
                        headingVariant={globalConfig.heading.headingVariant}
                        text={
                          section.data.config.rightSection.middle.headingConfig
                        }
                        layout={globalConfig.heading}
                      />
                    ) : null
                  }
                  bottomRightSectionHeading={
                    section.data.config.rightSection.bottom?.headingConfig ? (
                      <SectionHeading
                        headingVariant={globalConfig.heading.headingVariant}
                        text={
                          section.data.config.rightSection.bottom.headingConfig
                        }
                        layout={globalConfig.heading}
                      />
                    ) : null
                  }
                />
              );
            }
            default:
              return null;
          }
        })}
      </SectionsContainer>
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

export const getStaticProps: THomePageStaticProps = async () => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    sections: { home_page },
  } = getConfig();
  home_page.forEach((section) => {
    setSectionTextColor(section, globalConfig.themeColors.backgroundColor);
    setImageSizesInConfig(section.data, section.type, globalConfig);
    setCardAppearance(section.data.config, section.type, globalConfig);
  });
  const articles = getArticlesForHomePage(home_page);
  return {
    props: {
      headerConfig,
      footerConfig,
      globalConfig,
      sections: home_page || [],
      articles,
    },
  };
};

export default Page;
