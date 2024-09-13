import type { FC } from "react";
import type {
  TSectionItem,
  TShowBgConfig,
  TSectionWithArticles,
  TComponentWithTagVariant,
  TSectionWithSectionHeading,
} from "@/types";

import styled from "styled-components";

import { SectionInnerContainer, SiteSection } from "../common";
import { LayoutTemplate1 } from "../common/layouts/templates/LayoutTemplate1";
import { GenericRightSection, LeftSection } from "../common/listing-page";

// prettier-ignore
type TSection =
  & TSectionItem<"section">["data"]
  & TShowBgConfig
  & TSectionWithSectionHeading
  & TComponentWithTagVariant
  & TSectionWithArticles;

export const Section: FC<TSection> = (props) => {
  const {
    config: { leftSection, rightSection, configKey, id, textColor },
    leftSectionHeading,
    leftSectionArticles,
    topRightSectionHeading,
    rightSectionArticles,
    middleRightSectionHeading,
    showBg,
    tagVariant,
  } = props;
  return (
    <SiteSection
      id={id}
      $showBg={showBg}
      $textColor={textColor}
      // $customstyles={styleConfig?.container?.outerContainer}
    >
      <SectionInnerContainer>
        {configKey === "template_1" ? (
          // template_1 => both side grid
          <LayoutTemplate1
            leftSectionContent={
              <LeftSection
                config={leftSection.config}
                styleConfig={leftSection.styleConfig}
                headingConfig={leftSection.headingConfig}
                searchTitleConfig={leftSection.searchTitleConfig}
                showSearchTitle={leftSection.showSearchTitle}
                leftSectionArticles={leftSectionArticles}
                sectionHeadingComponent={leftSectionHeading}
                tagVariant={tagVariant}
                showPagination={false}
                paginationComponent={null}
              />
            }
            rightSectionContent={
              <GenericRightSection
                {...rightSection.top}
                showBg={showBg}
                tagVariant={tagVariant}
                articles={rightSectionArticles.top}
                sectionHeadingComponent={topRightSectionHeading}
              />
            }
          />
        ) : (
          <LayoutTemplate1
            leftSectionContent={
              <LeftSection
                config={leftSection.config}
                styleConfig={leftSection.styleConfig}
                headingConfig={leftSection.headingConfig}
                searchTitleConfig={leftSection.searchTitleConfig}
                showSearchTitle={leftSection.showSearchTitle}
                sectionHeadingComponent={leftSectionHeading}
                leftSectionArticles={leftSectionArticles}
                tagVariant={tagVariant}
                showPagination={false}
                paginationComponent={null}
              />
            }
            rightSectionContent={
              <RightSectionContainer>
                <GenericRightSection
                  {...rightSection.top}
                  showBg={showBg}
                  tagVariant={tagVariant}
                  articles={rightSectionArticles.top}
                  sectionHeadingComponent={topRightSectionHeading}
                />
                {rightSection.middle ? (
                  <GenericRightSection
                    {...rightSection.middle}
                    showBg={showBg}
                    tagVariant={tagVariant}
                    articles={rightSectionArticles.middle}
                    sectionHeadingComponent={middleRightSectionHeading}
                  />
                ) : null}
              </RightSectionContainer>
            }
          />
        )}
      </SectionInnerContainer>
    </SiteSection>
  );
};

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--heading-margin-bottom);
`;
