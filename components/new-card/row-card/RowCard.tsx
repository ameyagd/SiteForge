import type { FC } from "react";
import type { TCardData } from "../new-card.type";

import {
  ContentWrapper,
  Description,
  Title,
  InnerWrapper,
  Wrapper,
  Picture,
  CrdImage,
} from "./RowCard.styled";

export const RowCard: FC<TCardData> = (props) => {
  const { config, styleConfig, loading } = props;
  config.imgType = config.imgType || "default";

  return (
    <Wrapper $customstyles={styleConfig?.cardWrapper}>
      <InnerWrapper
        $customstyles={styleConfig?.cardInnerWrapper}
        $cardSize={config.size}
      >
        {/* kept image on top to show content on top of absolutely positioned background image (config.imgType = "background") */}
        {config.imgUrl ? (
          <Picture
            $cardSize={config.size}
            $customstyles={styleConfig?.imageWrapper}
          >
            <CrdImage
              fill
              // loading={loading}
              src={config.imgUrl}
              alt={config.titleText}
              sizes={config.imageSizes}
              $customstyles={styleConfig?.image}
            />
          </Picture>
        ) : null}
        <ContentWrapper
          $customstyles={styleConfig?.contentWrapper}
          $cardSize={config.size}
          $showImage={config.imgUrl != null}
        >
          {config.tagComponent}
          <Title $customstyles={styleConfig?.titleText}>
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
