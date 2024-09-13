import type { TPagination } from "@/components/common";
import type {
  TAppConfig,
  TSectionItem,
  TSectionWithArticles,
  TShowBgConfig,
} from "@/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getServerSideProps } from "../pages/tag/[tagname]/index";

// prettier-ignore
type TTagListingPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig">
  & Pick<TSectionItem<"tag-listing">["data"], "config" | "styleConfig">
  & TShowBgConfig
  & {
    articles: TSectionWithArticles;
    paginationConfig: TPagination;
    tag: string;
  };

// prettier-ignore
export type TServerSideTagListingProps = GetServerSideProps<TTagListingPageData>;

// prettier-ignore
export type TTagListingPage = InferGetServerSidePropsType<typeof getServerSideProps>;
