import type { FC } from "react";
import type { TSectionHeading } from "./section-heading.type";

import { headerWrapperMap } from "./section-heading.meta";

import {
  MultilineH2,
  NormalH2,
  RedirectLink,
  SemiboldH2,
} from "./SectionHeading.styled";

export const SectionHeading: FC<TSectionHeading> = (props) => {
  const layout = props.layout;
  const headingLayout = layout.headingLayout;
  const text = props.text;
  const topHeadingConfig = layout.topText;
  const bottomHeadingConfig = layout.bottomText;
  const gapBetweenText = layout.gapBetweenText;
  const headingVariant = props.headingVariant || "default";

  const HeaderWrapper = headerWrapperMap[headingVariant];

  return (
    <HeaderWrapper
      $textStyle={topHeadingConfig.textStyle}
      $ignoreSiteMargins={text.ignoreSiteMargins}
    >
      {headingLayout === "single-line" ? (
        topHeadingConfig.textStyle === "semi-bold" ? (
          <SemiboldH2 $fontSize={topHeadingConfig.fontSize}>
            <strong>{text.topText}</strong>
            {text.bottomText ? <span> {text.bottomText}</span> : null}
          </SemiboldH2>
        ) : (
          <NormalH2
            $fontSize={topHeadingConfig.fontSize}
            $textStyle={topHeadingConfig.textStyle}
          >
            {text.topText} {text.bottomText}
          </NormalH2>
        )
      ) : (
        <MultilineH2
          $topConfig={topHeadingConfig}
          $bottomConfig={bottomHeadingConfig}
          $gapBetweenText={gapBetweenText}
        >
          <span>{text.topText}</span>
          {text.bottomText ? <span> {text.bottomText}</span> : null}
        </MultilineH2>
      )}
      {text.redirectLink != null ? (
        <RedirectLink
          $fontSize={text.redirectLink.fontSize ?? 16}
          href={text.redirectLink.link}
          onClick={(e) => e.preventDefault()}
        >
          {text.redirectLink.text}
        </RedirectLink>
      ) : null}
    </HeaderWrapper>
  );
};
