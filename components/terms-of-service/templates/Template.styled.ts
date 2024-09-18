import { SectionInnerContainer } from "@/components/common/app-components";
import type { TCustomStyles } from "@/types";
import Image from "next/image";
import styled from "styled-components";

export const InnerContainer = styled(SectionInnerContainer)``;

export const Picture = styled.picture<TCustomStyles>`
  display: block;
  border-radius: var(--global-card-roundness);
  box-shadow: var(--global-card-shadow);
  margin-bottom: var(--heading-margin-bottom);
  overflow: hidden;

  ${({ $customstyles }) => $customstyles}
`;

export const ContainerImg = styled(Image)<TCustomStyles>`
  height: 100%;
  width: 100%;
  object-fit: cover;

  ${({ $customstyles }) => $customstyles}
`;
