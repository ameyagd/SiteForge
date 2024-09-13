import type { TSectionItem } from "@/types";
import type { FC } from "react";
import type {
  TPrivacyPage,
  TPrivacyPageStaticProps,
} from "../../types/privacy-policy-page.type";

import { getConfig } from "@/lib/fetchers";
import { getContactImagePath } from "@/helpers/ccpa";
import { setSectionTextColor } from "@/helpers/text-color";

import { privacyTextTemplateContentMap } from "@/data/privacy-text-template-content-map";

import { Address, PageContainer, SectionsContainer } from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrivacyPolicy } from "@/components/privacy-policy/PrivacyPolicy";
import { SectionHeading } from "@/components/section-heading";

const Page: FC<TPrivacyPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    integrationConfig: {
      ccpa: { agency },
      domain: { siteName },
    },
    config,
    styleConfig,
    contentMarkup,
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
      <Header {...headerConfig.data} />
      <SectionsContainer
        $isHeaderSticky={headerConfig.data.config.stickyHeader || false}
      >
        <PrivacyPolicy
          config={config}
          styleConfig={styleConfig}
          contentMarkup={contentMarkup}
          variant={globalConfig.staticPageVariant}
          breadcrumbVariant={globalConfig.breadcrumbVariant}
          sectionHeadingComponent={
            <SectionHeading
              layout={globalConfig.heading}
              text={{ ...config.headingTextConfig, ignoreSiteMargins: "both" }}
              headingVariant={globalConfig.heading.headingVariant}
            />
          }
          addressComponent={
            <Address
              siteName={siteName}
              addressImagePath={getContactImagePath(
                agency,
                config.imageFontColor
              )}
            />
          }
        />
      </SectionsContainer>
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

// prettier-ignore
export const getStaticProps: TPrivacyPageStaticProps = async () => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    integrationConfig,
    sections,
  } = getConfig();
  const {
    privacy_policy: {
      0: { data },
    },
  } = sections;
  setSectionTextColor(
    sections["privacy_policy"][0],
    globalConfig.themeColors.backgroundColor
  );
  const { config, styleConfig } = data as TSectionItem<"privacy-policy">["data"];
  const { domain: { siteName } } = integrationConfig;

  return {
    props: {
      config,
      styleConfig,
      headerConfig,
      footerConfig,
      globalConfig,
      integrationConfig,
      contentMarkup: privacyTextTemplateContentMap[config.textTemplate].replace(/~website_name~/g, siteName),
    },
  };
};

export default Page;
