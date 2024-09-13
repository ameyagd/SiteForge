import type { TContentAlignment } from "./static-page-header.type";

import styled, { css } from "styled-components";

import { QUERIES } from "../../../helpers/breakpoints";

import { SectionInnerContainer } from "../app-components";
import { BaseH2 } from "@/components/section-heading/SectionHeading.styled";

type _TContentAlignment = Required<TContentAlignment>;

type TAlignment = {
  [P in keyof _TContentAlignment as `$${P}`]: _TContentAlignment[P];
};

export type TBaseContainer = typeof BaseContainer;

export const BaseContainer = styled.div`
  position: relative;
  min-height: 400px;
  background-color: var(--section-bg-color);
`;

export const InnerContainer = styled(SectionInnerContainer)`
  width: 100%;
`;

export const DefaultContainer = styled(BaseContainer)`
  justify-content: flex-start;
`;

export const TypeOneContainer = styled(BaseContainer)`
  --shape-dimension: 150px;
  position: relative;
  z-index: 0;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: var(--shape-dimension);
    width: var(--shape-dimension);
    z-index: -1;
  }

  &::after {
    transform: translate(50%, -50%);
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 1) 100%
    );
  }

  &::before {
    background-color: hsla(0, 0%, 100%, 0.5);
  }

  & > ${SectionInnerContainer} {
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: var(--shape-dimension);
      width: var(--shape-dimension);
      z-index: -1;
    }

    &::after {
      transform: translate(-50%, 50%);
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 1),
        hsla(0, 0%, 100%, 0) 100%
      );
    }

    &::before {
      background-color: hsla(0, 0%, 100%, 0.5);
    }
  }

  @media ${QUERIES.tabletAndBelow} {
    --shape-dimension: 100px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --shape-dimension: 75px;
  }
`;

// prettier-ignore
export const TypeTwoContainer = styled(BaseContainer)`
  --shape-bg-color: hsla(0, 0%, 100%, 1);
  --shape-width: 400px;
  --shape-height: 1000px;
  --before-translate-x: 50%;
  --before-translate-y: -85%;
  --after-translate-x: 0%;
  --after-translate-y: 50%;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: var(--shape-height);
    width: var(--shape-width);
    background-color: var(--shape-bg-color);
    z-index: -1;
    opacity: 0.5;
  }

  &::before {
    top: 0;
    left: 0;
    transform: translate(var(--before-translate-x), var(--before-translate-y)) rotate(30deg);
  }

  &:after {
    bottom: 0;
    right: 0;
    transform: translate(var(--after-translate-x), var(--after-translate-y)) rotate(30deg);
  }

  @media ${QUERIES.tabletAndBelow} {
    --before-translate-x: 0%;
    --before-translate-y: -90%;
    --after-translate-x: 40%;
    --after-translate-y: 50%;
  }

  @media ${QUERIES.mobileAndBelow} {
    --after-translate-x: 10%;
    --after-translate-y: 90%;
  }
`;

export const TypeThreeContainer = styled(BaseContainer)`
  & ${BaseH2} {
    --dimension: 82px;
    min-height: var(--dimension);

    & > strong {
      position: relative;
      z-index: 1;
      display: inline-block;
      margin-left: calc(var(--dimension) - 30px);

      &::before {
        content: "";
        position: absolute;
        height: var(--dimension);
        width: var(--dimension);
        z-index: -1;
        background-color: hsla(0, 0%, 100%);
        border-radius: 50%;
        top: 0;
        left: 0;
        transform: translate(-65%, -20%);
        opacity: 0.5;
      }
    }
  }
`;
