import type { FC } from "react";
import type { TTermsOfService } from "../TermsOfService";

import { PageTextContainer } from "@/components/common/PageTextContainer";
import { ContainerImg, Picture } from "./Template.styled";

type TProps = Omit<TTermsOfService, "breadcrumbVariant" | "textColor">;

const Template1: FC<TProps> = (props) => {
  return (
    <>
      {props.sectionHeadingComponent}
      <div>
        {props.config.showImage ? (
          <Picture $customstyles={props.styleConfig?.imageContainer}>
            <ContainerImg
              $customstyles={props.styleConfig?.img}
              src={`/assets/${props.config.imgName}`}
              alt="Terms Of Service"
              width={447}
              height={450}
            />
          </Picture>
        ) : null}
        <PageTextContainer
          $customstyles={props.styleConfig?.pageText}
          dangerouslySetInnerHTML={{ __html: props.config.text }}
        />
      </div>
    </>
  );
};

export default Template1;
