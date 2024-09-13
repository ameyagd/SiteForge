import type { FC, PropsWithChildren } from "react";
import type { TStaticPageHeaderVariant } from "./static-page-header.type";

import { staticPageHeaderContainerMap } from "./static-page-header.map";

type TProps = TStaticPageHeaderVariant & PropsWithChildren;

export const StaticPageHeader: FC<TProps> = (props) => {
  const { variant, children } = props;
  const Container = staticPageHeaderContainerMap[variant];

  return <Container>{children}</Container>;
};
