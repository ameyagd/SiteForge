import type { THeroStyleConfig } from "./hero-preview.style.type";

import { css } from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

export const defaultHeroStyleConfig: THeroStyleConfig = {
  id: "default",
  container: {
    section: css`
      padding-bottom: 0;
      @media ${QUERIES.mobileAndBelow} {
        padding-top: 0;
      }
    `.toString(),
    container: css`
      @media ${QUERIES.mobileAndBelow} {
        padding: 0;
      }
    `.toString(),
    innerContainer: css`
      position: relative;
      flex: 1;
      @media ${QUERIES.tabletAndBelow} {
        --first-child-column: 7;
      }
      @media ${QUERIES.mobileAndBelow} {
        --first-child-column: 12;
        flex-direction: column-reverse;
      }
    `.toString(),
  },
  content: {
    container: css`
      padding: 60px;
      background-color: var(--section-bg-color);
      border-radius: var(--hero-roundness);
      margin-block: calc(2 * var(--gap));
      @media ${QUERIES.tabletAndBelow} {
        padding: 24px;
      }
      @media ${QUERIES.mobileAndBelow} {
        margin-top: 50%;
        margin-bottom: -10px;
      }
    `.toString(),
    heading: `--line-count: 3;`,
    redirectLink: css`
      width: 100%;
      margin-top: 60px;
      text-align: center;
      @media ${QUERIES.tabletAndBelow} {
        margin-top: 42px;
      }
    `.toString(),
  },
  imageStyle: {
    container: css`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      max-width: 85%;
      height: 100%;
      z-index: -1;
      margin: 0;
      border-radius: var(--hero-roundness);

      @media ${QUERIES.tabletAndBelow} {
        height: calc(100% + 64px);
        margin: -32px 0;
      }

      @media ${QUERIES.mobileAndBelow} {
        left: 0;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-height: 70%;
        margin: 0;
        border-radius: revert;
      }
    `.toString(),
    imageSizes: {
      desktop: { value: "maxWidth - appHorizontalPadding", unit: "px" },
      tablet: { value: 80, unit: "vw" },
      phone: { value: 100, unit: "vw" },
    },
  },
};
