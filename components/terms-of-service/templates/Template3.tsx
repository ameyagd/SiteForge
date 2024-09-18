import type { FC } from "react";
import type { TTermsOfService } from "../TermsOfService";

import { PageTextContainer } from "@/components/common/PageTextContainer";

type TProps = Omit<TTermsOfService, "breadcrumbVariant" | "textColor">;

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
