import type { FC } from "react";
import type { TTagProps } from "./tag.type";

import { tagVariantMap } from "./tag-variant.map";

export const Tag: FC<TTagProps> = (props) => {
  const TagComponent = tagVariantMap[props.variant];
  return (
    <TagComponent $variant={props.variant} $textColor={props.textColor}>
      {props.children}
    </TagComponent>
  );
};
