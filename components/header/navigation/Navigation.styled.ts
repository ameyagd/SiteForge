import styled from "styled-components";

import { QUERIES } from "@/helpers/breakpoints";

import type { TCustomStyles } from "@/types";
import Link from "next/link";

type TNavContainer = TCustomStyles & { $toggle: boolean };

export const NavContainer = styled.nav<TNavContainer>`
  position: relative;
  margin-left: ${(props) => (props.$toggle ? "auto" : "revert")};

  @media ${QUERIES.tabletAndBelow} {
    margin-left: auto;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const SubNavLink = styled(Link)<TCustomStyles>`
  display: block;
  width: 100%;
  cursor: pointer;
  padding: 12px;
  font-weight: 500;
  font-size: var(--subnav-font-size);

  ${({ $customstyles }) => $customstyles}
`;

export const SublistContainter = styled.ul<TCustomStyles>`
  display: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  min-width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  z-index: 100;
  background-color: #fff;
  filter: drop-shadow(0px 2.5px 3.8px hsl(var(--shadow-color) / 0.7));

  &::before {
    content: "";
    height: 12px;
    width: 12px;
    background-color: inherit;
    position: absolute;
    top: 1px;
    transform: translate(-50%, -100%);
    left: 50%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 1;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const SublistItem = styled.li<TCustomStyles>`
  margin: 0;
  transition: background-color 300ms ease, color 300ms ease;
  color: var(--black);

  &:hover {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }

  ${({ $customstyles }) => $customstyles}
`;

// prettier-ignore
export const ListContainer = styled.ul<TNavContainer>`
  display: flex;
  align-items: center;
  gap: var(--nav-margin);
  /* margin-left: var(--nav-margin);
  margin-right: var(--nav-margin); */
  font-weight: 500;

  @media ${QUERIES.tabletAndBelow} {
    display: ${(props) => (props.$toggle ? "flex" : "none")};
  }

  ${({ $customstyles }) => $customstyles}
`;

export const ListItem = styled.li<TCustomStyles & { $hasSublist: boolean }>`
  position: relative;
  font-size: var(--nav-font-size);
  line-height: 21px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black-secondary);
  transition: color 300ms ease;

  &:hover {
    color: var(--black);
  }
  &:hover ${SublistContainter} {
    display: block;
  }
  ${({ $customstyles }) => $customstyles}
`;

export const NavLink = styled(Link)<TCustomStyles & { $hasSublist: boolean }>`
  line-height: 50px;
  cursor: pointer;
  position: relative;

  &::after {
    ${(props) =>
      props.$hasSublist
        ? `
        content: "";
        position: absolute;
        height: 6px;
        width: 8px;
        background-color: currentColor;
        top: 50%;
        bottom: 0;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: translate(6px, -50%) rotate(180deg);
    `
        : ""}
  }

  &::before {
    ${(props) =>
      !props.$hasSublist
        ? `
      content:"";
      position: absolute;
      z-index: 1;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      transform: scale(0);
      transform-origin: center left;
      height: 3px;
      background-color: var(--primary-color);
      transition: transform 300ms ease;
      will-change: transform;
    `
        : ""}
  }
  &:hover::before {
    transform: ${(props) => (!props.$hasSublist ? "scale(1)" : "revert")};
  }

  ${({ $customstyles }) => $customstyles}
`;

// prettier-ignore
export const ToggleList = styled.ul<TCustomStyles & { $listOpenStyles?: string }>`
  position: absolute;
  right: 0;
  z-index: 1;
  min-width: 200px;
  transition: transform 300ms ease;
  will-change: transform;
  transform-origin: var(--nav-transform-origin);
  transform: translate(var(--nav-translatex), var(--nav-translatey)) scale(var(--nav-open-state));
  border: 1px solid hsl(220, 13%, 91%);
  border-radius: 4px;
  font-weight: 500;
  background-color: #fff;
  filter: drop-shadow(0px 2.5px 3.8px hsl(var(--shadow-color) / 0.7));

  ${({ $customstyles }) => $customstyles}
  ${({ $listOpenStyles }) => $listOpenStyles}
`;

// prettier-ignore
export const ToggleListItem = styled.li<TCustomStyles & { $hasChildItems: boolean }>`
  position: relative;
  margin-top: 18px;
  margin-bottom: ${({ $hasChildItems }) => ($hasChildItems ? "0px" : "18px")};
  color: var(--black-secondary);
  transition: background-color 300ms ease, color 300ms ease;
  
  @media ${QUERIES.tabletAndBelow} {
    margin-top: 16px;
    margin-bottom: ${({ $hasChildItems }) => ($hasChildItems ? "0px" : "16px")};
  }

  ${({ $customstyles }) => $customstyles}
`;

export const MobileSubItemContainer = styled.ul<TCustomStyles>`
  border: 1px solid hsl(var(--shadow-color) / 0.4);
  border-left: none;
  border-right: none;
  margin-block: 8px;
  padding-block: 8px;
  background-color: #fff;

  ${({ $customstyles }) => $customstyles}
`;

export const MobileSubItem = styled.li<TCustomStyles>`
  --padding-dimension: 8px;

  padding-block: var(--padding-dimension);

  @media ${QUERIES.mobileAndBelow} {
    --padding-dimension: 4px;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const MobileSubItemLink = styled(Link)<TCustomStyles>`
  font-weight: 500;
  font-size: var(--subnav-font-size);
  text-transform: uppercase;
  position: relative;
  margin-inline: 16px;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    transform: scale(0);
    transform-origin: center left;
    height: 1.5;
    background-color: var(--primary-color);
    transition: transform 300ms ease;
    will-change: transform;
  }
  &:hover::after {
    transform: scale(1);
  }

  ${({ $customstyles }) => $customstyles}
`;

// prettier-ignore
export const ToggleListLink = styled(Link)<TCustomStyles & { $hasChild: boolean }>`
  position: relative;
  color: var(--black);
  font-weight: 700;
  font-size: var(--nav-font-size);
  line-height: 21px;
  margin-inline: 16px;
  text-transform: uppercase;

  &::after {
    ${props => !props.$hasChild ? `
      content: "";
      position: absolute;
      z-index: 1;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      transform: scale(0);
      transform-origin: center left;
      height: 3px;
      background-color: var(--primary-color);
      transition: transform 300ms ease;
      will-change: transform;
    ` : ""}
  }
  &:hover::after {
    transform: ${props => !props.$hasChild ? "scale(1)" : "revert"};
  }

  ${({ $customstyles }) => $customstyles}
`;

export const MobileNavContainer = styled.div<TCustomStyles>`
  margin-left: auto;
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: block;
  }

  ${({ $customstyles }) => $customstyles}
`;
