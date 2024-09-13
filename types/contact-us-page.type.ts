import type { TAppConfig, TSectionItem } from "@/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getStaticProps } from "../pages/contact-us/index";

// prettier-ignore
type TContactUsData = Pick<
  TAppConfig,
  "headerConfig" | "footerConfig" | "globalConfig" | "integrationConfig"
> &
  Pick<TSectionItem<"contact-us">["data"], "config" | "styleConfig"> & {
    addressImagePath: string;
  };

// prettier-ignore
export type TContactUsStaticProps = GetStaticProps<TContactUsData>;

// prettier-ignore
export type TContactPage = InferGetStaticPropsType<typeof getStaticProps>;
