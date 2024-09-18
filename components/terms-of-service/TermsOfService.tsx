import type { FC } from "react";
import type { TStaticPageHeaderVariant } from "../common";
import type {
  TSectionItem,
  TComponentWithBreadcrumb,
  TComponentWithSectionHeading,
} from "@/types";

import { breadcrumbItems } from "./terms-of-service.meta";

import { Breadcrumb, PageTextContainer, StaticPageHeader } from "../common";

import {
  ContentInnerContainer,
  HeaderInnerContainer,
  Section,
} from "./TermsOfService.styled";

// prettier-ignore
export type TTermsOfService = 
  & TSectionItem<"terms-of-service">["data"]
  & TComponentWithSectionHeading
  & TStaticPageHeaderVariant
  & TComponentWithBreadcrumb;

export const TermsOfService: FC<TTermsOfService> = (props) => {
  const {
    config,
    styleConfig,
    variant: staticPageHeaderVariant,
    sectionHeadingComponent,
    breadcrumbVariant,
  } = props;

  return (
    <Section
      $textColor={config.textColor}
      $customstyles={styleConfig?.container?.outerContainer}
      $withoutTopPadding
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
      <ContentInnerContainer
        $customstyles={styleConfig?.container?.innerContainer}
      >
        <PageTextContainer
          $customstyles={styleConfig?.pageText}
          dangerouslySetInnerHTML={{ __html: config.text }}
        />
      </ContentInnerContainer>
    </Section>
  );
};
