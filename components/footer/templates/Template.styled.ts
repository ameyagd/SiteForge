import type { TCustomStyles } from "@/types";
import styled from "styled-components";

export const FooterContainer = styled.footer<TCustomStyles>`
  --shadow-color: 0deg 0% 63%;
  --shadow-elevation-medium: 0px -0.2px 0.3px hsl(var(--shadow-color) / 0),
    0px -2.6px 3.9px hsl(var(--shadow-color) / 0.35);
  position: relative;
  box-shadow: var(--shadow-elevation-medium);
  background-color: var(--bg-c);
  ${({ $customstyles }) => $customstyles}
`;

export const InnerContainer = styled.div<TCustomStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--app-max-width);
  padding-inline: var(--app-horizontal-padding);
  margin: 0 auto;
  padding: 24px 16px;
  ${({ $customstyles }) => $customstyles}
`;

export const TopContainer = styled.div<TCustomStyles>`
  ${({ $customstyles }) => $customstyles}
`;

export const BottomContainer = styled.div<TCustomStyles>`
  ${({ $customstyles }) => $customstyles}
`;

export const LogoContainer = styled.div<TCustomStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 100%;
  min-height: 50px;
  ${({ $customstyles }) => $customstyles}
`;
