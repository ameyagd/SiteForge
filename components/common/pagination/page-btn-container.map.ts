import type { IStyledComponent } from "styled-components";
import type { TPaginationVariant } from "./pagination.type";
import {
  DefaultBtnContainer,
  TypeFourBtnContainer,
  TypeOneBtnContainer,
  TypeThreeBtnContainer,
  TypeTwoBtnContainer,
} from "./Pagination.styled";

type TMap = Record<TPaginationVariant, IStyledComponent<"web", any>>;
export const pageBtnContainerMap: TMap = {
  default: DefaultBtnContainer,
  "type-1": TypeOneBtnContainer,
  "type-2": TypeTwoBtnContainer,
  "type-3": TypeThreeBtnContainer,
  "type-4": TypeFourBtnContainer,
};
