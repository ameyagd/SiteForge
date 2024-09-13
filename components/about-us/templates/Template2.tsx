import type { FC } from "react";
import type { TAboutUs } from "../AboutUs";

import { PageTextContainer } from "@/components/common/PageTextContainer";
import { ContainerImg, Picture } from "./Template.styled";

type TProps = Omit<TAboutUs, "breadcrumbVariant" | "textColor">;

const Template2: FC<TProps> = (props) => {
  return (
    <>
      {props.config.showImage ? (
        <Picture $customstyles={props.styleConfig?.imageContainer}>
          <ContainerImg
            $customstyles={props.styleConfig?.img}
            src={`/assets/${props.config.imgName}`}
            alt="About Us"
            width={1400}
            height={320}
          />
        </Picture>
      ) : null}
      {props.sectionHeadingComponent}
      <PageTextContainer
        $customstyles={props.styleConfig?.pageText}
        dangerouslySetInnerHTML={{ __html: props.config.text }}
      />
    </>
  );
};

export default Template2;
