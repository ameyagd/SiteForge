import type { FC } from "react";

import type { TNavItem } from "@/types";
import type { THeaderStyleConfig } from "../types";
import {
  ToggleListItem,
  ToggleListLink,
  MobileSubItemContainer,
  MobileSubItem,
  MobileSubItemLink,
} from "./Navigation.styled";

type TToggleMenu = {
  items: TNavItem[];
  customStyles?: THeaderStyleConfig["navigation"];
};

export const ToggleMenu: FC<TToggleMenu> = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <ToggleListItem
          key={item.id}
          $hasChildItems={item.sublinks != null && item.sublinks?.length > 0}
          $customstyles={props.customStyles?.navListItem}
        >
          <ToggleListLink
            href={item.sublinks?.length ? "" : item.url}
            onClick={(e) => {
              if (item.sublinks?.length) {
                e.preventDefault();
              }
            }}
            rel="noreferrer noopener"
            $hasChild={item.sublinks != null && item.sublinks?.length > 0}
            $customstyles={props.customStyles?.navLink}
          >
            {item.title}
          </ToggleListLink>
          {item.sublinks != null && item.sublinks?.length > 0 ? (
            <MobileSubItemContainer
              $customstyles={props.customStyles?.phoneNavContainer}
            >
              {item.sublinks.map((sublink) => (
                <MobileSubItem
                  key={sublink.id}
                  $customstyles={props.customStyles?.phoneSubListItem}
                >
                  <MobileSubItemLink
                    href={sublink.url}
                    onClick={(e) => e.preventDefault()}
                    $customstyles={props.customStyles?.phoneSubNavLink}
                  >
                    {sublink.title}
                  </MobileSubItemLink>
                </MobileSubItem>
              ))}
            </MobileSubItemContainer>
          ) : null}
        </ToggleListItem>
      ))}
    </>
  );
};
