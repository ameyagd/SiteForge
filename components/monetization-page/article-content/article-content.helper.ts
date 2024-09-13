import type { TArticleData } from "@/types";

import data from "../../../data/transformed_posts.json";
import { TArticleContent } from "./article-content.type";

const articleData = data as TArticleData;

// prettier-ignore
export function getArticleContent(slug: string, articleContentHtmlIndex: number): TArticleContent | null {
  const postId = articleData.slugPostIdMap[slug];
  if (postId == null) return null;
  const postHtml = articleData.posts[postId].encoded;
  const articleContentHtml = postHtml.slice(articleContentHtmlIndex, postHtml.length);
  return {
    articleImagePath: articleData.posts[postId].attachment_url!,
    contentHTML: articleContentHtml,
  };
}
