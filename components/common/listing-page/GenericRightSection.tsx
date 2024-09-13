import type { FC } from "react";
import type {
  TComponentWithLimitedArticleData,
  TComponentWithSectionHeading,
  TComponentWithTagVariant,
  TShowBgConfig,
} from "@/types";
import type {
  TSectionArticleComponent,
  TSectionContactFormComponent,
  TSectionListComponent,
} from "./types";

import { NewGrid } from "@/components/new-grid";
import { List } from "@/components/section/List";
import { ContactForm } from "../ContactForm";

// prettier-ignore
type TGenericRightSection = (
  | TSectionArticleComponent
  | TSectionContactFormComponent
  | TSectionListComponent
) & TShowBgConfig 
  & TComponentWithSectionHeading
  & TComponentWithTagVariant
  & TComponentWithLimitedArticleData;

export const GenericRightSection: FC<TGenericRightSection> = (props) => {
  return (
    <div>
      {props.sectionHeadingComponent}
      {props.type === "articles" ? (
        <NewGrid
          config={props.config}
          styleConfig={props.styleConfig}
          tagVariant={props.tagVariant}
          articles={props.articles}
          imageSizes={props.config.imageSizes}
        />
      ) : props.type === "form" ? (
        <ContactForm {...props.formConfig} {...props} />
      ) : props.type === "list" ? (
        <List {...props} {...props.articles} />
      ) : null}
    </div>
  );
};
