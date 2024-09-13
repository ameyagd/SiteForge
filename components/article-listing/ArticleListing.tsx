import type { FC } from "react";
import type {
  TSectionItem,
  TSectionWithArticles,
  TComponentWithTagVariant,
  TComponentWithPagination,
  TSectionWithSectionHeading,
} from "@/types";
import type { TListingPageConfig, TBreadcrumbProps } from "../common";

import { ListingPreview, SectionInnerContainer, SiteSection } from "../common";

// prettier-ignore
type TArticleListing = 
  & Pick<TSectionItem, "data" | "showBg">
  & TSectionWithArticles
  & TSectionWithSectionHeading
  & TComponentWithPagination
  & TComponentWithTagVariant
  & TBreadcrumbProps;

export const ArticleListing: FC<TArticleListing> = (props) => {
  const listingConfig = props.data.config as TListingPageConfig;

  return (
    <SiteSection $showBg={props.showBg} $textColor={listingConfig.textColor}>
      <SectionInnerContainer>
        <ListingPreview
          {...listingConfig}
          tagVariant={props.tagVariant}
          breadcrumbItems={props.breadcrumbItems}
          breadcrumbVariant={props.breadcrumbVariant}
          paginationComponent={props.paginationComponent}
          showBg={props.showBg}
          leftSectionArticles={props.leftSectionArticles}
          noResultArticles={props.noResultArticles}
          rightSectionArticles={props.rightSectionArticles}
          leftSectionHeading={props.leftSectionHeading}
          bottomRightSectionHeading={props.bottomRightSectionHeading}
          middleRightSectionHeading={props.middleRightSectionHeading}
          topRightSectionHeading={props.topRightSectionHeading}
        />
      </SectionInnerContainer>
    </SiteSection>
  );
};

