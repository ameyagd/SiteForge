import type { TCustomStyles } from "@/types";

import styled from "styled-components";

import { SiteSection, SectionInnerContainer } from "../common";
import { NavBreadcrumb } from "../common/breadcrumb/Breadcrumb.styled";
import { BaseContainer } from "../common/static-page-header/StaticPageHeader.styled";

export const Section = styled(SiteSection)`
  & > ${BaseContainer} {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
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

// prettier-ignore
export const ContentInnerContainer = styled(SectionInnerContainer)<TCustomStyles>`
  padding-top: max(
    50px,
    var(--heading-margin-bottom),
    var(--heading-margin-top)
  );
  ${(props) => props.$customstyles}
`;

export const ContentContainer = styled.div<TCustomStyles>`
  margin-block: -16px;
  p {
    margin-block: 16px;
    line-height: 1.5;
  }
  ${(props) => props.$customstyles}
`;
