import type { TCustomStyles } from "@/types";
import type { TCardData } from "../new-card.type";

import styled, { css } from "styled-components";

import { getTruncateTextCss } from "@/helpers/css-helpers";
import { rowCardImgDimensionMap } from "../card.meta";
import Image from "next/image";

type TWithCardSize = {
  $cardSize: TCardData["config"]["size"];
};

type TWithCardInfo = TWithCardSize & {
  $showImage: boolean;
};

export const Title = styled.h3<TCustomStyles>`
  font-weight: 700;
  font-size: var(--card-title-font-size); // src: styles.css
  color: var(--black);
  transition: color 300ms ease;
  ${(props) => {
    return css`
      --line-count: 2;
      ${props.$customstyles}
      ${getTruncateTextCss()};
    `;
  }}
`;

export const Description = styled.p<TCustomStyles>`
  font-weight: 400;
  font-size: var(--card-description-size); // src: styles.css
  color: var(--black);
  ${(props) => {
    return css`
      --line-count: 2;
      ${props.$customstyles}
      ${getTruncateTextCss(1.75)};
    `;
  }}
`;

export const CrdImage = styled(Image)<TCustomStyles>`
  display: block;
  height: 100%;
  width: 100%;
  transition: transform 300ms ease;
  object-fit: cover;
  object-position: top center;
  will-change: transform;
  ${(props) => props.$customstyles}
`;

export const Picture = styled.picture<TWithCardSize & TCustomStyles>`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  ${(props) => {
    return css`
      ${props.$customstyles}
      width: ${rowCardImgDimensionMap[props.$cardSize].maxWidth}%;
      aspect-ratio: 2;
    `;
  }}
`;

// prettier-ignore
export const ContentWrapper = styled.div<TCustomStyles & TWithCardInfo>`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
  ${(props) => {
    if (!props.$showImage) {
      return props.$customstyles;
    }
    return css`
      ${props.$customstyles}
      flex-basis: calc(${100 - rowCardImgDimensionMap[props.$cardSize].maxWidth}% - 40px);
      max-width: calc(${100 - rowCardImgDimensionMap[props.$cardSize].maxWidth}% - 40px);
    `;
  }}
`;

export const Wrapper = styled.article<TCustomStyles>`
  ${(props) => props.$customstyles}
`;

export const InnerWrapper = styled.div<TCustomStyles & TWithCardSize>`
  display: flex;
  overflow: hidden;
  background-color: hsl(0deg, 0%, 100%);
  border: 1px solid var(--border-color);
  border-radius: var(--card-roundness);
  box-shadow: var(--card-shadow);
  margin: var(--card-gap); // --card-gap src: NewGrid.styled.ts
  cursor: pointer;

  &:hover ${Title} {
    color: var(--primary-color);
  }

  &:hover ${CrdImage} {
    transform: scale(1.2);
  }
  ${(props) => props.$customstyles}
`;
