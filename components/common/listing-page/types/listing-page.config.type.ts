import type { TLayoutTemplateKey } from "@/components/common/layouts/layout.type";
import type { TGridData, TGridStoreConfig } from "@/components/new-grid";
import type {
  TComponentWithTextColor,
  TConfigId,
  TContactForm,
  THeadingTextComponentConfig,
  TListConfig,
} from "../../../../types";

type TListingHeadingConfig = {
  show?: boolean;
  config?: THeadingTextComponentConfig;
};

type TSearchTextConfig = {
  text: string;
};

// prettier-ignore
export type TListingLeftSection = {
  config: Omit<TGridStoreConfig, "headingTextConfig" | "id" | "configKey">;
  headingConfig?: TListingHeadingConfig;
  searchTitleConfig?: TSearchTextConfig;
  showPagination?: boolean;
  showSearchTitle?: boolean;
} & Pick<TGridData, "styleConfig">;

export type TSectionArticleComponent = {
  type: "articles";
  headingConfig: THeadingTextComponentConfig;
  config: Omit<TGridStoreConfig, "headingTextConfig" | "id" | "configKey">;
} & Pick<TGridData, "styleConfig">;

export type TSectionContactFormComponent = {
  type: "form";
  headingConfig: THeadingTextComponentConfig;
  formConfig: Omit<TContactForm, "headingConfig">;
};

export type TSectionListComponent = {
  type: "list";
  headingConfig: THeadingTextComponentConfig;
} & TListConfig;

export type TSectionComponents =
  | TSectionArticleComponent
  | TSectionContactFormComponent
  | TSectionListComponent;

export type TListingRightSection = {
  top: TSectionComponents;
  middle?: TSectionComponents;
  bottom?: TSectionComponents;
};

export type TListingPageConfig = {
  layoutTemplateKey: TLayoutTemplateKey;
  leftSection: TListingLeftSection;
  rightSection: TListingRightSection;
  topSection?: {}; // future scope
  bottomSection?: {}; // future scope
} & TConfigId &
  TComponentWithTextColor;
