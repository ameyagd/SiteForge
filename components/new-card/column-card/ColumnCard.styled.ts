import type { TCustomStyles } from "@/types";
import type { TCardData } from "../new-card.type";

import styled, { css } from "styled-components";

import { columnCardBgImgHeightMap } from "../card.meta";
import { getTruncateTextCss } from "@/helpers/css-helpers";

import Image from "next/image";
import { BaseTag } from "@/components/tag/Tag.styled";

type TPictureDimension = {
  $height: number;
} & TCustomStyles;

type TWithImageMeta = {
  $imageType: TCardData["config"]["imgType"];
  $cardSize: TCardData["config"]["size"];
};

type TTitle = Pick<TWithImageMeta, "$cardSize"> & TCustomStyles;

export const Title = styled.h3<TTitle>`
  font-weight: 700;
  font-size: var(--card-title-font-size); // src: styles.css
  color: var(--black);
  transition: color 300ms ease;
  ${(props) => {
    return css`
      --line-count: ${props.$cardSize === "sm" ? 3 : 2};
      ${getTruncateTextCss()};
      ${props.$customstyles};
    `;
  }}
`;

export const Description = styled.p<TCustomStyles>`
  font-weight: 400;
  font-size: var(--card-description-size); // src: styles.css
  color: var(--black);
  --line-count: 3;
  ${(props) => {
    return css`
      ${getTruncateTextCss(1.75)};
      ${props.$customstyles};
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

export const Picture = styled.picture<TPictureDimension>`
  width: calc(100% + 1px);
  height: ${(props) => `${props.$height}px`};
  overflow: hidden;
  position: relative;
  ${(props) => props.$customstyles}
`;

export const BgPicture = styled.picture<TCustomStyles>`
  position: absolute; // relative parent is "Wrapper"
  inset: 0;
  height: calc(100% + 1px);
  width: calc(100% + 1px);
  z-index: 0;
  overflow: hidden;
  background-color: var(--section-bg-color);
  ${(props) => props.$customstyles}
`;

export const ContentWrapper = styled.div<TCustomStyles & TWithImageMeta>`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
  ${(props) => {
    if (props.$imageType === "background") {
      return css`
        margin: ${props.$cardSize === "sm" ? "10px" : "20px"};
        padding: 16px;
        border-radius: var(--card-roundness);
        background-image: linear-gradient(
          103deg,
          hsla(0deg, 0%, 0%, 0.8) 0%,
          hsla(0deg, 0%, 0%, 0.4) 100%
        );
        & ${Title}, & ${Description}, & ${BaseTag} {
          color: hsl(0deg, 0%, 100%);
        }
      `;
    }
    return "";
  }}
  ${(props) => props.$customstyles}
`;

export const Wrapper = styled.article<TCustomStyles>`
  ${(props) => props.$customstyles}
`;

export const InnerWrapper = styled.div<TCustomStyles & TWithImageMeta>`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  background-color: hsl(0deg, 0%, 100%);
  border: 1px solid var(--border-color);
  border-radius: var(--card-roundness);
  box-shadow: var(--card-shadow);
  position: relative;
  cursor: pointer;
  margin: var(--card-gap); // --card-gap src: NewGrid.styled.ts
  height: ${(props) => {
    return props.$imageType === "default"
      ? "auto"
      : `${columnCardBgImgHeightMap[props.$cardSize]}px`;
  }};

  &:hover ${CrdImage} {
    transform: scale(1.2);
  }

  ${(props) => {
    if (props.$imageType === "default") {
      return css`
        &:hover ${Title} {
          color: var(--primary-color);
        }
      `;
    }
    return "";
  }}
  ${(props) => props.$customstyles}
`;
