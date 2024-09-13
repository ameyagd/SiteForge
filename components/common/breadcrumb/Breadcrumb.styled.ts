import { QUERIES } from "@/helpers/breakpoints";
import Link from "next/link";
import { styled } from "styled-components";

export const NavBreadcrumb = styled.nav`
  --space: 16px;
  padding-bottom: var(--space);
  margin-top: calc(-1 * (var(--space)));
`;

export const BreadcrumbList = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const BreadcrumbLink = styled(Link)`
  font-size: 14px;
  line-height: 21px;
  text-decoration: none;
  cursor: pointer;
  color: var(--primary-color);
  margin-top: var(--space);
  display: grid;
  place-content: center;
`;

export const BaseBreadcrumbLI = styled.li`
  --margin-inline: 24px;
  display: inline-flex;
  align-items: center;
  position: relative;

  & + &::before {
    content: "";
    display: inline-block;
    margin-inline: var(--margin-inline);
    margin-top: var(--space);
  }

  &:last-child > ${BreadcrumbLink} {
    cursor: default;
    color: var(--text-color, inherit);
  }

  @media ${QUERIES.mobileAndBelow} {
    --margin-inline: 14px;
  }
`;

export const DefaultBreadcrumbLI = styled(BaseBreadcrumbLI)`
  & + &::before {
    height: 0.8em;
    opacity: 0.2;
    transform: rotate(15deg);
    border-right: 0.1em solid var(--text-color);
  }

  & > ${BreadcrumbLink} {
    text-transform: capitalize;
    font-weight: 500;
  }
`;

export const TypeOneBreadcrumbLI = styled(BaseBreadcrumbLI)`
  & + &::before {
    height: 8px;
    width: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: var(--text-color);
    border-left: none;
    border-bottom: none;
    border-left-width: 0;
    border-bottom-width: 0;
    transform: rotate(45deg);
  }

  & > ${BreadcrumbLink} {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const TypeTwoBreadcrumbLI = styled(TypeOneBreadcrumbLI)`
  & + &::before {
    border-width: 1px;
  }

  &:not(:last-child) > ${BreadcrumbLink} {
    padding-inline: 18px;
    height: 38px;
    border-radius: 50px;
    background-color: hsl(var(--primary-color-raw-hsl) / 0.05);
  }

  & > ${BreadcrumbLink} {
    line-height: 38px;
  }
`;

export const TypeThreeBreadcrumbLI = styled(BaseBreadcrumbLI)`
  & + &::before {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
  & > ${BreadcrumbLink} {
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const TypeFourBreadcrumbLI = styled(DefaultBreadcrumbLI)`
  & + &::before {
    transform: revert;
  }
`;
