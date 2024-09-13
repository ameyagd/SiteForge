import type { FC } from "react";
import type { TComponentWithCardData } from "@/types";
import type { TArticlePageTemplate } from "../types";

import {
  ArticleContentContainer,
  ArticleNavigator,
  ArticleNavigatorContainer,
} from "../templates/styles/Common.styled";

  
// prettier-ignore
type TProps = 
  & Pick<TArticlePageTemplate["config"], "showPrevNextArticles">
  & Partial<Pick<TArticlePageTemplate, "breadcrumbComponent">>
  & TComponentWithCardData;

export const ArticlePageLeftSection: FC<TProps> = (props) => {
  const { breadcrumbComponent, showPrevNextArticles, cardData } = props;

  return (
    <>
      {breadcrumbComponent}
      <ArticleContentContainer
        dangerouslySetInnerHTML={{ __html: cardData.encoded }}
      />
      {showPrevNextArticles ? (
        <ArticleNavigatorContainer>
          <ArticleNavigator
            href={`${cardData.prev_post_name}`}
            $showNavigator={!!cardData.prev_post_name}
          >
            Previous Article
          </ArticleNavigator>
          <ArticleNavigator
            href={`${cardData.next_post_name}`}
            $showNavigator={!!cardData.next_post_name}
          >
            Next Article
          </ArticleNavigator>
        </ArticleNavigatorContainer>
      ) : null}
    </>
  );
};
