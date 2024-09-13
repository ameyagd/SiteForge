import type { FC } from "react";
import type { TComponentWithTextColor, TShowBgConfig } from "@/types";
import type {
  TMonetizationPageData,
  TMonetizationSection,
  TMonetizationSectionData,
} from "./types";

import { ArticleContent } from "./article-content/ArticleContent";
import { GoogleAds } from "./google-ads/GoogleAds";
import { StaticContent } from "./static-content/StaticContent";
import { WebResults } from "./web-results/WebResults";
import { MonetizationSectionsContainer } from "../common";

// prettier-ignore
type TProps = {
  sections: TMonetizationSection[];
  backgroundColor: string;
  pageData: TMonetizationPageData;
  isHeaderSticky?: boolean;
} & TShowBgConfig 
  & TComponentWithTextColor;

export const MonetizationSectionRenderer: FC<TProps> = (props) => {
  return (
    <MonetizationSectionsContainer
      $showBg={props.showBg}
      $isHeaderSticky={props.isHeaderSticky}
      $textColor={props.textColor}
    >
      {props.sections.map((section, index) => {
        switch (section.type) {
          // prettier-ignore
          case "article-content":
            const { articleImagePath, contentHTML } = props.pageData["article-content"][index + 1] as TMonetizationSectionData<"article-content">;
            return (
              <ArticleContent
                key={index}
                config={section.config}
                articleImagePath={articleImagePath}
                contentHTML={contentHTML}
              />
            );
          case "web-results":
            // prettier-ignore
            const webResults = props.pageData["web-results"][index + 1] as TMonetizationSectionData<"web-results">;
            return (
              <WebResults
                key={index}
                id={section.id}
                config={section.config}
                webResults={webResults}
              />
            );
          case "google-ads":
            // prettier-ignore
            const googleAds = props.pageData["google-ads"][index + 1] as TMonetizationSectionData<"google-ads">;
            return (
              <GoogleAds
                key={index}
                adItems={googleAds}
                title={section.config.title}
              />
            );
          case "static-content":
            // prettier-ignore
            const { staticContentHtml, title } = props.pageData["static-content"][index + 1] as TMonetizationSectionData<"static-content">;
            return (
              <StaticContent
                key={index}
                staticContentHtml={staticContentHtml}
                title={title}
                showTitle={section.config.showTitle}
              />
            );
          default:
            return null;
        }
      })}
    </MonetizationSectionsContainer>
  );
};
