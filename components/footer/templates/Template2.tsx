import type { TFooterSectionConfig } from "@/types";
import type { FC } from "react";

import { FooterDescription } from "../Description";
import { FooterLinkGroups } from "../LinkGroups";
import { FooterLogo } from "../Logo";
import { LogoContainer, TopContainer } from "./Template.styled";

const Template2: FC<TFooterSectionConfig["data"]> = (props) => {
  const { config, styleConfig } = props;
  return (
    <>
      <LogoContainer $customstyles={styleConfig?.logo?.logoContainer}>
        <FooterLogo config={config.logo} styleConfig={styleConfig?.logo} />
      </LogoContainer>
      <TopContainer
        $customstyles={styleConfig?.container?.innerContainer?.topContainer}
      >
        <FooterDescription
          config={config.description}
          styleConfig={styleConfig?.description}
        />
        <FooterLinkGroups
          tabs={config.tabs}
          styleConfig={styleConfig?.linkGroup}
        />
      </TopContainer>
    </>
  );
};

export default Template2;
