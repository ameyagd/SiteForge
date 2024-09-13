import styled from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

import { getTruncateTextCss } from "@/helpers/css-helpers";

import { SiteSection, SectionInnerContainer } from "@/components/common";
import { BaseContainer } from "@/components/common/static-page-header/StaticPageHeader.styled";
import { ArticleTitle } from "../styles/Common.styled";

import Image from "next/image";

export const Section = styled(SiteSection)`
  & ${BaseContainer} {
    height: 460px;
    position: relative;
  }
`;

export const InnerContainer = styled(SectionInnerContainer)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Header = styled.div`
  --basis: calc(7 / 12 * 100%);
  flex: 1 0 var(--basis);
  max-width: var(--basis);
  z-index: 1;
  background-color: var(--section-bg-color);
  border-radius: var(--global-card-roundness);

  & ${ArticleTitle} {
    --line-count: 4;
    ${getTruncateTextCss(1.5, false)};
    font-weight: 700 !important;
    margin-top: 24px;
  }

  @media ${QUERIES.tabletAndBelow} {
    --basis: calc(6 / 12 * 100%);
  }

  @media ${QUERIES.mobileAndBelow} {
    --basis: 100%;
    padding: 24px;
    z-index: 1;
  }
`;

export const ImageWrapper = styled.picture`
  --basis: calc(5 / 12 * 100%);
  flex: 1 0 var(--basis);
  max-width: var(--basis);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
    background: linear-gradient(
      to right,
      var(--section-bg-color) 0%,
      hsla(var(--section-bg-color-raw-hsl) / 0.7) 40%,
      transparent 80%
    );
  }

  @media ${QUERIES.tabletAndBelow} {
    --basis: calc(6 / 12 * 100%);
  }

  @media ${QUERIES.mobileAndBelow} {
    --basis: 100%;
    z-index: 0;

    &::before {
      background: revert;
    }
  }
`;

export const T1Image = styled(Image)`
  object-fit: cover;
`;
