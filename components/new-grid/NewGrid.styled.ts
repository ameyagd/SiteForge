import type { TCustomStyles } from "@/types";
import type { TGridData } from "./new-grid.type";

import styled, { css } from "styled-components";

import { cardRoundnessMap, cardShadowMap } from "../grid";
import { getCardWidthCssVariables } from "./new-grid.helper";

type TBaseGridWrapper = {
  $cardSize: TGridData["config"]["cardSize"];
  $cardType: TGridData["config"]["cardType"];
  $cardRoundness: TGridData["config"]["cardRoundness"];
  $cardShadow: TGridData["config"]["cardShadow"];
} & TCustomStyles;

export const GridOuterWrapper = styled.div<TCustomStyles>`
  ${(props) => props.$customstyles}
`;

export const GridWrapper = styled.div<TBaseGridWrapper>`
  ${(props) => {
    return css`
      --card-gap: 15px;
      --card-roundness: ${cardRoundnessMap.get(props.$cardRoundness)}px;
      --card-shadow: ${cardShadowMap.get(props.$cardShadow)};
      ${getCardWidthCssVariables(props.$cardType, props.$cardSize)}
    `;
  }}

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
  margin: calc(-1 * (var(--card-gap)));

  ${(props) => props.$customstyles}
`;
