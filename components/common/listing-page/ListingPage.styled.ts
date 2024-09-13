import styled from "styled-components";

export const NoSearchResult = styled.p`
  font-size: clamp(16px, 18px, 20px);
  margin-bottom: var(--heading-margin-bottom);
`;

export const SearchTitle = styled.p`
  font-size: var(--card-description-size); // src: styles.css
  margin-bottom: 16px;
  font-weight: 400;
`;

export const SearchText = styled.span`
  font-weight: 600;
`;
