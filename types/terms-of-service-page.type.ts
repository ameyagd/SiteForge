import type { TAppConfig, TSectionItem } from "@/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { getStaticProps } from "../pages/terms-of-service/index";

// prettier-ignore
type TTermsOfServicePageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig"> 
  & Pick<TSectionItem<"terms-of-service">["data"], "config" | "styleConfig">;

export type TTermsOfServiceStaticProps = GetStaticProps<TTermsOfServicePageData>;

// prettier-ignore
export type TTermsOfServicePage = InferGetStaticPropsType<typeof getStaticProps>;
