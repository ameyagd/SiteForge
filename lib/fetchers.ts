import type { TAppConfig } from "@/types";
import siteConfig from "../data/site-config.json";

export function getConfig(): TAppConfig {
  return siteConfig as any as TAppConfig;
}
