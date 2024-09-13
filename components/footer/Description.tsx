import { styled } from "styled-components";
import { QUERIES } from "@/helpers/breakpoints";

import type { FC } from "react";
import type { TCustomStyles, TDevice } from "@/types";
import type { TFooterConfig, TFooterStyleConfig } from "./types";

type TFooterDescription = {
  config: TFooterConfig["description"];
  styleConfig?: TFooterStyleConfig["description"];
};

export const FooterDescription: FC<TFooterDescription> = (props) => {
  const descriptionText = props.config?.text;
  const deviceConfig = props.config?.deviceConfig;
  const descriptionStyle = props.styleConfig;

  return (
    <DescriptionContainer
      $customstyles={descriptionStyle}
      $deviceconfig={deviceConfig}
    >
      <p>{descriptionText}</p>
    </DescriptionContainer>
  );
};

// prettier-ignore
const DescriptionContainer = styled.div<
  TCustomStyles & { $deviceconfig?: TDevice<boolean> }
>`
  color: var(--black);

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
