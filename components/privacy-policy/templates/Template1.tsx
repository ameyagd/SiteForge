import type { FC } from "react";
import type { TPrivacyPolicy } from "../PrivacyPolicy";

import { ContainerImg, ContentContainer, Picture } from "./Template.styled";

const Template1: FC<Omit<TPrivacyPolicy, "breadcrumbVariant">> = (props) => {
  return (
    <>
      {props.sectionHeadingComponent}
      <div>
        <Picture $customstyles={props.styleConfig?.imageContainer}>
          <ContainerImg
            $customstyles={props.styleConfig?.img}
            src={`/assets/${props.config.imgName}`}
            alt="Text"
            height={450}
            width={364}
          />
        </Picture>
        <ContentContainer
          $customstyles={props.styleConfig?.pageText}
          dangerouslySetInnerHTML={{ __html: props.contentMarkup }}
        />
        {props.addressComponent}
      </div>
    </>
  );
};

export default Template1;
