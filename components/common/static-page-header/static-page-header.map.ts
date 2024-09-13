import type { TStaticPageHeaderVariant } from "./static-page-header.type";
import type { TBaseContainer } from "./StaticPageHeader.styled";

import {
  DefaultContainer,
  TypeOneContainer,
  TypeThreeContainer,
  TypeTwoContainer,
} from "./StaticPageHeader.styled";

type TMap = Record<TStaticPageHeaderVariant["variant"], TBaseContainer>;

export const staticPageHeaderContainerMap: TMap = {
  default: DefaultContainer,
  "type-1": TypeOneContainer,
  "type-2": TypeTwoContainer,
  "type-3": TypeThreeContainer,
};
