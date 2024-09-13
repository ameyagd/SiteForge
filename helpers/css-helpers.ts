import { css } from "styled-components";

export function getTruncateTextCss(
  lineHeight: number = 1.5,
  isFixedHeight = true
) {
  const commonStyle = css`
    display: -webkit-box;
    -webkit-line-clamp: var(--line-count, 2);
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: ${lineHeight}em;
    text-overflow: ellipsis;
  `;
  return isFixedHeight
    ? css`
        ${commonStyle}
        height: calc(var(--line-count, 2) * ${lineHeight}em);
      `
    : css`
        ${commonStyle}
        max-height: calc(var(--line-count, 2) * ${lineHeight}em);
      `;
}
