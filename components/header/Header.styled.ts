import { QUERIES } from "@/helpers/breakpoints";
import type { TCustomStyles, TLogoStyles, TRecursivePartial } from "@/types";
import styled from "styled-components";

type THeaderContainer = TCustomStyles & { $isHeaderSticky?: boolean };

export const HeaderContainer = styled.header<THeaderContainer>`
  --shadow-color: 0deg 0% 63%;
  --shadow-elevation-medium: 0px 0.2px 0.3px hsl(var(--shadow-color) / 0),
    0px 2.5px 3.8px hsl(var(--shadow-color) / 0.35);
  z-index: 2;
  box-shadow: var(--shadow-elevation-medium);
  background-color: var(--header-bg-color, #fff);
  position: ${({ $isHeaderSticky }) => {
    return $isHeaderSticky ? "fixed" : "relative";
  }};
  ${({ $customstyles }) => $customstyles}

  ${(props) => {
    if (props.$isHeaderSticky) {
      return `left: 0; right: 0; top: 0;`;
    }
  }}
`;

export const InnerContainer = styled.div<TCustomStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--app-max-width);
  padding-block: 16px;
  padding-inline: var(--app-horizontal-padding);
  margin: 0 auto;
  ${({ $customstyles }) => $customstyles}
`;

//#region Common Elements
export const ToggleButton = styled.button<TRecursivePartial<TLogoStyles>>`
  --dimension: 50px;

  display: grid;
  place-content: center;
  cursor: pointer;
  width: var(--dimension);
  height: var(--dimension);
  border-radius: 4px;
  background-color: var(--primary-color);

  ${({ $logoContainerStyles }) => $logoContainerStyles}

  & svg {
    height: 100%;
    width: 100%;
    ${({ $logoStyles }) => $logoStyles}
  }

  @media ${QUERIES.tabletAndBelow} {
    --dimension: 40px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --dimension: 32px;
  }
`;

export const BtnLogo = styled.span<{ $show: boolean }>`
  --dimension: 25px;

  display: ${(props) => (props.$show ? "block" : "none")};
  height: var(--dimension);
  width: var(--dimension);

  @media ${QUERIES.tabletAndBelow} {
    --dimension: 18px;
  }
`;
//#endregion
