import type { FC } from "react";

import { Container, AddressImage, MailLink, Picture } from "./Address.styled";

type TProps = {
  siteName: string;
  addressImagePath: string;
};

export const Address: FC<TProps> = (props) => {
  const { addressImagePath, siteName } = props;

  return (
    <Container>
      <strong>Write to us</strong>
      <p>
        {siteName[0].toUpperCase()}
        {siteName.slice(1)}
      </p>
      <MailLink href={`mailto:contact@${siteName.toLowerCase()}`}>
        contact@{siteName}
      </MailLink>
      <Picture>
        <AddressImage
          src={addressImagePath}
          height={70}
          width={190}
          alt="Company Address"
        />
      </Picture>
    </Container>
  );
};
