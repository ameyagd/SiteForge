import type { TGlobalConfig, TSectionItem } from "@/types";

// prettier-ignore
export function setCardAppearance(config: TSectionItem["data"]["config"], type: TSectionItem["type"], globalConfig: TGlobalConfig) {
  switch (type) {
    case "hero": {
      const _config = config as TSectionItem<typeof type>["data"]["config"];
      _config.shadow = _config.shadow || globalConfig.cardShadow;
      _config.roundness = _config.roundness || globalConfig.cardRoundness;
      break;
    }
    case "grid": {
      const _config = config as TSectionItem<typeof type>["data"]["config"];
      _config.cardRoundness =
        _config.cardRoundness || globalConfig.cardRoundness;
      _config.cardShadow = _config.cardShadow || globalConfig.cardShadow;
      break;
    }
    case "section":
    case "search-page":
    case "tag-listing":
    case "category-listing":
    case "article-listing": {
      const _config = config as TSectionItem<typeof type>["data"]["config"];
      _config.leftSection.config.cardRoundness =
        _config.leftSection.config.cardRoundness || globalConfig.cardRoundness;
      _config.leftSection.config.cardShadow =
        _config.leftSection.config.cardShadow || globalConfig.cardShadow;
      if (_config.rightSection.top.type === "articles") {
        _config.rightSection.top.config.cardRoundness =
          _config.rightSection.top.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.top.config.cardShadow =
          _config.rightSection.top.config.cardShadow || globalConfig.cardShadow;
      }
      if (_config.rightSection.middle?.type === "articles") {
        _config.rightSection.middle.config.cardRoundness =
          _config.rightSection.middle.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.middle.config.cardShadow =
          _config.rightSection.middle.config.cardShadow ||
          globalConfig.cardShadow;
      }
      if (_config.rightSection.bottom?.type === "articles") {
        _config.rightSection.bottom.config.cardRoundness =
          _config.rightSection.bottom.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.bottom.config.cardShadow =
          _config.rightSection.bottom.config.cardShadow ||
          globalConfig.cardShadow;
      }
      break;
    }
    case "article-page": {
      const _config = config as TSectionItem<typeof type>["data"]["config"];
      if (_config.rightSection?.top.type === "articles") {
        _config.rightSection.top.config.cardRoundness =
          _config.rightSection.top.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.top.config.cardShadow =
          _config.rightSection.top.config.cardShadow || globalConfig.cardShadow;
      }
      if (_config.rightSection?.middle?.type === "articles") {
        _config.rightSection.middle.config.cardRoundness =
          _config.rightSection.middle.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.middle.config.cardShadow =
          _config.rightSection.middle.config.cardShadow ||
          globalConfig.cardShadow;
      }
      if (_config.rightSection?.bottom?.type === "articles") {
        _config.rightSection.bottom.config.cardRoundness =
          _config.rightSection.bottom.config.cardRoundness ||
          globalConfig.cardRoundness;
        _config.rightSection.bottom.config.cardShadow =
          _config.rightSection.bottom.config.cardShadow ||
          globalConfig.cardShadow;
      }
      break;
    }
    default:
      break;
  }
}
