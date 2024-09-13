import { css, styled } from "styled-components";
import { QUERIES } from "@/helpers/breakpoints";

import Link from "next/link";

type TArrow = {
  $direction?: "prev" | "next";
};

const containerStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  margin-block: var(--layout-gap);
`;

export const Container = styled.nav`
  ${containerStyles}
  gap: var(--layout-gap);
`;

export const ButtonContainer = styled.ul`
  --placement: flex-end;
  ${containerStyles}
  gap: 12px;
  justify-content: var(--placement);

  @media ${QUERIES.mobileAndBelow} {
    --placement: flex-start;
  }
`;

export const Grow = styled.div`
  flex: 1 0 auto;
`;

export const PaginationMessage = styled.p`
  font-size: 14px;
  line-height: 21px;
`;

const btnStyles = css`
  --size: 40px;
  height: var(--size);
  min-width: var(--size);
  font-size: 14px;
  font-weight: 700;
  display: grid;
  place-content: center;
  cursor: pointer;
`;

export const PaginationButton = styled(Link)`
  ${btnStyles}
`;

export const ArrowButton = styled(Link)`
  ${btnStyles}
  background-color: var(--primary-color);
  color: var(--primary-text-color);
`;

export const BaseArrow = styled.span<TArrow>`
  ${({ $direction = "prev" }) => {
    return css`
      --dimension: 14px;
      --translate-x: ${$direction === "next" ? "-25%" : "25%"};
      --rotate: ${$direction === "next" ? "45deg" : "-135deg"};
    `;
  }}
  display: block;
  height: var(--dimension);
  width: var(--dimension);
  border-style: solid;
  border-color: currentColor;
  border-left: none;
  border-bottom: none;
  border-left-width: 0;
  border-bottom-width: 0;
  transform: translateX(var(--translate-x)) rotate(var(--rotate));
`;

//#region variant design
export const DefaultBtnContainer = styled(ButtonContainer)`
  & ${ArrowButton} {
    border-radius: var(--global-card-roundness);
    color: var(--primary-text-color) !important;
    & > ${BaseArrow} {
      border-width: 4px;
    }
  }
  & [aria-current="true"] {
    color: var(--primary-color);
  }
  & ${PaginationButton} {
    transition: color 300ms ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const TypeOneBtnContainer = styled(DefaultBtnContainer)`
  & ${PaginationButton}, & ${ArrowButton} {
    border-radius: 50%;
  }
  & ${ArrowButton} {
    color: var(--primary-text-color) !important;
  }
  & ${PaginationButton} {
    border: 1px solid;
    border-color: transparent;
    transition-property: border-color, color;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
  & [aria-current="true"] {
    border-color: var(--primary-color);
  }
`;

export const TypeTwoBtnContainer = styled(ButtonContainer)`
  & ${PaginationButton} {
    border-radius: 50%;
    background-color: transparent;
    transition-property: background-color, color;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover {
      background-color: var(--primary-color);
      color: var(--primary-text-color);
    }
  }
  & [aria-current="true"] {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }
  & ${ArrowButton} {
    --size: 24px;
    background-color: transparent !important;
    color: var(--text-color) !important;

    & > ${BaseArrow} {
      border-width: 2px;
    }
  }
`;

export const TypeThreeBtnContainer = styled(TypeTwoBtnContainer)`
  & ${PaginationButton} {
    border-radius: var(--global-card-roundness);
    transition-property: background-color, color;

    &:hover {
      background-color: hsl(var(--primary-color-raw-hsl) / 5%);
      color: var(--primary-color);
    }
  }
  & [aria-current="true"] {
    background-color: hsl(var(--primary-color-raw-hsl) / 5%);
    color: var(--primary-color);
  }
  & ${ArrowButton} {
    opacity: 0.5;
    transition-property: opacity, color;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover {
      opacity: 1;
      color: var(--primary-color) !important;
    }
  }
`;

export const TypeFourBtnContainer = styled(ButtonContainer)`
  & ${PaginationButton} {
    border-radius: var(--global-card-roundness);
    background-color: hsl(var(--primary-color-raw-hsl) / 5%);
    transition-property: background-color, color;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover {
      background-color: var(--primary-color);
      color: var(--primary-text-color);
    }
  }
  & [aria-current="true"] {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }
  & ${ArrowButton} {
    background-color: transparent !important;
    color: var(--text-color);
    opacity: 0.5;
    transition-property: opacity, color;

    &:hover {
      opacity: 1;
      color: var(--primary-color) !important;
    }

    & > ${BaseArrow} {
      border-width: 2px;
    }
  }
`;
//#endregion
