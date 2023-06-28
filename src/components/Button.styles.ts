import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin: 0 1rem;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`;
