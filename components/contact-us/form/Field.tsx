import type { FC } from "react";
import type { TContactFormProps } from "./ContactForm.type";

import { useState } from "react";
import { getCustomStyle } from "./field.helper";

import {
  FieldContainer,
  FieldText,
  Input,
  Label,
  LogoContainer,
  Textarea,
} from "./ContactForm.styled";

// prettier-ignore
type TFieldProps = Required<Pick<TContactFormProps, "showLabel" | "showIcon">> &
  Pick<TContactFormProps, "styleConfig"> & {
    // added separately to keep it optional
    fieldId: string;
    fieldLabel: string;
    fieldPlaceholder: string;
    logo: JSX.Element;
    labelElement: typeof Label;
    inputType: "input" | "textarea";
  };

export const Field: FC<TFieldProps> = (props) => {
  const defaultStyles = props.styleConfig?.default;
  const activeStyles = props.styleConfig?.active;
  const customStyles = getCustomStyle(defaultStyles, activeStyles);

  const [isActive, setIsActive] = useState(false);
  const Label = props.labelElement;

  return (
    <Label
      htmlFor={props.fieldId}
      $showLabel={props.showLabel}
      $customstyles={customStyles(isActive, "label")}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      {props.showIcon ? (
        <LogoContainer $customstyles={customStyles(isActive, "logoContainer")}>
          {props.logo}
        </LogoContainer>
      ) : null}
      <FieldContainer $customstyles={customStyles(isActive, "fieldContainer")}>
        {props.showLabel ? (
          <FieldText $customstyles={customStyles(isActive, "fieldText")}>
            {props.fieldLabel}
          </FieldText>
        ) : null}
        {props.inputType === "input" ? (
          <Input
            type="text"
            id={props.fieldId}
            $customstyles={customStyles(isActive, "fieldInput")}
            placeholder={props.fieldPlaceholder}
            required
            onBlur={() => setIsActive(false)}
            onFocus={() => setIsActive(true)}
          />
        ) : (
          <Textarea
            $customstyles={customStyles(isActive, "messageTextArea")}
            id={props.fieldId}
            placeholder={props.fieldPlaceholder}
            required
            onBlur={() => setIsActive(false)}
            onFocus={() => setIsActive(true)}
          />
        )}
      </FieldContainer>
    </Label>
  );
};
