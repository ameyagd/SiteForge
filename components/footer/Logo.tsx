import { styled } from "styled-components";
import Link from "next/link";

import type { FC } from "react";
import type { TCustomStyles, TLogoStyles, TRecursivePartial } from "@/types";
import type { TFooterConfig, TFooterStyleConfig } from "./types";

type TFooterLogo = {
  config: TFooterConfig["logo"];
  styleConfig?: TFooterStyleConfig["logo"];
};

export const FooterLogo: FC<TFooterLogo> = (props) => {
  const logoSvg = props.config.logoSvg;
  const openInNewTab = props.config.openInNewTab;
  const logoStyle = props.styleConfig;

  return (
    <LogoContainer $customstyles={logoStyle?.logo}>
      <LogoLink
        href="/"
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        dangerouslySetInnerHTML={{ __html: logoSvg }}
        $logoContainerStyles={logoStyle?.logoLink}
        $logoStyles={logoStyle?.logo}
      />
    </LogoContainer>
  );
};

const LogoContainer = styled.div<TCustomStyles>`
  max-width: 175px;
  position: absolute;
  ${(props) => props.$customstyles}
`;

const LogoLink = styled(Link)<TRecursivePartial<TLogoStyles>>`
  display: block;
  width: 100%;
  height: 100%;
  ${({ $logoContainerStyles }) => $logoContainerStyles}

  & > svg {
    display: block;
    width: 100%;
    height: auto;
    ${({ $logoStyles }) => $logoStyles}
  }
`;
