import type { TCustomStyles } from "@/types";
import styled, { css } from "styled-components";

import { NavBreadcrumb } from "@/components/common/breadcrumb/Breadcrumb.styled";
import { BaseContainer } from "@/components/common/static-page-header/StaticPageHeader.styled";
import { SectionInnerContainer } from "@/components/common";

type TSection = { $textColor: string } & TCustomStyles;

export const Section = styled.section<TSection>`
  ${(props) => {
    return css`
      --text-color: ${props.$textColor};
      position: relative;

      & > ${BaseContainer} {
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      ${props.$customstyles}
    `;
  }}
`;

export const HeaderInnerContainer = styled(SectionInnerContainer)`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;

  & ${NavBreadcrumb} {
    position: absolute;
    top: 50px;
  }
`;

export const InnerContainer = styled.div<TCustomStyles>`
  display: flex;
  justify-content: space-between;
  ${({ $customstyles }) => $customstyles}
`;

export const Container = styled(InnerContainer)`
  flex-direction: column;
`;
