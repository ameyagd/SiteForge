import type {
  TCardUnit,
  TComponentWithImageSizes,
  TComponentWithLimitedArticleData,
  TComponentWithTagVariant,
  TComponentWithTextColor,
  TConfigKeyAndId,
  TContentDisplayOptions,
  TRecursivePartial,
  TWithHeadingTextConfig,
} from "@/types";
import type { TCardData } from "../new-card/new-card.type";

type TGridProps = {
  cardShadow: TCardUnit;
  cardRoundness: TCardUnit;
  cardCount: number;
  cardSize: TCardData["config"]["size"];
  cardType: TCardData["config"]["type"];
  imageType: TCardData["config"]["imgType"];
} & TContentDisplayOptions;

type TGridElements = {
  gridOuterWrapper: string;
  gridWrapper: string;
};

type TGridStyleConfig = {
  gridStyleConfig?: TRecursivePartial<TGridElements>;
  cardStyleConfig?: TCardData["styleConfig"];
};

// prettier-ignore
export type TGridData = 
  & TComponentWithTagVariant
  & TComponentWithImageSizes
  & TComponentWithLimitedArticleData
  & {
    config: TGridProps;
    styleConfig?: TGridStyleConfig;
  };

type TGridTemplateId =
  | "sm-row-card-layout" // 4 cards - 2 row
  | "sm-col-card-layout" // 4 cards - 1 row
  | "md-col-card-layout" // 3 cards - 1 rows
  | "md-col-bgimg-card-layout" // 6 cards - 2 rows
  | "lg-col-card-layout" // 2 cards - 1 row
  | "md-row-card-layout"; // 4 cards - 2 row

// prettier-ignore
export type TGridStoreConfig = 
  & TGridData["config"]
  & TWithHeadingTextConfig
  & TComponentWithTextColor
  & TComponentWithImageSizes
  & TConfigKeyAndId<TGridTemplateId>;
