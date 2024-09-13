import styled from "styled-components";
import { QUERIES } from "@/helpers/breakpoints";
import type { TCustomStyles } from "@/types";

export const ToogleBtnContainer = styled.div<TCustomStyles>`
  position: relative;
  margin-left: 16px;

  ${({ $customstyles }) => $customstyles}
`;

export const MobileBtnContainer = styled(ToogleBtnContainer)`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: block;
  }
`;

export const BaseInput = styled.input<TCustomStyles>`
  padding-inline: 18px;
  font-size: 1rem;
  color: var(--black);

  ${({ $customstyles }) => $customstyles + ";"}
`;

export const Form = styled.form<TCustomStyles>`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 0;
  overflow: hidden;
  border: 1px solid var(--primary-color);
  filter: drop-shadow(0px 2.5px 3.8px hsl(var(--shadow-color) / 0.7));

  & > button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const OpenForm = styled(Form)`
  margin-left: 16px;
  background-color: var(--form-bg-color);
  filter: revert;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

export const OpenFormInput = styled(BaseInput)`
  background-color: inherit;
  height: 100%;
`;

export const ToggleForm = styled(Form)<{ $isOpen: boolean }>`
  --height: 50px;
  position: absolute;
  right: 0;
  z-index: 10;
  transform: ${({ $isOpen }) => {
    return $isOpen
      ? "scale(1) translate(var(--toggle-form-tx), var(--toggle-form-ty))"
      : "scale(0) translate(var(--toggle-form-tx), var(--toggle-form-ty))";
  }};
  transform-origin: 90% 0%;
  transition: transform 300ms ease;
  will-change: transform;
  background-color: var(--form-bg-color);
  height: var(--height);
  border-radius: 4px;

  & > button {
    border-radius: 3px;
  }

  @media ${QUERIES.tabletAndBelow} {
    --height: 40px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --height: 32px;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const ToggleFormInput = styled(BaseInput)`
  height: 100%;
  background-color: inherit;
  outline: none;
`;
