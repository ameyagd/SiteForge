import type { FC } from "react";
import type { TListingLeftSection } from "./types";
import type {
  TComponentWithPagination,
  TComponentWithSectionHeading,
  TComponentWithTagVariant,
  TSectionWithArticles,
} from "@/types";

import { useRouter } from "next/router";

import { NewGrid } from "@/components/new-grid";
import { NoSearchResult, SearchText, SearchTitle } from "./ListingPage.styled";

// prettier-ignore
type TLeftSection = TListingLeftSection &
  TComponentWithSectionHeading &
  TComponentWithPagination &
  Pick<TSectionWithArticles, "leftSectionArticles" | "noResultArticles"> &
  TComponentWithTagVariant;

export const LeftSection: FC<TLeftSection> = (props) => {
  const router = useRouter();
  return (
    <>
      {props.showSearchTitle ? (
        <SearchTitle>
          {props.searchTitleConfig!.text}{" "}
          <SearchText>{router.query.s}</SearchText>
        </SearchTitle>
      ) : props.headingConfig?.show ? (
        props.sectionHeadingComponent
      ) : null}
      {props.showSearchTitle && !props.leftSectionArticles.length ? (
        <>
          <NoSearchResult>
            {`No result found for "${router.query.s}". Please try another search.`}
          </NoSearchResult>
          {props.sectionHeadingComponent}
          <NewGrid
            config={props.config}
            styleConfig={props.styleConfig}
            tagVariant={props.tagVariant}
            articles={props.noResultArticles || []}
            imageSizes={props.config.imageSizes}
          />
        </>
      ) : null}
      {props.leftSectionArticles.length ? (
        <>
          <NewGrid
            config={props.config}
            styleConfig={props.styleConfig}
            tagVariant={props.tagVariant}
            articles={props.leftSectionArticles}
            imageSizes={props.config.imageSizes}
          />
          {props.showPagination ? props.paginationComponent : null}
        </>
      ) : null}
    </>
  );
};
