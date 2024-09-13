import type { TAppConfig } from "@/types";
import type { ParsedUrlQuery } from "querystring";
import type { IncomingHttpHeaders } from "http";

import { getDecryptedData } from "./security";

export function getMainVariables(globalConfig: TAppConfig["globalConfig"]) {
  const {
    themeColors: { primary, secondary, backgroundColor },
    layout: { appHorizontalPadding, maxWidth },
    heading: { marginTop, marginBottom },
    cardRoundness,
    cardShadow,
  } = globalConfig;
  return {
    maxWidth,
    marginTop,
    marginBottom,
    appHorizontalPadding,
    primary,
    secondary,
    backgroundColor,
    cardRoundness,
    cardShadow,
  };
}

export function getQueryParamMap(
  queryParam: ParsedUrlQuery,
  options?: { withDecryption: boolean }
) {
  const queryParamMap = Object.entries(queryParam).reduce((prev, curr) => {
    const [key, value] = curr;
    prev[key] = options?.withDecryption
      ? getDecryptedData(value as string)
      : (value as string);
    return prev;
  }, {} as Record<string, string>);
  return queryParamMap;
}

/**
 * @description reference: https://developer.wordpress.org/reference/functions/wp_is_mobile/#source
 */
export function isPhoneDevice(headers: IncomingHttpHeaders) {
  return (
    headers["sec-ch-ua-mobile"] === "?1" ||
    [
      "Mobile",
      "Android",
      "Silk/",
      "Kindle",
      "BlackBerry",
      "Opera Mini",
      "Opera Mobi",
    ].some((value) => headers["user-agent"]?.includes(value))
  );
}
