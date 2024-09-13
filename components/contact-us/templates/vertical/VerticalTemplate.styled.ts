import type { TCustomStyles } from "@/types";

import styled, { css } from "styled-components";

import { SectionInnerContainer } from "@/components/common";
import { NavBreadcrumb } from "@/components/common/breadcrumb/Breadcrumb.styled";
import { BaseHeaderWrapper } from "@/components/section-heading/SectionHeading.styled";
import { QUERIES } from "@/helpers/breakpoints";
import { BaseContainer } from "@/components/common/static-page-header/StaticPageHeader.styled";

type TSection = { $textColor: string } & TCustomStyles;

export const Section = styled.section<TSection>`
  ${(props) => {
    return css`
      --text-color: ${props.$textColor};
      position: relative;

      ${props.$customstyles}
    `;
  }}
`;

export const HeaderInnerContainer = styled(SectionInnerContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  & ${BaseHeaderWrapper} {
    width: 50%;
    max-width: calc(50% - 24px);
    padding-right: 24px;
  }

  & ${NavBreadcrumb} {
    position: absolute;
    top: 50px;
  }

  @media ${QUERIES.tabletAndBelow} {
    & ${BaseHeaderWrapper} {
      text-align: center;
      width: 100%;
      max-width: revert;
      padding-right: revert;
    }
  }
`;

export const TemplateContainer = styled.div`
  min-height: 100%;
  & > ${BaseContainer} {
    height: 400px;
    width: 100%;
  }
`;

export const InnerContainer = styled(SectionInnerContainer)`
  position: relative;
`;

export const ContentContainer = styled.div<TCustomStyles>`
  --padding: 50px;
  --width: 600px;
  --margin-top: -300px;
  width: var(--width);
  padding: var(--padding);
  background-color: hsl(0deg, 0%, 100%);
  border-radius: var(--global-card-roundness);
  margin-top: var(--margin-top);
  margin-bottom: 87px; /* distance between header and form in top */
  float: right;

  @media ${QUERIES.tabletAndBelow} {
    position: revert;
    --width: 100%;
    --margin-top: -50px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --padding: 24px;
  }
  ${(props) => props.$customstyles}
`;
