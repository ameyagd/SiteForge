import type { TCardData } from "./new-card.type";

/* 
  ◾Card Font Sizes (font-size | line-height)

  ◾Tag
    ▪️ small: 14px | 21px
    ▪️ medium: 14px | 21px
    ▪️ large: 14px | 21px
  ◾Title
    ▪️ small: 20px | 33px
    ▪️ medium: 22px | 36px
    ▪️ large: 24px | 36px 
  ◾Description
    ▪️ small: 16px | 24px
    ▪️ medium: 16px | 28px
    ▪️ large: 16px | 28px
*/

export type TCardElementWithLineHeight = "title" | "description";

// prettier-ignore
export const columnCardImgHeightMap: Record<TCardData["config"]["size"], number> = {
  sm: 176,
  md: 200,
  lg: 300,
};

// prettier-ignore
export const columnCardBgImgHeightMap: Record<TCardData["config"]["size"], number> = {
  sm: 300,
  md: 350,
  lg: 400,
};

// prettier-ignore
export const rowCardImgDimensionMap: Record<
  TCardData["config"]["size"],
  { maxWidth: number; aspectRatio: number }
> = {
  sm: { maxWidth: Math.round((3 / 12) * 100), aspectRatio: 1 },
  md: { maxWidth: Math.round((5 / 12) * 100), aspectRatio: 2 },
  lg: { maxWidth: Math.round((5 / 12) * 100), aspectRatio: 2 },
};
