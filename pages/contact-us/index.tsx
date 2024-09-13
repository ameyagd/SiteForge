import type { FC } from "react";
import type { TSectionItem } from "@/types";
import type {
  TContactPage,
  TContactUsStaticProps,
} from "../../types/contact-us-page.type";

import { getConfig } from "@/lib/fetchers";
import { getContactImagePath } from "@/helpers/ccpa";
import { setSectionTextColor } from "@/helpers/text-color";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactUs } from "@/components/contact-us/ContactUs";
import { SectionHeading } from "@/components/section-heading";
import { Address, PageContainer, SectionsContainer } from "@/components/common";

const Page: FC<TContactPage> = (props) => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    integrationConfig: {
      domain: { siteName },
    },
    addressImagePath,
    config,
    styleConfig,
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
        <ContactUs
          config={config}
          styleConfig={styleConfig}
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
            <Address siteName={siteName} addressImagePath={addressImagePath} />
          }
        />
      </SectionsContainer>
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

export const getStaticProps: TContactUsStaticProps = async () => {
  const {
    headerConfig,
    footerConfig,
    globalConfig,
    integrationConfig,
    sections,
  } = getConfig();
  const {
    contact_us: {
      0: { data },
    },
  } = sections;
  setSectionTextColor(
    sections["contact_us"][0],
    globalConfig.themeColors.backgroundColor
  );
  const { config, styleConfig } = data as TSectionItem<"contact-us">["data"];
  const addressImagePath = getContactImagePath(
    integrationConfig.ccpa.agency,
    config.imageFontColor
  );
  return {
    props: {
      headerConfig,
      footerConfig,
      globalConfig,
      integrationConfig,
      config,
      styleConfig,
      addressImagePath,
    },
  };
};

export default Page;
