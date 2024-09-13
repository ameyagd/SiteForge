import styled from "styled-components";
import { ArticlePicture } from "../../article-page/templates/template-2/Template2.styled";
import { SiteSection } from "@/components/common";

type TArticleOpenState = {
  $isArticleOpen: boolean;
};

export const ArticleContentSection = styled(SiteSection)<TArticleOpenState>`
  height: ${(props) => (props.$isArticleOpen ? "auto" : "62px")};
`;

export const ArticleContentContainer = styled.div<TArticleOpenState>`
  height: ${(props) => (props.$isArticleOpen ? "revert" : "0")};
  transform: scaleY(${(props) => (props.$isArticleOpen ? 1 : 0)});
  transform-origin: top center;
  transition: transform 300ms ease;

  & > div * {
    margin: revert;
    color: var(--text-color);
  }
`;

export const ReadMoreButton = styled.button<TArticleOpenState>`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  margin-block: 16px;
  color: var(--secondary-color);
  display: block;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    height: 12px;
    width: 12px;
    background-color: currentColor;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: ${(props) =>
      props.$isArticleOpen
        ? "translateY(-50%) rotate(0deg)"
        : "translateY(-50%) rotate(180deg)"};
    transition: transform 300ms ease;
    margin-left: 8px;
    position: absolute;
    top: 50%;
  }
`;

// prettier-ignore
export const MonetizationArticlePicture = styled(ArticlePicture)<{ $isOnTop: boolean; }>`
  margin-top: ${(props) => props.$isOnTop ? "0px" : "calc(2 * var(--layout-gap, 15px))"};
  margin-bottom: calc(2 * var(--layout-gap, 15px));
  width: 100%;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
