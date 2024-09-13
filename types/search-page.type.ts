import type {
  TAppConfig,
  TSectionItem,
  TSectionWithArticles,
  TShowBgConfig,
} from "@/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { TPagination } from "@/components/common";

import { getServerSideProps } from "../pages/search/index";

// prettier-ignore
type TSearchPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig">
  & Pick<TSectionItem<"search-page">["data"], "config" | "styleConfig">
  & TShowBgConfig
  & {
    articles: TSectionWithArticles;
    noResultArticles: TSectionWithArticles["leftSectionArticles"];
    paginationConfig: TPagination;
  };

// prettier-ignore
export type TServerSideSearchPageProps = GetServerSideProps<TSearchPageData>;

// prettier-ignore
export type TSearchPage = InferGetServerSidePropsType<typeof getServerSideProps>;
