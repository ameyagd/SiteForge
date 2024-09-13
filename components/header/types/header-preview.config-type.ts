import type { TConfigKeyAndId, TNavItem } from "@/types";

type THeaderLogo = {
  logoSvg: string;
  openInNewTab?: boolean;
};

type TNavigationLinks = {
  config: {
    toggle: boolean;
  };
  items: TNavItem[];
};

type TSearch = {
  config: {
    toggle: boolean;
  };
  form: {
    show: boolean;
    placeholder: string;
  };
  monetizationConfig?: {
    resultsTemplate: string;
  };
};

export type THeaderConfig = {
  logo: THeaderLogo;
  nav: TNavigationLinks;
  search: TSearch;
  stickyHeader?: boolean;
  page?: "monetization" | "regular";
} & TConfigKeyAndId<THeaderTemplateId>;

type THeaderTemplateId = "template_1" | "template_2" | "template_3";
