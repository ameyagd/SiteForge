import { styled } from "styled-components";
import type { TCustomStyles } from "../../types";

export const PageTextContainer = styled.div<TCustomStyles>`
  .editor-text-bold {
    font-weight: bold;
  }

  .editor-text-italic {
    font-style: italic;
  }

  .editor-text-underline {
    text-decoration: underline;
  }

  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  .editor-text-underlineStrikethrough {
    text-decoration: underline line-through;
  }

  .editor-link {
    color: var(--blue-700);
    text-decoration: none;
  }

  .editor-paragraph {
    margin-bottom: 8px;
    position: relative;
  }

  .editor-heading-h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .editor-heading-h2 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
  }

  .editor-heading-h3 {
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
  }

  .editor-quote {
    margin-left: 20px;
    font-size: 15px;
    color: var(--gray-500);
    border-left-color: var(--gray-200);
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 16px;
  }

  .editor-list-ol {
    margin-left: 16px;
    list-style: decimal;
  }

  .editor-list-ul {
    margin-left: 16px;
    list-style: disc;
  }

  .editor-nested-listitem {
    list-style-type: none;
  }

  ${({ $customstyles }) => $customstyles}
`;
