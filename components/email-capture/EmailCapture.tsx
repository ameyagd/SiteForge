import type { FC } from "react";
import type {
  TComponentWithTextColor,
  TCustomStyles,
  TShowBgConfig,
} from "@/types";

import styled from "styled-components";
import {
  GenericEmailCapture,
  SectionInnerContainer,
  SiteSection,
  TGenericEmailCapture,
} from "../common";

type TProps = TGenericEmailCapture & TShowBgConfig;

export const EmailCapture: FC<TProps> = (props) => {
  // prettier-ignore
  const { config, styleConfig, sectionHeadingComponent, showBg } = props;

  return (
    <SiteSection
      id={config.id}
      $showBg={showBg}
      $textColor={config.textColor}
      $customstyles={styleConfig?.container?.outerContainer}
    >
      <InnerContainer $customstyles={styleConfig?.container?.innerContainer}>
        <GenericEmailCapture
          config={config}
          sectionHeadingComponent={sectionHeadingComponent}
          styleConfig={styleConfig}
        />
      </InnerContainer>
    </SiteSection>
  );
};

const InnerContainer = styled(SectionInnerContainer)<TCustomStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  ${({ $customstyles }) => $customstyles}
`;
