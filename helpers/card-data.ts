import type { TListingPageConfig } from "@/components/common";
import type { TSectionConfig } from "@/components/section/types";
import type {
  TPostData,
  TPageWithArticle,
  TSectionItem,
  TSectionWithArticles,
  TSectionWithArticlesAndDetail,
  TCardPostData,
  TArticleData,
} from "@/types";

import data from "../data/transformed_posts.json";

const articleData = data as TArticleData;

const postKeys = Object.keys(articleData.posts);
const postValues = Object.values(articleData.posts);
let cardIndex = 0;

function _getLimitedDetails(article: TPostData) {
  const { attachment_url, category, description, title, post_name } = article;
  return {
    attachment_url,
    category,
    description,
    title,
    post_name,
  };
}

function _getArticlesWithLimitedDetails() {
  const postKey = postKeys[cardIndex++ % postKeys.length];
  const article = articleData.posts[postKey];
  return _getLimitedDetails(article);
}

// prettier-ignore
export function getArticlesForHomePage(sections: TSectionItem[]): TPageWithArticle {
  const articles: TPageWithArticle = {};
  cardIndex = 0;
  for (const index in sections) {
    const pageSection = sections[index];
    switch (pageSection.type) {
      case "hero":
        articles["hero"] = {
          ...articles["hero"],
          [index]: [_getArticlesWithLimitedDetails()],
        };
        break;
      case "grid":
        articles["grid"] = {
          ...articles["grid"],
          [index]: Array.from(
            {
              length: pageSection.data.config.cardCount,
            },
            _getArticlesWithLimitedDetails
          ),
        };
        break;
      case "section":
        {
          const section = pageSection.data.config as TSectionConfig;
          const rightConfig = section.rightSection;
          const topRightCardLength =
            rightConfig.top.type === "articles"
              ? rightConfig.top.config.cardCount
              : rightConfig.top.type === "list"
              ? rightConfig.top.count
              : 0;
          const middleRightCardLength =
            rightConfig.middle?.type === "articles"
              ? rightConfig.middle.config.cardCount
              : rightConfig.middle?.type === "list"
              ? rightConfig.middle.count
              : 0;
          const bottomRightCardLength =
            rightConfig.bottom?.type === "articles"
              ? rightConfig.bottom.config.cardCount
              : rightConfig.bottom?.type === "list"
              ? rightConfig.bottom.count
              : 0;
          const rightSectionArticles: TSectionWithArticles = {
            leftSectionArticles: Array.from(
              { length: section.leftSection.config.cardCount },
              _getArticlesWithLimitedDetails
            ),
            rightSectionArticles: {
              top: Array.from(
                { length: topRightCardLength },
                _getArticlesWithLimitedDetails
              ),
              middle: Array.from(
                { length: middleRightCardLength },
                _getArticlesWithLimitedDetails
              ),
              bottom: Array.from(
                { length: bottomRightCardLength },
                _getArticlesWithLimitedDetails
              ),
            },
          };
          articles["section"] = {
            ...articles["section"],
            [index]: rightSectionArticles,
          };
        }
        break;
      default:
        break;
    }
  }
  return articles;
}

