import styled from "styled-components";
import { HTMLAttributes, ReactNode } from "react";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #9575cd;
  padding: 8px 16px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  &:hover {
    background-color: #aa90d7;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <PrimaryButton {...rest}>{children}</PrimaryButton>;
};

export default Button;
