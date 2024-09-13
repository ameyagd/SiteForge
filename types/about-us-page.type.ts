import type { TAppConfig, TSectionItem } from "@/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { getStaticProps } from "../pages/about-us/index";

// prettier-ignore
type TAboutUsPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig"> 
  & Pick<TSectionItem<"about-us">["data"], "config" | "styleConfig">;

export type TAboutUsStaticProps = GetStaticProps<TAboutUsPageData>;

// prettier-ignore
export type TAboutUsPage = InferGetStaticPropsType<typeof getStaticProps>;
