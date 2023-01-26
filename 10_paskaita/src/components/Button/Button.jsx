import styled from "styled-components";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #a89583;
  padding: 17px 30px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #968472;
  }
`;

const SecondaryButton = styled.button`
  border: 2px solid #a89583;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 17px 30px;
  color: #a89583;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f9f9f9f9;
  }
`;

const Button = ({ children, type, onClick }) => {
  if (type === `primary`) {
    return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
  }
  if (type === `secondary`) {
    return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
  }
};

export default Button;
