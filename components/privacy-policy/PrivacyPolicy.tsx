import type { FC } from "react";
import type { TStaticPageHeaderVariant } from "../common";
import type {
  TComponentWithAddress,
  TComponentWithBreadcrumb,
  TComponentWithSectionHeading,
  TSectionItem,
} from "@/types";

import { Breadcrumb, StaticPageHeader } from "../common";

import { breadcrumbItems } from "./privacy-policy.meta";

import {
  ContentContainer,
  ContentInnerContainer,
  HeaderInnerContainer,
  Section,
} from "./PrivacyPolicy.styled";

// prettier-ignore
export type TPrivacyPolicy =
  & TSectionItem<"privacy-policy">["data"]
  & TComponentWithSectionHeading
  & TStaticPageHeaderVariant
  & TComponentWithBreadcrumb
  & TComponentWithAddress
  & {
    contentMarkup: string;
  };

export const PrivacyPolicy: FC<TPrivacyPolicy> = (props) => {
  const {
    config,
    styleConfig,
    variant: staticPageHeaderVariant,
    sectionHeadingComponent,
    breadcrumbVariant,
    addressComponent,
    contentMarkup,
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
        <ContentContainer
          $customstyles={styleConfig?.pageText}
          dangerouslySetInnerHTML={{
            __html: contentMarkup,
          }}
        />
        {addressComponent}
      </ContentInnerContainer>
    </Section>
  );
};
