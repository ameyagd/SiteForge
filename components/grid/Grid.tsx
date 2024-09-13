import type { FC } from "react";
import type {
  TComponentWithImageSizes,
  TComponentWithLimitedArticleData,
  TComponentWithSectionHeading,
  TComponentWithTagVariant,
  TComponentWithTextColor,
  TSectionItem,
  TShowBgConfig,
} from "@/types";

import { SectionInnerContainer, SiteSection } from "../common/app-components";
import { NewGrid } from "../new-grid";

// prettier-ignore
type TGrid = TShowBgConfig &
  TSectionItem<"grid">["data"] &
  TComponentWithTagVariant &
  TComponentWithImageSizes &
  TComponentWithSectionHeading &
  TComponentWithLimitedArticleData;

export const Grid: FC<TGrid> = (props) => {
  const {
    config,
    articles,
    sectionHeadingComponent,
    showBg,
    styleConfig,
    tagVariant,
    imageSizes,
  } = props;

  return (
    <SiteSection $showBg={showBg} $textColor={config.textColor}>
      <SectionInnerContainer>
        {sectionHeadingComponent}
        <NewGrid
          config={config}
          styleConfig={styleConfig}
          articles={articles}
          tagVariant={tagVariant}
          imageSizes={imageSizes}
        />
      </SectionInnerContainer>
    </SiteSection>
  );
};
