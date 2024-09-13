import type { TPagination } from "@/components/common";
import type {
  TAppConfig,
  TSectionItem,
  TSectionWithArticles,
  TShowBgConfig,
} from "@/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../pages/blog/index";

// prettier-ignore
type TBlogListingPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig">
  & Pick<TSectionItem<"article-listing">["data"], "config" | "styleConfig">
  & TShowBgConfig
  & {
    articles: TSectionWithArticles;
    paginationConfig: TPagination;
  };

// prettier-ignore
export type TServerSideBlogListingProps = GetServerSideProps<TBlogListingPageData>;

// prettier-ignore
export type TBlogListingPage = InferGetServerSidePropsType<typeof getServerSideProps>;
