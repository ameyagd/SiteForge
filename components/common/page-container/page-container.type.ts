import type { PropsWithChildren } from "react";
import type { TAppConfig } from "@/types";

// prettier-ignore
export type TPageContainer = Pick<
  TAppConfig["globalConfig"],
  "cardRoundness" | "cardShadow"
> &
  Pick<
    TAppConfig["globalConfig"]["themeColors"],
    "primary" | "secondary" | "backgroundColor"
  > &
  Pick<TAppConfig["globalConfig"]["heading"], "marginTop" | "marginBottom"> &
  TAppConfig["globalConfig"]["layout"] &
  PropsWithChildren;
