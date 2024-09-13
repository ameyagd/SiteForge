import { css, styled } from "styled-components";
import { ArticleTitle } from "../styles/Common.styled";
import Image from "next/image";

export const ArticlePicture = styled.picture`
  position: relative;
  display: block;
  overflow: hidden;
  height: 520px;
  border: 1px solid var(--border-color);
  border-radius: var(--global-card-roundness);
  box-shadow: var(--global-card-shadow);
`;

export const ArticleImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// prettier-ignore
export const ArticleHeaderContainer = styled.div<{ $isArticlePictureOnTop: boolean }>`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--layout-gap, 15px));
  margin-bottom: calc(2 * var(--layout-gap, 15px));

  ${props => {
    return css`
      margin-top: ${props.$isArticlePictureOnTop ? "var(--layout-gap, 15px);" : 0};
      & > ${ArticlePicture} {
        order: ${props.$isArticlePictureOnTop ? 1 : 2};
      }
      & > ${ArticleTitle} {
        margin: 0;
        order: ${props.$isArticlePictureOnTop ? 2 : 1};
      }
    `;
  }}
`;
