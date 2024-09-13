import type { FC } from "react";
import type { TSectionItem } from "@/types";
import type {
  TAboutUsPage,
  TAboutUsStaticProps,
} from "../../types/about-us-page.type";

import { getConfig } from "@/lib/fetchers";
import { setSectionTextColor } from "@/helpers/text-color";

import { AboutUs } from "@/components/about-us";
import { PageContainer, SectionsContainer } from "@/components/common";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

const Page: FC<TAboutUsPage> = (props) => {
  // prettier-ignore
  const { headerConfig, footerConfig, globalConfig, config, styleConfig } = props;

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
        <AboutUs
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
        />
      </SectionsContainer>
      <Footer {...footerConfig.data} />
    </PageContainer>
  );
};

export const getStaticProps: TAboutUsStaticProps = async () => {
  const { headerConfig, footerConfig, globalConfig, sections } = getConfig();
  const {
    about_us: {
      0: {
        data: { config, styleConfig },
      },
    },
  } = sections;
  setSectionTextColor(
    sections["about_us"][0],
    globalConfig.themeColors.backgroundColor
  );
  return {
    // prettier-ignore
    props: {
      config: config as TSectionItem<"about-us">["data"]["config"],
      styleConfig: styleConfig as TSectionItem<"about-us">["data"]["styleConfig"],
      headerConfig,
      footerConfig,
      globalConfig,
    },
  };
};

export default Page;
