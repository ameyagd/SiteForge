import type { FC } from "react";
import type { TGenericEmailCapture } from "./generic-email-capture.type";
import type { TCustomStyles } from "@/types";

import styled from "styled-components";

export const GenericEmailCapture: FC<TGenericEmailCapture> = (props) => {
  return (
    <>
      {props.sectionHeadingComponent}
      <Form
        $customstyles={props.styleConfig?.emailCaptureContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        <EmailInput
          type="email"
          placeholder={props.config.emailIdPlaceholder}
          $customstyles={props.styleConfig?.emailAddressInput}
          required
        />
        <SubscribeButton
          type="button"
          $customstyles={props.styleConfig?.subscribeBtn}
        >
          {props.config.subscribeBtnText}
        </SubscribeButton>
      </Form>
    </>
  );
};

const Form = styled.form<TCustomStyles>`
  display: flex;
  align-items: center;
  margin: 0;
  ${({ $customstyles }) => $customstyles}
`;

const EmailInput = styled.input<TCustomStyles>`
  border: 1px solid var(--primary-color);
  flex: 1;
  ${({ $customstyles }) => $customstyles}
`;

const SubscribeButton = styled.button<TCustomStyles>`
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  transition: background-color 300ms ease;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
  }

  ${({ $customstyles }) => $customstyles}
`;
