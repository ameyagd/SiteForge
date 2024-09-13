import type { FC } from "react";
import type {
  TSectionItem,
  TShowBgConfig,
  TComponentWithTagVariant,
  TComponentWithLimitedArticleData,
} from "@/types";

import { Tag } from "../tag";
import {
  Container,
  ContentDiv,
  HeroDescription,
  HeroHeading,
  HeroImage,
  InnerContainer,
  Picture,
  RedirectLink,
  Section,
} from "./Hero.styled";

// prettier-ignore
type THero =
  & TShowBgConfig
  & TComponentWithTagVariant
  & TSectionItem<"hero">["data"]
  & TComponentWithLimitedArticleData 
  & {
    preventRedirect?: boolean;
  };

export const Hero: FC<THero> = (props) => {
  const {
    articles: { [0]: article },
    config: {
      shadow,
      roundness,
      showTag,
      showDescription,
      showRedirect,
      imageSizes,
      textColor,
    },
    styleConfig,
    tagVariant,
    showBg,
    preventRedirect,
  } = props;

  return (
    <Section
      $showBg={showBg}
      $textColor={textColor}
      $imageShadow={shadow}
      $roundness={roundness}
      $customstyles={styleConfig?.container?.section}
    >
      <Container
        $showBg={showBg}
        $customstyles={styleConfig?.container?.container}
      >
        <InnerContainer $customstyles={styleConfig?.container?.innerContainer}>
          <div>
            <ContentDiv $customstyles={styleConfig?.content?.container}>
              {showTag ? (
                <Tag variant={tagVariant}>{article.category[0].title}</Tag>
              ) : null}
              <HeroHeading
                href={article.post_name}
                $customstyles={styleConfig?.content?.heading}
                $preventRedirect={preventRedirect}
                onClick={(e) => {
                  if (preventRedirect) {
                    e.preventDefault();
                  }
                }}
              >
                {article.title}
              </HeroHeading>
              {showDescription ? (
                <HeroDescription
                  $customstyles={styleConfig?.content?.description}
                >
                  {article.description}
                </HeroDescription>
              ) : null}
              {showRedirect ? (
                <RedirectLink
                  href={article.post_name}
                  $customstyles={styleConfig?.content?.redirectLink}
                  $preventRedirect={preventRedirect}
                  onClick={(e) => {
                    if (preventRedirect) {
                      e.preventDefault();
                    }
                  }}
                >
                  Read More
                </RedirectLink>
              ) : null}
            </ContentDiv>
          </div>
          <div>
            <Picture $customstyles={styleConfig?.imageStyle?.container}>
              <HeroImage
                src={
                  article.attachment_url
                    ? article.attachment_url
                    : `/assets/card-image.jpg`
                }
                alt={article.attachment_url ? article.title : "card"}
                $customstyles={styleConfig?.imageStyle?.image}
                sizes={imageSizes}
                fill
                priority
              />
            </Picture>
          </div>
        </InnerContainer>
      </Container>
    </Section>
  );
};
