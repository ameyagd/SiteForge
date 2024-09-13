import Link from "next/link";
import styled from "styled-components";

export const ResultContainer = styled.div`
  padding-block: 12px;
`;

export const ResultTitle = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResultLink = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-color);
`;

export const ResultDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: var(--text-color);
`;
