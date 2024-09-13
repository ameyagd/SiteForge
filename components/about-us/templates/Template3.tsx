import type { FC } from "react";
import type { TAboutUs } from "../AboutUs";

import { PageTextContainer } from "@/components/common/PageTextContainer";

type TProps = Omit<TAboutUs, "breadcrumbVariant" | "textColor">;

const Template3: FC<TProps> = (props) => {
  return (
    <>
      {props.sectionHeadingComponent}
      <PageTextContainer
        $customstyles={props.styleConfig?.pageText}
        dangerouslySetInnerHTML={{ __html: props.config.text }}
      />
    </>
  );
};

export default Template3;
