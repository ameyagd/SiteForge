import { SectionInnerContainer } from "@/components/common/app-components";
import type { TCustomStyles } from "@/types";
import Image from "next/image";
import styled from "styled-components";

export const InnerContainer = styled(SectionInnerContainer)``;

export const ContainerImg = styled(Image)<TCustomStyles>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${({ $customstyles }) => $customstyles}
`;

export const Picture = styled.picture<TCustomStyles>`
  display: block;
  border-radius: 4px;
  overflow: hidden;
  min-height: 320px;
  border-radius: var(--global-card-roundness);
  box-shadow: var(--global-card-shadow);
  ${({ $customstyles }) => $customstyles}
`;

export const ContentContainer = styled.div<TCustomStyles>`
  margin-block: -16px;
  p {
    margin-block: 16px;
  }
`;
