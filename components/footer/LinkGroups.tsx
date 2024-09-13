import type { FC } from "react";
import type { TCustomStyles } from "@/types";
import type { TFooterConfig, TFooterStyleConfig } from "./types";

import { css, styled } from "styled-components";

import Link from "next/link";

type TFooterLinkGroups = {
  tabs: TFooterConfig["tabs"];
  styleConfig: TFooterStyleConfig["linkGroup"];
};

export const FooterLinkGroups: FC<TFooterLinkGroups> = (props) => {
  return (
    <NavContainer $customstyles={props.styleConfig?.navContainer}>
      {props.tabs.length ? (
        <InnerContainer $customstyles={props.styleConfig?.innerContainer}>
          {props.tabs.map((tab) => (
            <GridContainer
              $customstyles={props.styleConfig?.gridContainer}
              $columnCount={tab.noOfColumn}
              key={tab.id}
            >
              {tab.title && <GroupTitle>{tab.title}</GroupTitle>}
              {tab.items.map((item) => (
                <FooterLink
                  key={item.id}
                  href={item.url}
                  rel="noreferrer noopener"
                  onClick={(e) => {
                    if (!item.url) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.title}
                </FooterLink>
              ))}
            </GridContainer>
          ))}
        </InnerContainer>
      ) : null}
    </NavContainer>
  );
};

const NavContainer = styled.div<TCustomStyles>`
  position: relative;
  margin-top: 10px;
  ${({ $customstyles }) => $customstyles}
`;

const InnerContainer = styled.div<TCustomStyles>`
  ${({ $customstyles }) => $customstyles}
`;

const GridContainer = styled.nav<{ $columnCount: number } & TCustomStyles>`
  display: grid;
  grid-gap: 10px;
  justify-items: start;
  align-items: center;
  ${(props) => {
    return css`
      ${props.$columnCount > 0 &&
      css`
        grid-template-columns: repeat(${props.$columnCount}, 1fr);
      `};
      ${!props.$columnCount &&
      css`
        grid-auto-flow: column;
      `};
      ${props.$customstyles};
    `;
  }}
`;

const FooterLink = styled(Link)<TCustomStyles>`
  padding: 2px;
  text-align: center;
  color: var(--black-secondary);
  transition: color 300ms ease;
  position: relative;
  width: max-content;

  &:hover {
    color: var(--black);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.5px;
    background-color: var(--black);
    z-index: 1;
    transform: scale(0);
    transform-origin: center left;
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: scale(1);
  }

  ${({ $customstyles }) => $customstyles}
`;

const GroupTitle = styled.h3<TCustomStyles>`
  text-align: center;
  font-weight: 700;
  color: var(--black);
  grid-column: 1/-1;

  ${({ $customstyles }) => $customstyles}
`;
