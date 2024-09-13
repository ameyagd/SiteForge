import type { FC } from "react";
import type {
  TComponentWithLimitedArticleData,
  TCustomStyles,
  TListConfig,
  TRecursivePartial,
} from "@/types";

import { styled } from "styled-components";

import NLink from "next/link";

type TListStyleConfig = TRecursivePartial<{
  wrapper: string;
  listItem: string;
  link: string;
}>;

// prettier-ignore
type TList = {
  styleConfig?: TListStyleConfig;
} & TListConfig
  & TComponentWithLimitedArticleData;

export const List: FC<TList> = (props) => {
  return (
    <ListWrapper $customstyles={props.styleConfig?.wrapper}>
      {props.articles.map((article, i) => (
        <ListItem key={i} $customstyles={props.styleConfig?.listItem}>
          <Link
            href={`/${article.post_name}`}
            $customstyles={props.styleConfig?.link}
          >
            {article.title}
          </Link>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul<TCustomStyles>`
  margin-block: -8px;
  ${({ $customstyles }) => $customstyles}
`;

const ListItem = styled.li<TCustomStyles>`
  position: relative;
  padding-left: 20px;
  margin-block: 8px;

  &::before {
    --dimension: 8px;
    content: "";
    position: absolute;
    top: 1em;
    left: 2px;
    transform: translateY(-90%);
    width: var(--dimension);
    height: var(--dimension);
    background-color: var(--primary-color);
    clip-path: circle(50% at 50% 50%);
  }
  ${({ $customstyles }) => $customstyles}
`;

const Link = styled(NLink)<TCustomStyles>`
  font-weight: 500;
  transition: color 300ms ease;
  &:hover {
    color: var(--primary-color);
  }
  ${({ $customstyles }) => $customstyles}
`;
