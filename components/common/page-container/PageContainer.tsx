import type { FC } from "react";
import type { TPageContainer } from "./page-container.type";

import { Poppins } from "next/font/google";

import { Container } from "./PageContainer.styled";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const PageContainer: FC<TPageContainer> = (props) => {
  return (
    <Container
      $appHorizontalPadding={props.appHorizontalPadding}
      $backgroundColor={props.backgroundColor}
      $marginBottom={props.marginBottom}
      $marginTop={props.marginTop}
      $maxWidth={props.maxWidth}
      $primary={props.primary}
      $secondary={props.secondary}
      $cardRoundness={props.cardRoundness}
      $cardShadow={props.cardShadow}
      className={poppins.className}
    >
      {props.children}
    </Container>
  );
};
