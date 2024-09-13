import type { FC } from "react";
import type { TGridData } from "./new-grid.type";

import { NewCard } from "../new-card";

import { GridOuterWrapper, GridWrapper } from "./NewGrid.styled";
import { Tag } from "../tag";

export const NewGrid: FC<TGridData> = (props) => {
  const { config, styleConfig, articles, tagVariant, imageSizes } = props;

  return (
    <GridOuterWrapper
      $customstyles={styleConfig?.gridStyleConfig?.gridOuterWrapper}
    >
      <GridWrapper
        $cardSize={config.cardSize}
        $cardType={config.cardType}
        $cardRoundness={config.cardRoundness}
        $cardShadow={config.cardShadow}
        $customstyles={styleConfig?.gridStyleConfig?.gridWrapper}
      >
        {articles.map((data, index) => (
          <NewCard
            key={data.post_name}
            // prettier-ignore
            config={{
              size: config.cardSize,
              type: config.cardType,
              titleText: data.title,
              url: `/${data.post_name}`,
              tagComponent: config.showTag ? <Tag variant={tagVariant}>{data.category[0].title}</Tag> : undefined,
              descriptionText: config.showDescription ? data.description : undefined,
              imgUrl: config.showImage ? data.attachment_url || `/assets/card-image.jpg` : undefined,
              imgType: config.showImage ? config.imageType : undefined,
              imageSizes
            }}
            loading={index <= 4 ? "eager" : "lazy"}
            styleConfig={styleConfig?.cardStyleConfig}
          />
        ))}
      </GridWrapper>
    </GridOuterWrapper>
  );
};
