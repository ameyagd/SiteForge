import type { TGridData } from "./new-grid.type";

type TGridCardSize = Record<
  TGridData["config"]["cardType"],
  Record<TGridData["config"]["cardSize"], string>
>;

export const gridCardSizeMap: TGridCardSize = {
  column: {
    sm: `${(3 / 12) * 100}%`, // col-3
    md: `${(4 / 12) * 100}%`, // col-4
    lg: `${(6 / 12) * 100}%`, // col-6
  },
  row: {
    sm: "0%",
    md: "0%",
    lg: "0%",
  },
};
