import type { TArticleData } from "@/types";

import data from "../../../data/transformed_posts.json";

const articleData = data as TArticleData;

function _getPostContent(html: string, wordCount: number) {
  let i = 0;
  let tagOpeningCount = 0;
  let insideTag = false;
  let _wordCount = 0;
  let staticContentHtml = "";

  while (_wordCount <= wordCount) {
    if (html[i] === "<" && html[i + 1] !== "/") {
      tagOpeningCount += 1;
      insideTag = true;
    }
    if (html[i - 1] === ">") {
      insideTag = false;
    }
    if (
      (html[i - 1] === "<" && html[i] === "/") ||
      (html[i - 1] === "/" && html[i] === ">")
    ) {
      tagOpeningCount -= 1;
    }
    if (!insideTag && html[i] === " ") {
      _wordCount += 1;
    }
    staticContentHtml += html[i];
    i++;
  }
  if (tagOpeningCount > 0) {
    for (i; i < html.length; i++) {
      if (tagOpeningCount <= 0 && html[i - 1] === ">") {
        return {
          staticContentHtml,
          lastIndex: i,
        };
      }
      if (html[i] === "<" && html[i + 1] !== "/") {
        tagOpeningCount += 1;
        insideTag = true;
      }
      if (
        (html[i - 1] === "<" && html[i] === "/") ||
        (html[i - 1] === "/" && html[i] === ">")
      ) {
        tagOpeningCount -= 1;
      }
      if (html[i - 1] === ">") {
        insideTag = false;
      }
      if (!insideTag && html[i] === " ") {
        _wordCount += 1;
      }
      staticContentHtml += html[i];
    }
  }
  return { staticContentHtml, lastIndex: i };
}

// prettier-ignore
export function getStaticContent(wordCount: number, slug: string) {
  const postId = articleData.slugPostIdMap[slug];
  if (postId == null) return null;
  const title = articleData.posts[postId].title;
  const postContent = _getPostContent(articleData.posts[postId].encoded, wordCount);
  return {
    title,
    staticContentHtml: postContent.staticContentHtml,
    lastIndex: postContent.lastIndex,
  };
}
