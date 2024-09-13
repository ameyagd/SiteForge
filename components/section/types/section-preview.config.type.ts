import type { TListingPageConfig } from "@/components/common/listing-page";
import type { TComponentWithTextColor, TConfigKeyAndId } from "@/types";

/**
 * template_1 => L: 6 sm col cards, R: 4 sm row cards
 * template_2 => L: 4 md col cards, R: 5 sm row cards
 * template_3 => L: 3 md col cards, R: 5 sm row cards
 * template_4 => L: 4 md row cards, R: 5 sm row cards
 * template_5 => L: 5 md row cards, R: Top: 3 sm row cards + Middle: list
 * template_6 => L: 5 md row cards, R: Top: 3 sm row cards + Middle: Form
 */
export type TSectionTemplateKey =
  | "template_1"
  | "template_2"
  | "template_3"
  | "template_4"
  | "template_5"
  | "template_6";

// prettier-ignore
export type TSectionConfig = 
  & TListingPageConfig
  & TComponentWithTextColor
  & TConfigKeyAndId<TSectionTemplateKey>;