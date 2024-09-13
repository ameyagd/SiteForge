import type {
  THeadingTextComponentConfig,
  THeadingTextGlobalConfig,
  TTextConfig,
} from "@/types";

import styled, { css } from "styled-components";

type TTextStyle = {
  $textStyle: TTextConfig["textStyle"];
};

type THeaderWrapperProps = TTextStyle & {
  $ignoreSiteMargins: THeadingTextComponentConfig["ignoreSiteMargins"];
};

type TMultiLineH2Props = {
  $topConfig: THeadingTextGlobalConfig["topText"];
  $bottomConfig?: THeadingTextGlobalConfig["bottomText"];
  $gapBetweenText: THeadingTextGlobalConfig["gapBetweenText"];
};

type TFontSize = {
  $fontSize: number;
};

type TNormalH2Props = TFontSize & TTextStyle;

export const BaseH2 = styled.h2`
  flex-grow: 1;
  font-size: clamp(1.8rem, 3vw, 2rem);
`;

export const NormalH2 = styled(BaseH2)<TNormalH2Props>`
  font-weight: ${({ $textStyle }) => ($textStyle === "bold" ? 700 : 400)};
`;

export const SemiboldH2 = styled(BaseH2)<TFontSize>`
  font-weight: 400;

  & > strong {
    font-weight: 700;
  }
`;

export const MultilineH2 = styled(BaseH2)<TMultiLineH2Props>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gapBetweenText }) => `${$gapBetweenText}px`};

  & > span:first-child {
    font-size: ${({ $topConfig }) => `${$topConfig.fontSize}px !important`};
    font-weight: ${({ $topConfig }) =>
      $topConfig.textStyle === "bold" ? "700 !important" : 400};
  }
  & > span:last-child {
    font-size: ${({ $bottomConfig }) => {
      return `${$bottomConfig ? $bottomConfig.fontSize + "px" : null}`;
    }};
    font-weight: ${({ $bottomConfig }) => {
      return $bottomConfig
        ? $bottomConfig.textStyle === "bold"
          ? 700
          : 400
        : 400;
    }};
  }
`;

export const RedirectLink = styled.a<TFontSize>`
  position: relative;
  display: block;
  margin-left: auto;
  flex-shrink: 0;
  font-size: ${({ $fontSize }) => $fontSize + "px"};
  font-weight: 500;
  transition: color 300ms ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: 0;
    right: 0;
    transform: scale(0);
    transform-origin: center left;
    height: 1.5px;
    background-color: currentColor;
    transition: transform 250ms ease;
    will-change: transform;
  }
  &:hover::after {
    transform: scale(1);
  }
  &:hover {
    color: var(--primary-color);
  }
`;

export const BaseHeaderWrapper = styled.div<THeaderWrapperProps>`
  ${(props) => {
    // prettier-ignore
    return css`
      margin-top: ${
        props.$ignoreSiteMargins === "both" ||
        props.$ignoreSiteMargins === "top"
          ? 0
          : "var(--heading-margin-top)"
      };
      margin-bottom: ${
        props.$ignoreSiteMargins === "both" ||
        props.$ignoreSiteMargins === "bottom"
          ? 0
          : "var(--heading-margin-bottom)"
      };
    `;
  }}
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--text-color);
`;

export const TypeOneHeaderWrapper = styled(BaseHeaderWrapper)`
  ${(props) => {
    if (props.$textStyle === "semi-bold") {
      return css`
        & > ${BaseH2} > *:first-child {
          position: relative;
          padding-left: 25px;

          &::before {
            content: "";
            position: absolute;
            background-color: hsla(var(--primary-color-raw-hsl) / 0.3);
            width: 70px;
            height: 100%;
            border-radius: 35px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `;
    } else {
      return css`
        & > ${BaseH2} {
          position: relative;
          padding-left: 25px;

          &::before {
            content: "";
            position: absolute;
            background-color: hsla(var(--primary-color-raw-hsl) / 0.3);
            width: 70px;
            height: 100%;
            border-radius: 35px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `;
    }
  }}
`;

export const TypeTwoHeaderWrapper = styled(BaseHeaderWrapper)`
  ${(props) => {
    if (props.$textStyle === "semi-bold") {
      return css`
        & > ${BaseH2} > *:first-child {
          position: relative;
          padding-left: 15px;

          &::before {
            content: "";
            position: absolute;
            background-color: hsla(var(--primary-color-raw-hsl) / 0.3);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `;
    } else {
      return css`
        & > ${BaseH2} {
          position: relative;
          padding-left: 15px;

          &::before {
            content: "";
            position: absolute;
            background-color: hsla(var(--primary-color-raw-hsl) / 0.3);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `;
    }
  }}
`;