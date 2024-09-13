import { useEffect, useRef, useState, type FC } from "react";

import type { THeaderConfig, THeaderStyleConfig } from "../types";

import { BtnLogo, ToggleButton } from "../Header.styled";
import { CloseIcon, HamburgerIcon } from "../Icons";
import {
  ListContainer,
  ListItem,
  MobileNavContainer,
  NavContainer,
  NavLink,
  SubNavLink,
  SublistContainter,
  SublistItem,
  ToggleList,
} from "./Navigation.styled";
import { ToggleMenu } from "./ToggleMenu";

type THeaderNavigation = {
  navConfig: THeaderConfig["nav"];
  styleConfig?: THeaderStyleConfig["navigation"];
};

export const HeaderNavigation: FC<THeaderNavigation> = (props) => {
  const items = props.navConfig.items;
  const config = props.navConfig.config;
  const customStyles = props.styleConfig;

  const [showList, setShowList] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        containerRef.current != null &&
        !containerRef.current.contains(event.target as HTMLElement)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <NavContainer
      ref={containerRef}
      $toggle={config.toggle}
      $customstyles={customStyles?.navContainer}
      style={
        {
          "--nav-open-state": showList ? 1 : 0,
        } as React.CSSProperties
      }
    >
      {config.toggle ? (
        <>
          <ToggleButton
            type="button"
            $logoContainerStyles={customStyles?.navToggleBtnContainer}
            $logoStyles={customStyles?.navToggleBtnLogo}
            onClick={() => setShowList(!showList)}
          >
            <BtnLogo $show={!showList}>{HamburgerIcon}</BtnLogo>
            <BtnLogo $show={showList}>{CloseIcon}</BtnLogo>
          </ToggleButton>
          <ToggleList $customstyles={customStyles?.navListContainer}>
            <ToggleMenu items={items} customStyles={customStyles} />
          </ToggleList>
        </>
      ) : (
        <>
          <ListContainer
            $toggle={config.toggle}
            $customstyles={customStyles?.navListContainer}
          >
            {items.map((item) => (
              <ListItem
                key={item.id}
                $hasSublist={item.sublinks != null && item.sublinks?.length > 0}
                $customstyles={
                  item.sublinks != null && item.sublinks?.length > 0
                    ? customStyles?.navListItemWithSublist
                    : customStyles?.navListItem
                }
              >
                <NavLink
                  href={item.url || ""}
                  rel="noreferrer noopener"
                  $hasSublist={
                    item.sublinks != null && item.sublinks?.length > 0
                  }
                  $customstyles={customStyles?.navLink}
                  onClick={(e) => {
                    if (!item.url) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.title}
                </NavLink>
                {item.sublinks?.length ? (
                  <SublistContainter
                    $customstyles={customStyles?.navSublistContainer}
                  >
                    {item.sublinks.map((subLink) => (
                      <SublistItem
                        key={subLink.id}
                        $customstyles={customStyles?.navSublistItem}
                      >
                        <SubNavLink
                          href={subLink.url}
                          rel="noreferrer"
                          $customstyles={customStyles?.subNavLink}
                        >
                          {subLink.title}
                        </SubNavLink>
                      </SublistItem>
                    ))}
                  </SublistContainter>
                ) : null}
              </ListItem>
            ))}
          </ListContainer>
          {!config.toggle ? (
            <MobileNavContainer $customstyles={customStyles?.phoneNavContainer}>
              <ToggleButton
                type="button"
                $logoContainerStyles={customStyles?.phoneNavButton}
                $logoStyles={customStyles?.phoneNavLogo}
                onClick={() => setShowList(!showList)}
              >
                <BtnLogo $show={!showList}>{HamburgerIcon}</BtnLogo>
                <BtnLogo $show={showList}>{CloseIcon}</BtnLogo>
              </ToggleButton>
              <ToggleList
                $customstyles={customStyles?.phoneList}
                $listOpenStyles={
                  showList ? customStyles?.phoneNavContainerChecked : ""
                }
              >
                <ToggleMenu items={items} customStyles={customStyles} />
              </ToggleList>
            </MobileNavContainer>
          ) : null}
        </>
      )}
    </NavContainer>
  );
};
