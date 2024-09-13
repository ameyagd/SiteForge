import { TMonetizationSectionGeneric } from "../types";

// prettier-ignore
export type TWebResults = Pick<TMonetizationSectionGeneric<"web-results">, "config" | "id"> & { webResults: TWebResultItem[] };

export type TWebResultResponse = Record<number, TWebResultItem[]>;

export type TWebResultItem = {
  id: number;
  title: string;
  url: string;
  description: string;
};
