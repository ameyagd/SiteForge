import Link from "next/link";
import styled from "styled-components";

export const ArticleTitle = styled.h1`
  font-size: clamp(30px, 2vw, 40px);
  font-weight: 700;
  color: var(--primary-color);
`;

export const ArticleContentContainer = styled.div`
  & > * {
    margin: revert;
  }
`;

export const ArticleNavigatorContainer = styled.div`
  position: relative;
  padding-top: 30px;
  margin-block: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 100%;
    transform: translateX(-50%);
    height: 1px;
    background: hsla(var(--primary-color-raw-hsl) / 0.3);
  }
`;

// prettier-ignore
export const ArticleNavigator = styled(Link)<{ $showNavigator: boolean }>`
  display: block;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  color: var(--black);
  transition: color 300ms ease;
  visibility: ${({ $showNavigator }) => $showNavigator ? "visible" : "hidden"};

  &:hover {
    color: var(--primary-color);
  }
`;
