import type { FC } from "react";
import type { TLayoutConfig } from "../layout.type";

import { Container, MainContentContainer } from "./LayoutTemplate1.styled";

export const LayoutTemplate1: FC<TLayoutConfig> = (props) => {
  return (
    <Container>
      {props.breadcrumb}
      <MainContentContainer
        $hasRightSection={props.rightSectionContent != null}
      >
        <div>{props.leftSectionContent}</div>
        <div>{props.rightSectionContent}</div>
      </MainContentContainer>
    </Container>
  );
};
