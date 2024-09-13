import type { THeadingVariant } from "@/types";
import {
  BaseHeaderWrapper,
  TypeOneHeaderWrapper,
  TypeTwoHeaderWrapper,
} from "./SectionHeading.styled";

type TMap = Record<THeadingVariant, typeof BaseHeaderWrapper>;

export const headerWrapperMap: TMap = {
  default: BaseHeaderWrapper,
  "type-1": TypeOneHeaderWrapper,
  "type-2": TypeTwoHeaderWrapper,
};
