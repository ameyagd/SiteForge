import styled, { css } from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

export const Container = styled.div`
  --layout-gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const MainContentContainer = styled.div<{ $hasRightSection: boolean }>`
  ${(props) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      margin-inline: calc(-1 * var(--layout-gap));

      & > div:first-child {
        --max-width: calc((${props.$hasRightSection ? 8 : 12}) / 12 * 100%);
      }
      & > div:last-child {
        --max-width: calc((${props.$hasRightSection ? 4 : 0}) / 12 * 100%);
      }

      @media ${QUERIES.tabletAndBelow} {
        gap: 24px;
        & > div:first-child {
          --max-width: 100%;
        }
        & > div:last-child {
          --max-width: ${props.$hasRightSection ? "100%" : 0};
        }
      }

      & > div {
        flex: 1 0 var(--max-width);
        max-width: var(--max-width);

        & > * {
          margin-inline: var(--layout-gap);
        }
      }
    `;
  }}
`;
