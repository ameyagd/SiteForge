import { TMonetizationSectionGeneric } from "../types";

export type TGoogleAdItem = {
  title: string;
  url: string;
};

export type TGoogleAds = Pick<
  TMonetizationSectionGeneric<"google-ads">["config"],
  "title"
> & {
  adItems: TGoogleAdItem[];
};
