import { styled } from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

import type { FC } from "react";
import type { TCustomStyles, TDevice } from "@/types";
import type { TFooterConfig, TFooterStyleConfig } from "./types";

type TFooterDisclaimer = {
  config: TFooterConfig["disclaimer"];
  styles: TFooterStyleConfig["disclaimer"];
};

export const FooterDisclaimer: FC<TFooterDisclaimer> = (props) => {
  const disclaimerText = props.config?.text;
  const deviceConfig = props.config?.deviceConfig;

  return (
    <DisclaimerContainer
      $customstyles={props.styles}
      $deviceconfig={deviceConfig}
    >
      <DisclaimerText>{disclaimerText}</DisclaimerText>
    </DisclaimerContainer>
  );
};

const DisclaimerContainer = styled.div<
  Partial<TCustomStyles> & { $deviceconfig?: TDevice<boolean> }
>`
  ${(props) =>
    !props.$deviceconfig?.desktop &&
    `@media ${QUERIES.laptopAndBelow} { display: none;}`}
  ${(props) =>
    !props.$deviceconfig?.tablet &&
    `@media ${QUERIES.tabletAndBelow} { display: none;}`}
  ${(props) =>
    !props.$deviceconfig?.phone &&
    `@media ${QUERIES.mobileAndBelow} { display: none;}`}

  ${(props) => props.$customstyles}
`;

const DisclaimerText = styled.p<TCustomStyles>`
  white-space: pre-line;
  color: var(--black-secondary);
  ${(props) => props.$customstyles}
`;
