import type { FC } from "react";
import type { THeaderSectionConfig } from "@/types";

import { SearchForm } from "./form/SearchForm";
import { HeaderLogo } from "./logo/Logo";
import { HeaderNavigation } from "./navigation/Navigation";

import { HeaderContainer, InnerContainer } from "./Header.styled";

export const Header: FC<THeaderSectionConfig["data"]> = (props) => {
  const { config, styleConfig } = props;

  return (
    <HeaderContainer
      $customstyles={styleConfig?.container?.outerContainer}
      $isHeaderSticky={config.stickyHeader}
    >
      <InnerContainer $customstyles={styleConfig?.container?.innerContainer}>
        <HeaderLogo logoConfig={config.logo} styleConfig={styleConfig?.logo} />
        <HeaderNavigation
          navConfig={config.nav}
          styleConfig={styleConfig?.navigation}
        />
        {config.search.form.show ? (
          <SearchForm
            formConfig={config.search}
            styleConfig={styleConfig?.searchForm}
            page={config.page}
          />
        ) : null}
      </InnerContainer>
    </HeaderContainer>
  );
};
