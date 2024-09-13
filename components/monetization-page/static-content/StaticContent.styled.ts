import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--text-color);
`;

export const StaticContentWrapper = styled.div`
  & p {
    margin: revert;
    color: var(--text-color);
  }
`;
