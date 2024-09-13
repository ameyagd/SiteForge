import type { FC } from "react";
import type { THeaderConfig, THeaderStyleConfig } from "../types";
import { LogoContainer, LogoLink } from "./Logo.styled";

type THeaderLogoStyles = {
  logoConfig: THeaderConfig["logo"];
  styleConfig?: THeaderStyleConfig["logo"];
};

export const HeaderLogo: FC<THeaderLogoStyles> = (props) => {
  return (
    <LogoContainer $customstyles={props.styleConfig?.logoContainer}>
      <LogoLink
        href="/"
        dangerouslySetInnerHTML={{ __html: props.logoConfig.logoSvg }}
        target={props.logoConfig.openInNewTab ? "_blank" : undefined}
        rel={props.logoConfig.openInNewTab ? "noopener noreferrer" : undefined}
        $logoContainerStyles={props.styleConfig?.logoLink}
        $logoStyles={props.styleConfig?.logo}
      />
    </LogoContainer>
  );
};
