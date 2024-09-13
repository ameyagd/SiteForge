import type {
  TAppConfig,
  TGlobalConfig,
  TImageSizeUnit,
  TImageSizeValue,
  TImageSizes,
  TSectionItem,
} from "@/types";

import { BREAKPOINTS } from "./breakpoints";

type TLayout = TAppConfig["globalConfig"]["layout"];

function _getBreakpoint(deviceType: keyof TImageSizes) {
  switch (deviceType) {
    case "desktop":
      return ``;
    case "tablet":
      return `(max-width: ${BREAKPOINTS.tabletMax}px)`;
    case "phone":
      return `(max-width: ${BREAKPOINTS.mobileMax}px)`;
  }
}

function _getSizeString(
  value: TImageSizeValue,
  unit: TImageSizeUnit,
  maxWidth: TLayout["maxWidth"],
  appHorizontalPadding: TLayout["appHorizontalPadding"],
  deviceType: keyof TImageSizes
) {
  const breakPoint = _getBreakpoint(deviceType);
  if (value === "maxWidth - appHorizontalPadding") {
    return `${breakPoint} ${maxWidth - appHorizontalPadding}px`;
  } else if (value === "maxWidth / 2") {
    return `${breakPoint} ${maxWidth / 2}px`;
  } else if (value === "maxWidth") {
    return `${breakPoint} ${maxWidth}px`;
  } else {
    return `${breakPoint} ${value}${unit}`;
  }
}

export function getImageSizesBasedOnGlobalData(
  maxWidth: TLayout["maxWidth"],
  appHorizontalPadding: TLayout["appHorizontalPadding"],
  imageSizesOb?: TImageSizes
) {
  if (!imageSizesOb) return `${maxWidth - appHorizontalPadding}px`;
  let sizes: string[] = [];
  if (imageSizesOb.phone) {
    const { value, unit } = imageSizesOb.phone;
    sizes.push(
      _getSizeString(value, unit, maxWidth, appHorizontalPadding, "phone")
    );
  }
  if (imageSizesOb.tablet) {
    const { value, unit } = imageSizesOb.tablet;
    sizes.push(
      _getSizeString(value, unit, maxWidth, appHorizontalPadding, "tablet")
    );
  }
  if (imageSizesOb.desktop) {
    const { value, unit } = imageSizesOb.desktop;
    sizes.push(
      _getSizeString(
        value,
        unit,
        maxWidth,
        appHorizontalPadding,
        "desktop"
      ).trim()
    );
  }
  return sizes.join(",");
}

export function getImageSizes(imageSizesOb?: TImageSizes) {
  if (!imageSizesOb) return;
  let sizes: string[] = [];
  if (imageSizesOb.phone) {
    const { value, unit } = imageSizesOb.phone;
    const breakPoint = _getBreakpoint("phone");
    sizes.push(`${breakPoint} ${value}${unit}`);
  }
  if (imageSizesOb.tablet) {
    const { value, unit } = imageSizesOb.tablet;
    const breakPoint = _getBreakpoint("tablet");
    sizes.push(`${breakPoint} ${value}${unit}`);
  }
  if (imageSizesOb.desktop) {
    const { value, unit } = imageSizesOb.desktop;
    sizes.push(`${value}${unit}`);
  }
  return sizes.join(",");
}

// prettier-ignore
export function setImageSizesInConfig(data: TSectionItem["data"], type: TSectionItem["type"], globalConfig: TGlobalConfig) {
  const { layout: { maxWidth, appHorizontalPadding } } = globalConfig;
  switch (type) {
    case "hero": {
      const { config, styleConfig } = data as TSectionItem<typeof type>["data"];
      config.imageSizes = getImageSizesBasedOnGlobalData(
        maxWidth,
        appHorizontalPadding,
        styleConfig?.imageStyle?.imageSizes as TImageSizes
      );
      break;
    }
    case "grid": {
      const { config, styleConfig } = data as TSectionItem<typeof type>["data"];
      config.imageSizes =
        getImageSizes(
          styleConfig?.cardStyleConfig?.imageSizes as TImageSizes
        ) || "";
      break;
    }
    case "section":
    case "search-page":
    case "tag-listing":
    case "category-listing":
    case "article-listing": {
      const {
        config: { leftSection, rightSection },
      } = data as TSectionItem<typeof type>["data"];
      leftSection.config.imageSizes = getImageSizes(leftSection.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      if (rightSection.top.type === "articles") {
        rightSection.top.config.imageSizes = getImageSizes(rightSection.top.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      if (rightSection.middle?.type === "articles") {
        rightSection.middle.config.imageSizes = getImageSizes(rightSection.middle.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      if (rightSection.bottom?.type === "articles") {
        rightSection.bottom.config.imageSizes = getImageSizes(rightSection.bottom.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      break;
    }
    case "article-page": {
      const { config } = data as TSectionItem<typeof type>["data"];
      if (config.configKey === "template_2") {
        let imageSizes: TImageSizes;
        if (config.layout === "single_column") {
          imageSizes = {
            desktop: { value: maxWidth - appHorizontalPadding, unit: "px" },
            tablet: { value: 100, unit: "vw" },
            phone: { value: 100, unit: "vw" },
          };
        } else {
          imageSizes = {
            desktop: { value: 900, unit: "px" },
            tablet: { value: 100, unit: "vw" },
            phone: { value: 100, unit: "vw" },
          };
        }
        config.articleImageSizes = getImageSizes(imageSizes);
      }
      if (config.rightSection?.top.type === "articles") {
        config.rightSection.top.config.imageSizes = getImageSizes(config.rightSection.top.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      if (config.rightSection?.middle?.type === "articles") {
        config.rightSection.middle.config.imageSizes = getImageSizes(config.rightSection.middle.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      if (config.rightSection?.bottom?.type === "articles") {
        config.rightSection.bottom.config.imageSizes = getImageSizes(config.rightSection.bottom.styleConfig?.cardStyleConfig?.imageSizes as TImageSizes) || "";
      }
      break;
    }
    default:
      break;
  }
}
