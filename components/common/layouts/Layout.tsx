import type { FC } from "react";
import type { TLayoutConfig, TLayoutTemplateKey } from "./layout.type";

import { LayoutTemplate1 } from "./templates/LayoutTemplate1";

type TLayout = TLayoutConfig & { templateKey: TLayoutTemplateKey };

export const Layout: FC<TLayout> = (props) => {
  return (
    <>
      {props.templateKey === "template_1" ? (
        <LayoutTemplate1 {...props} />
      ) : null}
    </>
  );
};
