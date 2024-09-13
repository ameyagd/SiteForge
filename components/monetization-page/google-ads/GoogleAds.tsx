import type { FC } from "react";
import type { TGoogleAds } from "./google-ads.type";

import {
  GoogleAdItem,
  GoogleAdLink,
  GoogleAdLinkText,
} from "./GoogleAds.styled";

import { MonetizationComponentTitle } from "../MonetizationPageComponent.styled";
import { SiteSection, SectionInnerContainer } from "@/components/common";

export const GoogleAds: FC<TGoogleAds> = (props) => {
  if (!props.adItems.length) return null;

  return (
    <SiteSection $showBg={false} $withoutTopPadding $withoutBottomPadding>
      <SectionInnerContainer>
        <MonetizationComponentTitle>{props.title}</MonetizationComponentTitle>
        <ul>
          {props.adItems.map((item, index) => (
            <GoogleAdItem key={index}>
              <GoogleAdLink href={item.url} target="_blank">
                <GoogleAdLinkText>{item.title}</GoogleAdLinkText>
              </GoogleAdLink>
            </GoogleAdItem>
          ))}
        </ul>
      </SectionInnerContainer>
    </SiteSection>
  );
};
