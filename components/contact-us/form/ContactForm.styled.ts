import type { TCustomStyles } from "@/types";

import styled from "styled-components";

type TLabel = {
  $showLabel: boolean;
} & TCustomStyles;

export const Label = styled.label<TLabel>`
  display: flex;
  align-items: center;
  gap: var(--gap);
  border-radius: var(--global-card-roundness);
  border: 1px solid;
  border-color: transparent;
  transition-property: background-color, border-color;
  transition-duration: 300ms;
  transition-timing-function: ease;
  cursor: pointer;

  ${(props) => props.$customstyles}
`;

export const LogoContainer = styled.picture<TCustomStyles>`
  ${(props) => props.$customstyles}
`;

export const MessageLabel = styled(Label)`
  align-items: flex-start;

  & > ${LogoContainer} {
    margin-top: ${(props) => (props.$showLabel ? "var(--gap)" : "2px")};
  }
`;

export const FieldContainer = styled.div<TCustomStyles>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  ${(props) => props.$customstyles}
`;

export const FieldText = styled.span<TCustomStyles>`
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;

  ${(props) => props.$customstyles}
`;

export const Input = styled.input<TCustomStyles>`
  width: 100%;

  ${(props) => props.$customstyles}
`;

export const Textarea = styled.textarea<TCustomStyles>`
  height: 30px;
  line-height: 30px;
  resize: vertical;

  ${(props) => props.$customstyles}
`;

export const SubmitButton = styled.button<TCustomStyles>`
  border-radius: var(--global-card-roundness);
  min-height: 62px;
  padding-inline: var(--gap);
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: var(--primary-text-color);
  background-color: var(--primary-color);
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 300ms;
  outline-color: hsla(var(--secondary-color-raw-hsl) / 0.5);

  &:focus,
  &:hover {
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
  }

  ${(props) => props.$customstyles}
`;

export const Form = styled.form<TCustomStyles>`
  --gap: 24px;
  display: grid;
  gap: var(--gap);
  margin: 0;

  ${(props) => props.$customstyles}
`;
