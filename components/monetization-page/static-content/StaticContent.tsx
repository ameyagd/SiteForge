import type { FC } from "react";
import type { TStaticContent } from "./static-content.type";

import { Heading, StaticContentWrapper } from "./StaticContent.styled";

import { SectionInnerContainer, SiteSection } from "@/components/common";

export const StaticContent: FC<TStaticContent> = (props) => {
  return (
    <SiteSection $showBg={false} $withoutTopPadding $withoutBottomPadding>
      <SectionInnerContainer>
        {props.showTitle ? <Heading>{props.title}</Heading> : null}
        <StaticContentWrapper
          dangerouslySetInnerHTML={{ __html: props.staticContentHtml }}
        />
      </SectionInnerContainer>
    </SiteSection>
  );
};
