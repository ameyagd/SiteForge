import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  display: grid;
  place-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: hsl(215, 13%, 34%);
  text-transform: capitalize;
  display: block;
  width: fit-content;
  cursor: pointer;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid hsl(220, 13%, 91%);
  border-radius: 4px;
  padding: 4px;
  background-color: hsl(220, 14%, 96%);
  height: 32px;
  font-size: 12px;

  &:focus {
    background-color: hsl(0, 100%, 100%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SignInButton = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  padding-inline: 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
  color: hsl(0, 100%, 100%);
  background-color: hsl(221, 83%, 53%);
  transition: background-color 300ms ease;

  &:hover {
    background-color: hsl(224, 76.3%, 48%);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: hsl(0, 84%, 60%);
  text-align: center;
`;
