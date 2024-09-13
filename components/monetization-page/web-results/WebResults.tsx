import type { FC } from "react";
import type { TWebResults } from "./web-results.type";

import {
  ResultContainer,
  ResultDescription,
  ResultLink,
  ResultTitle,
} from "./WebResults.styled";

import { MonetizationComponentTitle } from "../MonetizationPageComponent.styled";
import { SiteSection, SectionInnerContainer } from "@/components/common";

export const WebResults: FC<TWebResults> = (props) => {
  if (!props.webResults.length) return null;

  return (
    <SiteSection $showBg={false} $withoutTopPadding $withoutBottomPadding>
      <SectionInnerContainer>
        <MonetizationComponentTitle>
          {props.config.title}
        </MonetizationComponentTitle>
        {props.webResults.map((result) => (
          <ResultContainer key={result.id}>
            <ResultTitle href={`/${result.url}`} target="_blank">
              {result.title}
            </ResultTitle>
            <ResultLink>{result.url}</ResultLink>
            <ResultDescription>{result.description}</ResultDescription>
          </ResultContainer>
        ))}
      </SectionInnerContainer>
    </SiteSection>
  );
};
