import type { FC } from "react";
import type { TPrivacyPolicy } from "../PrivacyPolicy";

import { ContentContainer } from "./Template.styled";

const Template3: FC<Omit<TPrivacyPolicy, "breadcrumbVariant">> = (props) => {
  return (
    <>
      {props.sectionHeadingComponent}
      <ContentContainer
        $customstyles={props.styleConfig?.pageText}
        dangerouslySetInnerHTML={{ __html: props.contentMarkup }}
      />
      {props.addressComponent}
    </>
  );
};

export default Template3;
