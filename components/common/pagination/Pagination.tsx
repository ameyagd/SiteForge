import type { FC } from "react";
import type { TAppConfig } from "@/types";
import type { TPageBaseURL, TPagination } from "./pagination.type";

import { useRouter } from "next/router";

import { getPageNumberList, getStartingIndex } from "./pagination.helper";

import { pageBtnContainerMap } from "./page-btn-container.map";
import {
  ArrowButton,
  BaseArrow,
  Container,
  Grow,
  PaginationButton,
  PaginationMessage,
} from "./Pagination.styled";

// prettier-ignore
type TProps = 
  & TPagination
  & TPageBaseURL
  & Pick<TAppConfig["globalConfig"], "paginationVariant">;

export const Pagination: FC<TProps> = (props) => {
  const startingIndex = getStartingIndex(
    props.currentPage,
    props.maxPagesToShow,
    props.totalPageCount
  );
  const pageNumberList = getPageNumberList(
    startingIndex,
    props.maxPagesToShow,
    props.totalPageCount
  );
  const PageBtnContainer = pageBtnContainerMap[props.paginationVariant];
  const router = useRouter();

  return (
    <Container aria-label="pagination">
      <Grow>
        <PaginationMessage>{props.infoText}</PaginationMessage>
      </Grow>
      <Grow>
        <PageBtnContainer>
          {props.currentPage > 1 ? (
            <li>
              <ArrowButton
                key="prev-btn"
                href={
                  // prettier-ignore
                  props.pageUrl === "search"
                    ? `/${props.pageUrl}?s=${router.query.s}&page=${props.currentPage - 1}`
                    : `/${props.pageUrl}?page=${props.currentPage - 1}`
                }
              >
                <BaseArrow />
              </ArrowButton>
            </li>
          ) : null}
          {pageNumberList.map((item) => (
            <li key={item.pageKey}>
              <PaginationButton
                aria-current={props.currentPage === item.pageNumber}
                href={
                  // prettier-ignore
                  props.pageUrl === "search"
                  ? `/${props.pageUrl}?s=${router.query.s}&page=${item.pageNumber}`
                  : `/${props.pageUrl}?page=${item.pageNumber}`
                }
                onClick={(e) => {
                  if (props.currentPage === item.pageNumber) e.preventDefault();
                }}
              >
                {item.pageNumber}
              </PaginationButton>
            </li>
          ))}
          {props.currentPage < props.totalPageCount ? (
            <li>
              <ArrowButton
                key="next-btn"
                href={
                  // prettier-ignore
                  props.pageUrl === "search"
                    ? `/${props.pageUrl}?s=${router.query.s}&page=${props.currentPage + 1}`
                    : `/${props.pageUrl}?page=${props.currentPage + 1}`
                }
              >
                <BaseArrow $direction="next" />
              </ArrowButton>
            </li>
          ) : null}
        </PageBtnContainer>
      </Grow>
    </Container>
  );
};
