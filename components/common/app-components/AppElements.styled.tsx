import type { TCardUnit, TCustomStyles } from "../../../types";

import { css, styled } from "styled-components";

import { QUERIES } from "../../../helpers/breakpoints";
import { filterShadowMap } from "@/components/grid";

import Link from "next/link";

type TSiteSection = {
  $showBg?: boolean;
  $withoutTopPadding?: boolean;
  $withoutBottomPadding?: boolean;
  $textColor?: string;
  $imageShadow?: TCardUnit;
} & TCustomStyles;

export const ElementContainer = styled.div`
  padding-left: 0.5rem /* 8px */;
  padding-right: 0.5rem /* 8px */;
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
  overflow: auto;
  max-height: calc(100vh - 48px - 12px - 2px - 91px);
`;

// prettier-ignore
export const SiteSection = styled.section<TSiteSection>`
  ${props => {
    return css`
      --text-color: ${props.$textColor};
      --hero-filter-shadow: ${props.$imageShadow ? filterShadowMap.get(props.$imageShadow) : ""};
      padding-top: ${props.$withoutTopPadding ? 0 : "50px"};
      padding-bottom: ${props.$withoutBottomPadding ? 0 : "50px"};
      background-color: ${props.$showBg ? "var(--section-bg-color)" : "revert"};
      ${props.$customstyles}
    `;
  }}
`;

export const SectionInnerContainer = styled.div`
  max-width: var(--app-max-width);
  margin: 0 auto;
  padding-inline: var(--app-horizontal-padding);
  /* padding-bottom: 32px; */
  @media ${QUERIES.tabletAndBelow} {
    padding-block: 20px;
  }
  @media ${QUERIES.mobileAndBelow} {
    padding-block: 12px;
  }
`;

export const CardWrapper = styled(Link)<TCustomStyles>`
  --gap: 8px;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: var(--card-roundness);
  box-shadow: var(--card-shadow);
  background-color: #fff;
  margin-block: var(--card-margin-block, 0);

  ${({ $customstyles }) => $customstyles}
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.div<TCustomStyles>`
  ${({ $customstyles }) => $customstyles}
`;

export const MonetizationSectionsContainer = styled.div<{
  $showBg: boolean;
  $textColor: string;
  $isHeaderSticky?: boolean;
}>`
  padding-block: 32px;
  flex-grow: 1;
  ${(props) => {
    return css`
      --text-color: ${props.$textColor};
      margin-top: ${props.$isHeaderSticky ? "82px" : "0px"};
      background-color: ${props.$showBg ? "var(--section-bg-color)" : "revert"};
    `;
  }}
`;

export const SectionsContainer = styled.main<{ $isHeaderSticky: boolean }>`
  margin-top: ${(props) => (props.$isHeaderSticky ? "82px" : "0px")};
  /* overflow: hidden; */
  flex-grow: 1;
`;
