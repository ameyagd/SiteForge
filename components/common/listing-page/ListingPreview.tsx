import type { FC } from "react";
import type {
  TComponentWithPagination,
  TComponentWithTagVariant,
  TSectionWithArticles,
  TSectionWithSectionHeading,
  TShowBgConfig,
} from "@/types";
import type { TBreadcrumbProps } from "../breadcrumb";
import type { TListingPageConfig } from "./types/listing-page.config.type";

import { styled } from "styled-components";

import { Breadcrumb } from "../breadcrumb";
import { LayoutTemplate1 } from "../layouts/templates/LayoutTemplate1";
import { GenericRightSection } from "./GenericRightSection";
import { LeftSection } from "./LeftSection";

// prettier-ignore
type TListingPreview = 
  & TShowBgConfig
  & TBreadcrumbProps
  & TListingPageConfig
  & TSectionWithArticles
  & TComponentWithPagination
  & TComponentWithTagVariant
  & TSectionWithSectionHeading;

export const ListingPreview: FC<TListingPreview> = (props) => {
  return (
    <ListingContainer>
      {props.layoutTemplateKey === "template_1" ? (
        <LayoutTemplate1
          breadcrumb={
            props.breadcrumbItems.length ? (
              <Breadcrumb
                breadcrumbVariant={props.breadcrumbVariant}
                breadcrumbItems={props.breadcrumbItems}
              />
            ) : null
          }
          leftSectionContent={
            <LeftSection
              config={props.leftSection.config}
              styleConfig={props.leftSection.styleConfig}
              headingConfig={props.leftSection.headingConfig}
              showSearchTitle={props.leftSection.showSearchTitle}
              searchTitleConfig={props.leftSection.searchTitleConfig}
              showPagination={props.leftSection.showPagination}
              tagVariant={props.tagVariant}
              paginationComponent={props.paginationComponent}
              sectionHeadingComponent={props.leftSectionHeading}
              leftSectionArticles={props.leftSectionArticles}
              noResultArticles={props.noResultArticles}
            />
          }
          rightSectionContent={
            <RightSectionContainer>
              <GenericRightSection
                {...props.rightSection.top}
                tagVariant={props.tagVariant}
                articles={props.rightSectionArticles.top}
                showBg={props.showBg}
                sectionHeadingComponent={props.topRightSectionHeading}
              />
              {props.rightSection.middle ? (
                <GenericRightSection
                  {...props.rightSection.middle}
                  tagVariant={props.tagVariant}
                  articles={props.rightSectionArticles.middle}
                  showBg={props.showBg}
                  sectionHeadingComponent={props.middleRightSectionHeading}
                />
              ) : props.rightSection.bottom ? (
                <GenericRightSection
                  {...props.rightSection.bottom}
                  tagVariant={props.tagVariant}
                  articles={props.rightSectionArticles.bottom}
                  showBg={props.showBg}
                  sectionHeadingComponent={props.bottomRightSectionHeading}
                />
              ) : null}
            </RightSectionContainer>
          }
        />
      ) : null}
    </ListingContainer>
  );
};

const ListingContainer = styled.div`
  height: 100%;
`;

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--heading-margin-bottom);
`;
