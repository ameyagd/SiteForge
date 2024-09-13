import type { TAppConfig, TSectionItem } from "@/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getStaticProps } from "../pages/privacy-policy/index";

// prettier-ignore
type TPrivacyPageData = 
  & Pick<TAppConfig, "headerConfig" | "footerConfig" | "globalConfig" | "integrationConfig"> 
  & Pick<TSectionItem<"privacy-policy">["data"], "config" | "styleConfig">
  & {
    contentMarkup: string;
  };

// prettier-ignore
export type TPrivacyPageStaticProps = GetStaticProps<TPrivacyPageData>;

// prettier-ignore
export type TPrivacyPage = InferGetStaticPropsType<typeof getStaticProps>;
