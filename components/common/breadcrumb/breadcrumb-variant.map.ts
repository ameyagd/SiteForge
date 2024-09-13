import type { IStyledComponent } from "styled-components";
import type { TBreadcrumbVariant } from "./breadcrumb.type";

import {
  DefaultBreadcrumbLI,
  TypeOneBreadcrumbLI,
  TypeTwoBreadcrumbLI,
  TypeThreeBreadcrumbLI,
  TypeFourBreadcrumbLI,
} from "./Breadcrumb.styled";

type TMap = Record<TBreadcrumbVariant, IStyledComponent<"web", any>>;

export const BreadcrumbLiMap: TMap = {
  default: DefaultBreadcrumbLI,
  "type-1": TypeOneBreadcrumbLI,
  "type-2": TypeTwoBreadcrumbLI,
  "type-3": TypeThreeBreadcrumbLI,
  "type-4": TypeFourBreadcrumbLI,
};
