import type { FC } from "react";
import type { TTermsOfService } from "../TermsOfService";

import { PageTextContainer } from "@/components/common/PageTextContainer";
import { ContainerImg, Picture } from "./Template.styled";

type TProps = Omit<TTermsOfService, "breadcrumbVariant" | "textColor">;

const Template2: FC<TProps> = (props) => {
  return (
    <>
      {props.config.showImage ? (
        <Picture $customstyles={props.styleConfig?.imageContainer}>
          <ContainerImg
            $customstyles={props.styleConfig?.img}
            src={`/assets/${props.config.imgName}`}
            alt="Terms Of Service"
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
