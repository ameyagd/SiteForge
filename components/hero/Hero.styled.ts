import type { TCustomStyles } from "@/types";
import type { THeroConfig } from "./hero-preview.config.type";

import { styled, css } from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

import { getTruncateTextCss } from "@/helpers/css-helpers";
import { filterShadowMap, cardRoundnessMap } from "../grid";

import Image from "next/image";
import Link from "next/link";
import { SiteSection, SectionInnerContainer } from "../common";

type THeroSection = {
  $roundness?: THeroConfig["roundness"];
  $shadow?: THeroConfig["shadow"];
};

type TPreventRedirect = {
  $preventRedirect?: boolean;
};

export const Section = styled(SiteSection)<THeroSection>`
  ${(props) => {
    return css`
      --hero-shadow: ${filterShadowMap.get(props.$shadow || "none")};
      --hero-roundness: ${cardRoundnessMap.get(props.$roundness || "none")}px;
      --gap: 15px;
      min-height: 700px;
      @media ${QUERIES.tabletAndBelow} {
        min-height: inherit;
      }
    `;
  }}
`;

// prettier-ignore
export const Container = styled(SectionInnerContainer)<TCustomStyles & { $showBg: boolean }>`
  min-height: inherit;
  &::before {
    background-color: ${(props) => props.$showBg ? "var(--section-bg-color)" : "revert"};
  }
  @media ${QUERIES.tabletAndBelow} {
    flex-direction: column-reverse;
  }
  ${({ $customstyles }) => $customstyles}
`;

export const InnerContainer = styled.div<TCustomStyles>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: inherit;
  --first-child-column: 5;
  --second-child-column: 7;
  & > div {
    flex: 0 0 auto;
    max-width: 100%;
    &:first-child {
      width: calc((var(--first-child-column) / 12) * 100%);
    }
    &:last-child {
      width: calc((var(--second-child-column) / 12) * 100%);
    }
  }

  @media ${QUERIES.tabletAndBelow} {
    --first-child-column: 12;
    --second-child-column: 12;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const ContentDiv = styled.div<TCustomStyles>`
  margin: var(--gap);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  @media ${QUERIES.tabletAndBelow} {
    padding-block: 12px;
    flex: none;
    max-width: 100%;
  }
  ${({ $customstyles }) => $customstyles}
`;

export const HeroHeading = styled(Link)<TCustomStyles & TPreventRedirect>`
  ${(props) => {
    return css`
      --line-count: 2;
      font-size: clamp(30px, 2vw, 50px);
      font-weight: 700;
      margin-top: 24px;
      color: var(--text-color);
      transition: color 300ms ease;
      cursor: ${props.$preventRedirect ? "default" : "pointer"};
      ${getTruncateTextCss(1.2, false)}

      ${!props.$preventRedirect
        ? css`
            &:hover {
              color: var(--primary-color);
            }
          `
        : ""}

      ${props.$customstyles}
    `;
  }}
`;

export const HeroDescription = styled.p<TCustomStyles>`
  --line-count: 3;
  margin-top: 24px;
  color: var(--text-color);
  ${getTruncateTextCss(1.75)}

  ${({ $customstyles }) => $customstyles}
`;

export const RedirectLink = styled.a<TCustomStyles & TPreventRedirect>`
  ${(props) => {
    return css`
      --height: 50px;
      display: inline-block;
      margin-top: 50px;
      height: var(--height);
      line-height: var(--height);
      padding-inline: 30px;
      border-radius: 10px;
      color: var(--primary-text-color);
      background-color: var(--primary-color);
      transition: background-color 300ms ease;
      font-size: calc((18 / 16) * 1rem);
      font-weight: 700;
      text-transform: uppercase;
      cursor: ${props.$preventRedirect ? "default" : "pointer"};

      ${!props.$preventRedirect
        ? css`
            &:hover {
              background-color: var(--secondary-color);
              color: var(--secondary-text-color);
            }
          `
        : ""}

      ${props.$customstyles}
    `;
  }}
`;

export const Picture = styled.picture<TCustomStyles>`
  --picture-height: 540px;
  --picture-width-base: 100%;
  position: relative;
  display: block;
  margin: var(--gap);
  height: var(--picture-height);
  width: calc(var(--picture-width-base) - (var(--gap) * 2));
  filter: drop-shadow(var(--hero-shadow));

  @media ${QUERIES.mobileAndBelow} {
    --picture-height: 240px;
  }
  ${({ $customstyles }) => $customstyles}
`;

export const HeroImage = styled(Image)<TCustomStyles>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: var(--hero-roundness);
  ${({ $customstyles }) => $customstyles}
`;
