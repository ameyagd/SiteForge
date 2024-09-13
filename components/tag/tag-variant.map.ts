import type { IStyledComponent } from "styled-components";
import type { Substitute } from "styled-components/dist/types";
import type { TTagProps } from "./tag.type";

import {
  BaseTag,
  DotTag,
  LongDashTag,
  ShortDashTag,
  ShortUnderlineTag,
  TTag,
} from "./Tag.styled";

type TMap = Record<
  TTagProps["variant"],
  IStyledComponent<
    "web",
    Substitute<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >,
      TTag
    >
  >
>;

export const tagVariantMap: TMap = {
  default: BaseTag,
  dot: DotTag,
  "long-dash": LongDashTag,
  "short-dash": ShortDashTag,
  "short-underline": ShortUnderlineTag,
};
