import type { FC } from "react";
import type { TContactFormProps } from "./ContactForm.type";

import { Field } from "./Field";
import { EmailLogo, MessageLogo, NameLogo, SubjectLogo } from "./Icons";

import { Form, Label, MessageLabel, SubmitButton } from "./ContactForm.styled";

export const ContactForm: FC<TContactFormProps> = (props) => {
  return (
    <Form
      $customstyles={props.styleConfig?.default?.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Field
        fieldId="name"
        fieldLabel="Name"
        fieldPlaceholder="Enter your fullname"
        inputType="input"
        labelElement={Label}
        logo={NameLogo}
        showLabel={props.showLabel}
        showIcon={props.showIcon}
        styleConfig={props.styleConfig}
      />
      <Field
        fieldId="email"
        fieldLabel="Email"
        fieldPlaceholder="Enter your email address"
        inputType="input"
        labelElement={Label}
        logo={EmailLogo}
        showLabel={props.showLabel}
        showIcon={props.showIcon}
        styleConfig={props.styleConfig}
      />
      <Field
        fieldId="subject"
        fieldLabel="Subject"
        fieldPlaceholder="Write the subject here"
        inputType="input"
        labelElement={Label}
        logo={SubjectLogo}
        showLabel={props.showLabel}
        showIcon={props.showIcon}
        styleConfig={props.styleConfig}
      />
      <Field
        fieldId="message"
        fieldLabel="Message"
        fieldPlaceholder="Write your message here"
        inputType="textarea"
        labelElement={MessageLabel}
        logo={MessageLogo}
        showLabel={props.showLabel}
        showIcon={props.showIcon}
        styleConfig={props.styleConfig}
      />
      <SubmitButton>Send Message</SubmitButton>
    </Form>
  );
};
