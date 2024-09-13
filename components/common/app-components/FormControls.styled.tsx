import Link from "next/link";
import { keyframes, styled } from "styled-components";

export const FormLabel = styled.label<{ $showDefaultCursor?: boolean }>`
  font-size: calc(12 / 16 * 1rem);
  font-weight: 500;
  color: var(--gray-600);
  text-transform: capitalize;
  display: block;
  width: fit-content;
  cursor: ${({ $showDefaultCursor }) =>
    $showDefaultCursor ? "default" : "pointer"};
`;

export const BaseInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid var(--gray-200);
  border-radius: 0.25rem /* 4px */;
  padding: 0.25rem /* 4px */;
  background-color: var(--gray-100);
  height: 2rem /* 32px */;
  font-size: 0.75rem /* 12px */;

  &:focus {
    background-color: var(--white);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FormWhiteButton = styled.button`
  margin-top: 0.5rem /* 8px */;
  margin-bottom: 0.5rem /* 8px */;
  border: 1px solid;
  border-color: var(--gray-200);
  background-color: var(--white);
  border-radius: 0.25rem /* 4px */;
  height: 2rem /* 32px */;
  padding-left: 0.625rem /* 10px */;
  padding-right: 0.625rem /* 10px */;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  transition: background-color 300ms ease;
  outline-color: var(--gray-400);

  &:hover {
    background-color: var(--gray-100);
  }
`;

export const DangerBtn = styled(FormWhiteButton)`
  color: var(--red-500);
  background-color: var(--red-50);
  border-color: var(--red-500);

  &:hover {
    background-color: var(--red-100);
  }
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding-left: 0.25rem /* 4px */;
  padding-right: 0.25rem /* 4px */;
  border: 1px solid var(--gray-200);
  border-radius: 0.25rem /* 4px */;
  background-color: var(--gray-100);
  font-size: calc(12 / 16 * 1rem);
  line-height: 1.5rem /* 24px */;
  outline-color: var(--gray-400);

  &:focus {
    background-color: var(--white);
  }
`;

export const FieldContainer = styled.div`
  margin-block: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BaseSection = styled.div`
  padding-top: 12px;
`;

// prettier-ignore
export const SectionWithBottomBorder = styled(BaseSection)<{ $withBottomPadding?: boolean; }>`
  border-bottom: 1px solid var(--gray-200);
  padding-bottom: ${({ $withBottomPadding }) => $withBottomPadding ? "12px" : 0};
`;

export const SectionTitle = styled.span`
  font-size: calc(12 / 16 * 1rem);
  padding: 4px 8px;
  background-color: var(--gray-200);
  border-radius: 4px;
  border-bottom: 3px solid var(--gray-400);
  text-transform: capitalize;
`;

/** @description {mostly used in component's editor component} */
export const FieldMarginContainer = styled.div<{ $withBottomBorder?: boolean }>`
  margin-top: 0.75rem /* 12px */;
  margin-bottom: 0.75rem /* 12px */;
  border-bottom: ${({ $withBottomBorder }) => {
    return $withBottomBorder ? "1px solid var(--gray-200)" : "none";
  }};
  padding-bottom: ${({ $withBottomBorder }) => {
    return $withBottomBorder ? "8px" : 0;
  }};
`;

export const LabelCheckboxContainer = styled(FieldMarginContainer)`
  display: flex;
  gap: 0.5rem /* 8px */;
`;

export const BgColorDiv = styled.div<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.078);
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

export const ThemeConfigLink = styled(Link)`
  display: block;
  padding-inline: 4px;
  color: var(--white);
  background-color: var(--blue-600);
  font-size: 11px;
  line-height: 20px;
  height: 20px;
  border-radius: 4px;
  width: fit-content;
`;

const rotate = keyframes`
  100% {
    rotate: 1turn;
  }
`;

export const Spinner = styled.span<{
  $sizeInPx: number;
  $borderWidth: number;
  $showSpinner?: boolean;
}>`
  --dimension: ${({ $showSpinner, $sizeInPx }) => {
    return $showSpinner ? `${$sizeInPx}px;` : "0px";
  }}
  --spinner-border-width: ${({ $showSpinner, $borderWidth }) => {
    return $showSpinner ? `${$borderWidth}px;` : "0px";
  }}
  display: block;
  height: var(--dimension);
  width: var(--dimension);
  border: var(--spinner-border-width) solid var(--white);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s ease infinite;
  transform: scale(${({ $showSpinner }) => ($showSpinner ? 1 : 0)});
  will-change: width;
  transition: width 200ms ease, transform 300ms ease;
`;
