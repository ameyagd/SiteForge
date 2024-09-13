import type { TGoogleAdItem } from "./google-ads.type";
import type { TArticleData } from "@/types";

import data from "../../../data/transformed_posts.json";
import { getEncryptedString } from "@/helpers/security";

const articleData = data as TArticleData;

const alreadyShownAdPosts: Record<string, Record<number, boolean>> = {};

export function resetAlreadyShownGoogleAds(slug: string) {
  alreadyShownAdPosts[slug] = {};
}

function _getUrl(params: Record<string, string>) {
  const queryParams: string[] = [];
  for (const key in params) {
    queryParams.push(`${key}=${params[key]}`);
  }
  return queryParams.join("&");
}

export function getGoogleAds(
  adCount: number,
  currentTemplateId: string,
  targetTemplateId: string,
  slug: string,
  otherQueryParams: Record<string, string>
) {
  const currentPostId = articleData.slugPostIdMap[slug];
  const postData = articleData.posts[currentPostId];
  if (!postData) return [];

  if (!alreadyShownAdPosts[slug]) {
    alreadyShownAdPosts[slug] = {};
  }
  const encryptedTemplateId = targetTemplateId
    ? getEncryptedString(targetTemplateId)
    : getEncryptedString(currentTemplateId);
  otherQueryParams["tk"] = encryptedTemplateId;
  const ads: TGoogleAdItem[] = [];

  const categories = postData.category;
  for (const category of categories) {
    const posts = articleData.categories[category.slug];
    for (const postId of posts) {
      if (+currentPostId === postId || alreadyShownAdPosts[slug][postId])
        continue;
      if (ads.length >= adCount) {
        return ads;
      }
      const postDetails = articleData.posts[postId];
      otherQueryParams["slug"] = getEncryptedString(postDetails.post_name);
      // otherQueryParams["s"] = postDetails.title;
      alreadyShownAdPosts[slug][postId] = true;
      ads.push({
        title: postDetails.title,
        url: `/topic?${_getUrl(otherQueryParams)}`,
      });
    }
  }

  return ads;
}
