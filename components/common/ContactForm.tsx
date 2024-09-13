import { styled } from "styled-components";
import type { FC } from "react";
import type {
  TContactForm,
  TCustomStyles,
  TRecursivePartial,
  TShowBgConfig,
} from "../../types";

export type TContactFormStyleConfig = TRecursivePartial<{
  wrapper: string;
  title: string;
  emailField: string;
  bodyField: string;
  submitButton: string;
}>;

type TContactFormComponent = TContactForm &
  TShowBgConfig & {
    styleConfig?: TContactFormStyleConfig;
  };

export const ContactForm: FC<TContactFormComponent> = (props) => (
  <Form
    action={props.action}
    $showBg={props.showBg}
    $customstyles={props.styleConfig?.wrapper}
    onSubmit={(e) => e.preventDefault()}
  >
    <Title $customstyles={props.styleConfig?.title}>{props.formTitle}</Title>
    <FormField
      type="email"
      placeholder={props.emailPlaceholder}
      required
      $showBg={props.showBg}
      $customstyles={props.styleConfig?.emailField}
    />
    <FormField
      as="textarea"
      rows={4}
      placeholder={props.bodyPlaceholder}
      required
      $showBg={props.showBg}
      $customstyles={props.styleConfig?.bodyField}
    />
    <SubmitBtn $customstyles={props.styleConfig?.submitButton}>
      {props.buttonText}
    </SubmitBtn>
  </Form>
);

const Form = styled.form<TCustomStyles & { $showBg: boolean }>`
  margin: 0;
  & > * {
    margin-block: 16px;
  }
  ${({ $customstyles }) => $customstyles}
`;

const Title = styled.p<TCustomStyles>`
  font-weight: 500;
  ${({ $customstyles }) => $customstyles}
`;

// prettier-ignore
const FormField = styled.input<TCustomStyles & { $showBg: boolean }>`
  display: block;
  width: 100%;
  padding: 4px 8px;
  min-height: 40px;
  border: 1.5px solid ${({ $showBg }) => ($showBg ? "var(--primary-color)" : "transparent")};
  background-color: ${({ $showBg }) => $showBg ? "#fff" : "var(--section-bg-color)"};
  border-radius: 4px;
  
  ${({ $customstyles }) => $customstyles}
`;

const SubmitBtn = styled.button<TCustomStyles>`
  --min-height: 40px;
  display: block;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  transition: background-color 300ms ease, color 300ms ease;
  min-height: var(--min-height);
  line-height: var(--min-height);
  padding-inline: 16px;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
  }
  ${({ $customstyles }) => $customstyles}
`;
