import type { TGridData } from "./new-grid.type";

import { css } from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

export function getCardWidthCssVariables(
  cardType: TGridData["config"]["cardType"],
  cardSize: TGridData["config"]["cardSize"]
) {
  if (cardType === "column") {
    switch (cardSize) {
      case "sm":
        return css`
          --card-width: ${(3 / 12) * 100}%;
          @media ${QUERIES.tabletAndBelow} {
            --card-width: ${(6 / 12) * 100}%;
          }
          @media ${QUERIES.mobileAndBelow} {
            --card-width: ${(12 / 12) * 100}%;
          }
        `;
      case "md":
        return css`
          --card-width: ${(4 / 12) * 100}%;
          @media ${QUERIES.tabletAndBelow} {
            --card-width: ${(6 / 12) * 100}%;
          }
          @media ${QUERIES.mobileAndBelow} {
            --card-width: ${(12 / 12) * 100}%;
          }
        `;
      case "lg":
        return css`
          --card-width: ${(6 / 12) * 100}%;
          @media ${QUERIES.tabletAndBelow} {
            --card-width: ${(12 / 12) * 100}%;
          }
        `;
    }
  }
  if (cardType === "row") {
    return css`
      --card-width: ${(12 / 12) * 100}%;
    `;
  }
}
