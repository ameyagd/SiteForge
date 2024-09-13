import type { FC } from "react";
import type { TArticleContent } from "./article-content.type";
import type { TMonetizationSectionGeneric } from "../types/monetization-page.type";

import { useState } from "react";

import Image from "next/image";
import { SectionInnerContainer } from "@/components/common";

import {
  ArticleContentContainer,
  ArticleContentSection,
  MonetizationArticlePicture,
  ReadMoreButton,
} from "./ArticleContent.styled";

type TProps = TArticleContent &
  Pick<TMonetizationSectionGeneric<"article-content">, "config">;

export const ArticleContent: FC<TProps> = (props) => {
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  return (
    <ArticleContentSection
      $showBg={false}
      $isArticleOpen={props.config.type === "read-more" ? isArticleOpen : true}
      $withoutTopPadding
      $withoutBottomPadding
    >
      <SectionInnerContainer>
        <ArticleContentContainer $isArticleOpen={isArticleOpen}>
          <MonetizationArticlePicture $isOnTop={!isArticleOpen}>
            <Image
              fill
              sizes={props.config.imageSizes}
              src={props.articleImagePath}
              alt="Article Image"
            />
          </MonetizationArticlePicture>
          <div dangerouslySetInnerHTML={{ __html: props.contentHTML }} />
        </ArticleContentContainer>
        {props.config.type === "read-more" ? (
          <ReadMoreButton
            $isArticleOpen={isArticleOpen}
            type="button"
            onClick={() => setIsArticleOpen(!isArticleOpen)}
          >
            Read {isArticleOpen ? "Less" : "More"}
          </ReadMoreButton>
        ) : null}
      </SectionInnerContainer>
    </ArticleContentSection>
  );
};
