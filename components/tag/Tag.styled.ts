import styled from "styled-components";
import { TTagProps } from "./tag.type";

export type TTag = {
  $variant: TTagProps["variant"];
  $textColor?: TTagProps["textColor"];
};

export const BaseTag = styled.p<TTag>`
  position: relative;
  font-weight: 700;
  font-size: var(--tag-font-size); // src: styles.css
  line-height: 21px;
  color: ${(props) => {
    return props.$textColor ? props.$textColor : "var(--primary-color)";
  }};
  text-transform: uppercase;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DotTag = styled(BaseTag)`
  padding-left: 18px;
  color: ${(props) => {
    return props.$textColor ? props.$textColor : "hsl(0deg, 0%, 0%)";
  }};

  &::before {
    --dimension: 10px;
    content: "";
    position: absolute;
    height: var(--dimension);
    width: var(--dimension);
    border-radius: 50%;
    background-color: ${(props) => props.$textColor || "var(--primary-color)"};
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
  }
`;

export const LongDashTag = styled(BaseTag)`
  padding-left: 28px;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const ShortDashTag = styled(LongDashTag)`
  padding-left: 24px;

  &::before {
    width: 12px;
  }
`;

export const ShortUnderlineTag = styled(BaseTag)`
  padding-bottom: 14px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 24px;
    background-color: currentColor;
    border-radius: 10px;
  }
`;
