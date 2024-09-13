import type { TWebResultItem } from "./web-results.type";
import type { TArticleData } from "@/types";

import data from "../../../data/transformed_posts.json";

const articleData = data as TArticleData;

export function getWebResults(
  adCount: number,
  slug: string,
  searchQuery?: string
) {
  const results: TWebResultItem[] = [];
  if (!searchQuery) {
    const currentPostId = articleData.slugPostIdMap[slug];
    const postData = articleData.posts[currentPostId];
    if (!postData) return [];
    const categories = postData.category;
    for (const category of categories) {
      const posts = articleData.categories[category.slug];
      for (const postId of posts) {
        if (+currentPostId === postId) continue;
        if (results.length >= adCount) {
          return results;
        }
        const postDetails = articleData.posts[postId];
        results.push({
          title: postDetails.title,
          url: postDetails.post_name,
          description: postDetails.description,
          id: postDetails.post_id,
        });
      }
    }
    return results;
  }

  for (const postId in articleData.posts) {
    if (results.length >= adCount) {
      return results;
    }
    const postDetails = articleData.posts[postId];
    // prettier-ignore
    if (
      postDetails.post_name !== slug &&
      (
        postDetails.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        postDetails.description.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
      )
    ) {
      results.push({
        description: postDetails.description,
        id: postDetails.post_id,
        title: postDetails.title,
        url: postDetails.post_name,
      });
    }
  }
  console.log("getWebResults: ", searchQuery, results, slug);
  return results;
}
