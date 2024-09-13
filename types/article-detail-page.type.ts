import type {
  TSectionItem,
  TAppConfig,
  TSectionWithArticlesAndDetail,
} from "@/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getServerSideProps } from "../pages/[postname]/index";

type TArticleDatailPageData = {
  showBg: boolean;
  posts: TSectionWithArticlesAndDetail;
  headerConfig: TAppConfig["headerConfig"];
  footerConfig: TAppConfig["footerConfig"];
  globalConfig: TAppConfig["globalConfig"];
  articleConfig: TSectionItem<"article-page">["data"]["config"];
  heroStyleConfig: TSectionItem<"hero">["data"]["styleConfig"] | null;
};

// prettier-ignore
export type TServerSideArticleDetailProps = GetServerSideProps<TArticleDatailPageData>;

export type TArticleDetailPage = InferGetServerSidePropsType<
  typeof getServerSideProps
>;
