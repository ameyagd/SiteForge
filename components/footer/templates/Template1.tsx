import type { FC } from "react";
import type { TFooterSectionConfig } from "@/types";

import { FooterDescription } from "../Description";
import { FooterLinkGroups } from "../LinkGroups";
import { FooterLogo } from "../Logo";
import { LogoContainer } from "./Template.styled";

export const Template1: FC<TFooterSectionConfig["data"]> = (props) => {
  return (
    <>
      <LogoContainer $customstyles={props.styleConfig?.logo?.logoContainer}>
        <FooterLogo
          config={props.config.logo}
          styleConfig={props.styleConfig?.logo}
        />
      </LogoContainer>
      <FooterDescription
        config={props.config.description}
        styleConfig={props.styleConfig?.description}
      />
      <FooterLinkGroups
        tabs={props.config.tabs}
        styleConfig={props.styleConfig?.linkGroup}
      />
    </>
  );
};
