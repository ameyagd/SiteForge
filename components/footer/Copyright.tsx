import type { TCustomStyles } from "@/types";
import type { FC } from "react";
import { styled } from "styled-components";
import { TFooterConfig, TFooterStyleConfig } from "./types";

type TFooterCopyRight = {
  text: TFooterConfig["copyright"];
  styles?: TFooterStyleConfig["copyright"];
};

export const FooterCopyright: FC<TFooterCopyRight> = (props) => {
  return (
    <CopyrightContainer $customstyles={props.styles}>
      <p>{props.text}</p>
    </CopyrightContainer>
  );
};

const CopyrightContainer = styled.div<TCustomStyles>`
  width: 100%;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  ${(props) => props.$customstyles}
`;
