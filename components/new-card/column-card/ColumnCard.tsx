import type { FC } from "react";
import type { TCardData } from "../new-card.type";

import {
  ContentWrapper,
  Description,
  Title,
  InnerWrapper,
  Wrapper,
} from "./ColumnCard.styled";

import { CardImage } from "./CardImage";

export const ColumnCard: FC<TCardData> = (props) => {
  const { config, styleConfig /* loading */ } = props;
  config.imgType = config.imgType || "default";

  return (
    <Wrapper $customstyles={styleConfig?.cardWrapper}>
      <InnerWrapper
        $customstyles={styleConfig?.cardInnerWrapper}
        $imageType={config.imgType}
        $cardSize={config.size}
      >
        {/* kept image on top to show content on top of absolutely positioned background image (config.imgType = "background") */}
        {config.imgUrl ? (
          <CardImage
            config={{
              size: config.size,
              imgType: config.imgType,
              imgUrl: config.imgUrl,
              titleText: config.titleText,
              imageSizes: config.imageSizes,
            }}
            styleConfig={styleConfig}
            // loading={loading}
          />
        ) : null}
        <ContentWrapper
          $customstyles={styleConfig?.contentWrapper}
          $imageType={config.imgType}
          $cardSize={config.size}
        >
          {config.tagComponent}
          <Title $customstyles={styleConfig?.titleText} $cardSize={config.size}>
            {config.titleText}
          </Title>
          {config.descriptionText ? (
            <Description $customstyles={styleConfig?.descriptionText}>
              {config.descriptionText}
            </Description>
          ) : null}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
