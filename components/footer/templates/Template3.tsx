import type { FC } from "react";
import type { TFooterSectionConfig } from "@/types";

import { FooterLinkGroups } from "../LinkGroups";
import { FooterLogo } from "../Logo";
import { LogoContainer } from "./Template.styled";

export const Template3: FC<TFooterSectionConfig["data"]> = (props) => {
  const { config, styleConfig } = props;
  return (
    <>
      <LogoContainer $customstyles={styleConfig?.logo?.logoContainer}>
        <FooterLogo config={config.logo} styleConfig={styleConfig?.logo} />
      </LogoContainer>
      <FooterLinkGroups
        tabs={config.tabs}
        styleConfig={styleConfig?.linkGroup}
      />
    </>
  );
};

export default Template3;
