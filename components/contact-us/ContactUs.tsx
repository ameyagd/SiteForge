import type { FC } from "react";
import type { TStaticPageHeaderVariant } from "../common";
import type {
  TComponentWithAddress,
  TComponentWithBreadcrumb,
  TComponentWithSectionHeading,
  TSectionItem,
} from "@/types";

import { breadcrumbItems } from "./contact-us.meta";

import { HorizontalTemplate } from "./templates/horizontal";
import { VerticalTemplate } from "./templates/vertical";

// prettier-ignore
export type TContactUsPage =
  & TSectionItem<"contact-us">["data"]
  & TComponentWithSectionHeading
  & TStaticPageHeaderVariant
  & TComponentWithBreadcrumb
  & TComponentWithAddress;

export const ContactUs: FC<TContactUsPage> = (props) => {
  const {
    config,
    styleConfig,
    variant: staticPageHeaderVariant,
    sectionHeadingComponent,
    addressComponent,
    breadcrumbVariant,
  } = props;

  return (
    <>
      {config.configKey === "horizontal" ? (
        <HorizontalTemplate
          config={config}
          styleConfig={styleConfig}
          breadcrumbItems={breadcrumbItems}
          breadcrumbVariant={breadcrumbVariant}
          textColor={config.textColor}
          variant={staticPageHeaderVariant}
          addressComponent={addressComponent}
          sectionHeadingComponent={sectionHeadingComponent}
        />
      ) : config.configKey === "vertical" ? (
        <VerticalTemplate
          config={config}
          styleConfig={styleConfig}
          breadcrumbItems={breadcrumbItems}
          breadcrumbVariant={breadcrumbVariant}
          textColor={config.textColor}
          variant={staticPageHeaderVariant}
          addressComponent={addressComponent}
          sectionHeadingComponent={sectionHeadingComponent}
        />
      ) : null}
    </>
  );
};
