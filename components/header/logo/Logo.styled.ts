import styled from "styled-components";
import Link from "next/link";

import { QUERIES } from "@/helpers/breakpoints";

import type { TCustomStyles, TLogoStyles, TRecursivePartial } from "@/types";

export const LogoContainer = styled.div<TCustomStyles>`
  --logo-width: 175px;
  max-width: var(--logo-width);

  @media ${QUERIES.mobileAndBelow} {
    --logo-width: 145px;
  }

  ${({ $customstyles }) => $customstyles}
`;

export const LogoLink = styled(Link)<TRecursivePartial<TLogoStyles>>`
  display: block;
  width: 100%;
  height: 100%;
  ${({ $logoContainerStyles }) => $logoContainerStyles}

  & > svg {
    display: block;
    width: 100%;
    height: auto;
    ${({ $logoStyles }) => $logoStyles}
  }
`;
