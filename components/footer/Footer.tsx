import type { FC } from "react";
import type { TFooterSectionConfig } from "@/types";

import { FooterCopyright } from "./Copyright";
import { FooterContainer, InnerContainer } from "./templates/Template.styled";
import { Template1 } from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";

export const Footer: FC<TFooterSectionConfig["data"]> = (props) => {
  const { config, styleConfig } = props;

  return (
    <FooterContainer $customstyles={styleConfig?.container?.outerContainer}>
      <InnerContainer
        $customstyles={styleConfig?.container?.innerContainer?.mainContainer}
      >
        {config.configKey === "template_1" ? (
          <Template1 config={config} styleConfig={styleConfig} />
        ) : config.configKey === "template_2" ? (
          <Template2 config={config} styleConfig={styleConfig} />
        ) : config.configKey === "template_3" ? (
          <Template3 config={config} styleConfig={styleConfig} />
        ) : config.configKey === "template_4" ? (
          <Template4 config={config} styleConfig={styleConfig} />
        ) : null}
      </InnerContainer>
      <FooterCopyright
        text={config.copyright}
        styles={styleConfig?.copyright}
      />
    </FooterContainer>
  );
};
