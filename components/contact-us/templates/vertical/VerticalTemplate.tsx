import type { FC } from "react";
import type { TContactUsTemplate } from "../../types";

import { ContactForm } from "../../form";

import {
  ContentContainer,
  HeaderInnerContainer,
  InnerContainer,
  Section,
  TemplateContainer,
} from "./VerticalTemplate.styled";
import { Breadcrumb, StaticPageHeader } from "@/components/common";

export const VerticalTemplate: FC<TContactUsTemplate> = (props) => {
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
      <TemplateContainer>
        <StaticPageHeader variant={staticPageHeaderVariant}>
          <HeaderInnerContainer>
            <Breadcrumb
              breadcrumbVariant={breadcrumbVariant}
              breadcrumbItems={breadcrumbItems}
            />
            {sectionHeadingComponent}
          </HeaderInnerContainer>
        </StaticPageHeader>
        <InnerContainer>
          <ContentContainer
            $customstyles={styleConfig?.container?.contentContainer}
          >
            <ContactForm
              styleConfig={styleConfig}
              showLabel={config.showLabel}
              showIcon={config.showIcon}
            />
            {addressComponent}
          </ContentContainer>
        </InnerContainer>
      </TemplateContainer>
    </Section>
  );
};

export default VerticalTemplate;