export function getArticlesForListingPage(
  listingConfig: TSectionItem<"article-listing">["data"]["config"],
  currentPage: number,
  articleCount: number
) {
  cardIndex = (currentPage - 1) * articleCount;
  const totalPageCount = Math.ceil(postKeys.length / articleCount);
  if (currentPage <= 0 || currentPage > totalPageCount) {
    return null;
  }

  const section = listingConfig;
  const rightConfig = section.rightSection;
  const topRightCardLength =
    rightConfig.top.type === "articles"
      ? rightConfig.top.config.cardCount
      : rightConfig.top.type === "list"
      ? rightConfig.top.count
      : 0;
  const middleRightCardLength =
    rightConfig.middle?.type === "articles"
      ? rightConfig.middle.config.cardCount
      : rightConfig.middle?.type === "list"
      ? rightConfig.middle.count
      : 0;
  const bottomRightCardLength =
    rightConfig.bottom?.type === "articles"
      ? rightConfig.bottom.config.cardCount
      : rightConfig.bottom?.type === "list"
      ? rightConfig.bottom.count
      : 0;
  const sectionArticles: TSectionWithArticles = {
    leftSectionArticles: Array.from(
      {
        length: Math.min(articleCount, section.leftSection.config.cardCount),
      },
      _getArticlesWithLimitedDetails
    ),
    rightSectionArticles: {
      top: Array.from(
        { length: topRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      middle: Array.from(
        { length: middleRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      bottom: Array.from(
        { length: bottomRightCardLength },
        _getArticlesWithLimitedDetails
      ),
    },
  };
  return sectionArticles;
}

export function getNoResultArticles() {
  return Array.from({ length: 4 }, _getArticlesWithLimitedDetails);
}

// prettier-ignore
function _getCardDetailData(slug: string) {
  return postValues.find((value) => value.post_name === slug)!;
}

export function getArticlesForArticlePage(
  articleDetailSection: TSectionItem[],
  postName: string
) {
  const section = articleDetailSection[0].data.config as TSectionConfig;
  const rightConfig = section?.rightSection;
  if (rightConfig) {
    const topRightCardLength =
      rightConfig.top.type === "articles"
        ? rightConfig.top.config.cardCount
        : rightConfig.top.type === "list"
        ? rightConfig.top.count
        : 0;
    const middleRightCardLength =
      rightConfig.middle?.type === "articles"
        ? rightConfig.middle.config.cardCount
        : rightConfig.middle?.type === "list"
        ? rightConfig.middle.count
        : 0;
    const bottomRightCardLength =
      rightConfig.bottom?.type === "articles"
        ? rightConfig.bottom.config.cardCount
        : rightConfig.bottom?.type === "list"
        ? rightConfig.bottom.count
        : 0;
    const sectionArticles: TSectionWithArticlesAndDetail = {
      leftSectionArticleDetail: _getCardDetailData(postName),
      rightSectionArticles: {
        top: Array.from(
          { length: topRightCardLength },
          _getArticlesWithLimitedDetails
        ),
        middle: Array.from(
          { length: middleRightCardLength },
          _getArticlesWithLimitedDetails
        ),
        bottom: Array.from(
          { length: bottomRightCardLength },
          _getArticlesWithLimitedDetails
        ),
      },
    };
    return sectionArticles;
  } else {
    const sectionArticles: TSectionWithArticlesAndDetail = {
      leftSectionArticleDetail: _getCardDetailData(postName),
    };
    return sectionArticles;
  }
}

function _getCategoryCardData(
  slug: string,
  categoryCardIndex: number,
  pageArticleCount: number
) {
  const articleIds = articleData.categories[slug].slice(
    categoryCardIndex,
    categoryCardIndex + pageArticleCount
  );
  const articles = articleIds.map((id) => {
    const article = articleData.posts[id];
    return _getLimitedDetails(article);
  });
  return articles;
}

export function getTotalArticlesForCategoryPageCount(slug: string) {
  return articleData.categories[slug].length;
}

export function getArticlesForCategoryPage(
  config: TSectionItem<"category-listing">["data"]["config"],
  currentPage: number,
  articleCount: number,
  slug: string
) {
  const categories = articleData.categories[slug];
  const totalPageCount = Math.ceil(categories.length / articleCount);
  if (currentPage <= 0 || currentPage > totalPageCount) {
    return null;
  }
  const categoryCardIndex = (currentPage - 1) * articleCount;
  const rightConfig = config.rightSection;
  const topRightCardLength =
    rightConfig.top.type === "articles"
      ? rightConfig.top.config.cardCount
      : rightConfig.top.type === "list"
      ? rightConfig.top.count
      : 0;
  const middleRightCardLength =
    rightConfig.middle?.type === "articles"
      ? rightConfig.middle.config.cardCount
      : rightConfig.middle?.type === "list"
      ? rightConfig.middle.count
      : 0;
  const bottomRightCardLength =
    rightConfig.bottom?.type === "articles"
      ? rightConfig.bottom.config.cardCount
      : rightConfig.bottom?.type === "list"
      ? rightConfig.bottom.count
      : 0;
  const sectionArticles: TSectionWithArticles = {
    leftSectionArticles: _getCategoryCardData(
      slug,
      categoryCardIndex,
      articleCount
    ),
    rightSectionArticles: {
      top: Array.from(
        { length: topRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      middle: Array.from(
        { length: middleRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      bottom: Array.from(
        { length: bottomRightCardLength },
        _getArticlesWithLimitedDetails
      ),
    },
  };
  return sectionArticles;
}

export function _getSearchCardData(
  searchQuery: string,
  searchCardIndex: number,
  pageArticleCount: number
) {
  return _searchPosts(searchQuery).slice(
    searchCardIndex,
    searchCardIndex + pageArticleCount
  );
}

export function getTotalArticlesForSearchPageCount(searchQuery: string) {
  return _searchPosts(searchQuery).length;
}

export function getArticlesForSearchPage(
  config: TSectionItem<"search-page">["data"]["config"],
  currentPage: number,
  articleCount: number,
  searchQuery: string
) {
  const searchCardIndex = (currentPage - 1) * articleCount;
  const totalPageCount = Math.ceil(postValues.length / articleCount);
  if (currentPage <= 0 || currentPage > totalPageCount) {
    return null;
  }

  const rightConfig = config.rightSection;
  const topRightCardLength =
    rightConfig.top.type === "articles"
      ? rightConfig.top.config.cardCount
      : rightConfig.top.type === "list"
      ? rightConfig.top.count
      : 0;
  const middleRightCardLength =
    rightConfig.middle?.type === "articles"
      ? rightConfig.middle.config.cardCount
      : rightConfig.middle?.type === "list"
      ? rightConfig.middle.count
      : 0;
  const bottomRightCardLength =
    rightConfig.bottom?.type === "articles"
      ? rightConfig.bottom.config.cardCount
      : rightConfig.bottom?.type === "list"
      ? rightConfig.bottom.count
      : 0;
  const sectionArticles: TSectionWithArticles = {
    leftSectionArticles: _getSearchCardData(
      searchQuery,
      searchCardIndex,
      articleCount
    ),
    rightSectionArticles: {
      top: Array.from(
        { length: topRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      middle: Array.from(
        { length: middleRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      bottom: Array.from(
        { length: bottomRightCardLength },
        _getArticlesWithLimitedDetails
      ),
    },
  };
  return sectionArticles;
}

export function getTotalArticlesCount() {
  return postKeys.length;
}

export function getArticlePageCount(articleConfig: TListingPageConfig) {
  const articleCount = articleConfig.leftSection.config.cardCount;
  const totalArticleCount = getTotalArticlesCount();
  return Math.ceil(totalArticleCount / articleCount);
}

// prettier-ignore
export function getPaginationInfoText(currentPage: number, cardCount: number, totalArticleCount: number) {
  const lastIndex = Math.min(currentPage * cardCount, totalArticleCount);
  let startIndex = Math.abs(cardCount - lastIndex) + 1;
  startIndex = lastIndex <= startIndex ? 1 : startIndex;
  return `Showing ${startIndex}-${lastIndex} of ${totalArticleCount} results`;
}

export function getCategoryPageCount(
  slug: string,
  articleConfig: TListingPageConfig
) {
  const articleCount = articleConfig.leftSection.config.cardCount;
  //prettier-ignore
  const categoryArticlesCount = articleData.categories[slug].length;
  return Math.ceil(categoryArticlesCount / articleCount);
}

export function getCategoryNameFromSlug(slug: string) {
  return articleData.categorySlugs.hasOwnProperty(slug)
    ? articleData.categorySlugs[slug]
    : "";
}

export function getSearchPageCount(
  searchQuery: string,
  articleConfig: TListingPageConfig
) {
  const articleCount = articleConfig.leftSection.config.cardCount;
  return Math.ceil(_searchPosts(searchQuery).length / articleCount);
}

function _searchPosts(searchQuery: string) {
  searchQuery = searchQuery.toLowerCase();
  const posts: TCardPostData[] = [];
  for (const post of postValues) {
    if (
      post.post_name.toLowerCase().includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery)
    ) {
      posts.push(_getLimitedDetails(post));
    }
  }
  return posts;
}

export function isValidTag(tag: string) {
  return articleData.tagsMapping[tag] != null;
}

export function getTotalArticlesForTagPageCount(tag: string) {
  return articleData.tagsMapping[tag].length;
}

export function getTagArticlesCount(
  tag: string,
  articleConfig: TListingPageConfig
) {
  const articleCount = articleConfig.leftSection.config.cardCount;
  //prettier-ignore
  const tagArticlesCount = articleData.tagsMapping[tag].length;
  return Math.ceil(tagArticlesCount / articleCount);
}

function _getTagCardData(
  tag: string,
  articleStartIndex: number,
  articleCount: number
) {
  const articleIds = articleData.tagsMapping[tag].slice(
    articleStartIndex,
    articleStartIndex + articleCount
  );
  const articles = articleIds.map((id) => {
    const article = articleData.posts[id];
    return _getLimitedDetails(article);
  });
  return articles;
}

export function getTagCards(
  config: TSectionItem<"tag-listing">["data"]["config"],
  currentPage: number,
  articleCount: number,
  tag: string
) {
  const taggedArticleIds = articleData.tagsMapping[tag];
  const totalPageCount = Math.ceil(taggedArticleIds.length / articleCount);
  // 1st page starts from index 1
  if (currentPage <= 0 || currentPage > totalPageCount) {
    return null;
  }
  const tagCardIndex = (currentPage - 1) * articleCount;
  const rightConfig = config.rightSection;
  const topRightCardLength =
    rightConfig.top.type === "articles"
      ? rightConfig.top.config.cardCount
      : rightConfig.top.type === "list"
      ? rightConfig.top.count
      : 0;
  const middleRightCardLength =
    rightConfig.middle?.type === "articles"
      ? rightConfig.middle.config.cardCount
      : rightConfig.middle?.type === "list"
      ? rightConfig.middle.count
      : 0;
  const bottomRightCardLength =
    rightConfig.bottom?.type === "articles"
      ? rightConfig.bottom.config.cardCount
      : rightConfig.bottom?.type === "list"
      ? rightConfig.bottom.count
      : 0;
  const sectionArticles: TSectionWithArticles = {
    leftSectionArticles: _getTagCardData(tag, tagCardIndex, articleCount),
    rightSectionArticles: {
      top: Array.from(
        { length: topRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      middle: Array.from(
        { length: middleRightCardLength },
        _getArticlesWithLimitedDetails
      ),
      bottom: Array.from(
        { length: bottomRightCardLength },
        _getArticlesWithLimitedDetails
      ),
    },
  };
  return sectionArticles;
}
