import type { FC } from "react";
import type { TPrivacyPolicy } from "../PrivacyPolicy";

import { ContainerImg, ContentContainer, Picture } from "./Template.styled";

const Template2: FC<Omit<TPrivacyPolicy, "breadcrumbVariant">> = (props) => {
  return (
    <>
      <Picture $customstyles={props.styleConfig?.imageContainer}>
        <ContainerImg
          $customstyles={props.styleConfig?.img}
          src={`/assets/${props.config.imgName}`}
          alt="Text"
          width={1080}
          height={456}
        />
      </Picture>
      {props.sectionHeadingComponent}
      <ContentContainer
        $customstyles={props.styleConfig?.pageText}
        dangerouslySetInnerHTML={{ __html: props.contentMarkup }}
      />
      {props.addressComponent}
    </>
  );
};

export default Template2;
