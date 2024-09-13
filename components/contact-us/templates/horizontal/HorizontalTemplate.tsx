import type { FC } from "react";
import type { TContactUsTemplate } from "../../types";

import {
  Breadcrumb,
  SectionInnerContainer,
  SiteSection,
  StaticPageHeader,
} from "@/components/common";
import { ContactForm } from "../../form";
import {
  Container,
  HeaderInnerContainer,
  Section,
} from "./HorizontalTemplate.styled";

export const HorizontalTemplate: FC<TContactUsTemplate> = (props) => {
  const {
    config,
    styleConfig,
    textColor,
    variant: staticPageHeaderVariant,
    breadcrumbVariant,
    breadcrumbItems,
    addressComponent,
    sectionHeadingComponent,
  } = props;

  return (
    <Section
      $textColor={textColor}
      $customstyles={styleConfig?.container?.outerContainer}
    >
      <StaticPageHeader variant={staticPageHeaderVariant}>
        <HeaderInnerContainer>
          <Breadcrumb
            breadcrumbVariant={breadcrumbVariant}
            breadcrumbItems={breadcrumbItems}
          />
          {sectionHeadingComponent}
        </HeaderInnerContainer>
      </StaticPageHeader>
      <SiteSection as="div">
        <SectionInnerContainer>
          <Container $customstyles={styleConfig?.container?.innerContainer}>
            <ContactForm
              styleConfig={styleConfig}
              showLabel={config.showLabel}
              showIcon={config.showIcon}
            />
            {addressComponent}
          </Container>
        </SectionInnerContainer>
      </SiteSection>
    </Section>
  );
};
