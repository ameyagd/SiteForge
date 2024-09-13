import type { TAppConfig, TPageWithArticle } from "@/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { getStaticProps } from "../pages/index";

type THomePageData = {
  headerConfig: TAppConfig["headerConfig"];
  footerConfig: TAppConfig["footerConfig"];
  globalConfig: TAppConfig["globalConfig"];
  sections: TAppConfig["sections"]["home_page"];
  articles: TPageWithArticle;
};

export type THomePageStaticProps = GetStaticProps<THomePageData>;

export type THomePage = InferGetStaticPropsType<typeof getStaticProps>;
