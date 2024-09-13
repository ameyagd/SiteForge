import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  margin-block: 32px 16px;
`;

export const Picture = styled.picture`
  display: block;
  height: 70px;
  width: fit-content;
`;

export const AddressImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MailLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
`;
