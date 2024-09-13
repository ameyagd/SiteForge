import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { TPagination } from "@/components/common";
import type {
  TAppConfig,
  TSectionItem,
  TSectionWithArticles,
  TShowBgConfig,
} from "@/types";

import { getServerSideProps } from "../pages/category/[categoryname]/index";

// prettier-ignore
type TCategoryListingPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig">
  & Pick<TSectionItem<"category-listing">["data"], "config" | "styleConfig">
  & TShowBgConfig
  & {
    articles: TSectionWithArticles;
    paginationConfig: TPagination;
    categoryName: string;
    categorySlug: string;
  };

// prettier-ignore
export type TServerSideCategoryListingProps = GetServerSideProps<TCategoryListingPageData>;

// prettier-ignore
export type TCategoryListingPage = InferGetServerSidePropsType<typeof getServerSideProps>;
