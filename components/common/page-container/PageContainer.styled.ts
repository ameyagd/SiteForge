import type { TPageContainer } from "./page-container.type";

import styled, { css } from "styled-components";
import { colord } from "colord";

import { getRawHSLColor } from "@/helpers/text-color";
import { cardRoundnessMap } from "@/components/grid";

type _TPageContainer = Omit<TPageContainer, "children">;

type TContainer = {
  [K in keyof _TPageContainer as `$${K}`]: _TPageContainer[K];
};

export const Container = styled.div<TContainer>`
  ${(props) => {
    return css`
      --app-max-width: ${props.$maxWidth}px;
      --app-horizontal-padding: ${props.$appHorizontalPadding}px;
      --heading-margin-top: ${props.$marginTop}px;
      --heading-margin-bottom: ${props.$marginBottom}px;
      --primary-color: ${props.$primary};
      --secondary-color: ${props.$secondary};
      --primary-color-raw-hsl: ${getRawHSLColor(props.$primary)};
      --secondary-color-raw-hsl: ${getRawHSLColor(props.$secondary)};
      --section-bg-color: ${props.$backgroundColor};
      --section-bg-color-raw-hsl: ${getRawHSLColor(props.$backgroundColor)};
      --global-card-roundness: ${cardRoundnessMap.get(props.$cardRoundness)}px;
      --global-card-shadow: ${props.$cardShadow};
      --primary-text-color: ${colord(props.$primary).isDark()
        ? "hsl(0deg, 0%, 100%)"
        : "hsl(0deg, 0%, 0%)"};
      --secondary-text-color: ${colord(props.$secondary).isDark()
        ? "hsl(0deg, 0%, 100%)"
        : "hsl(0deg, 0%, 0%)"};
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    `;
  }}
`;
