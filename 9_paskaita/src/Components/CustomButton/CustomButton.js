import { ButtonContained, ButtonOutlined } from "./StyledButton";

const CustomButton = ({ variant, children }) => {
  if (variant === "outlined") {
    return <ButtonOutlined>{children}</ButtonOutlined>;
  } else {
    return <ButtonContained>{children}</ButtonContained>;
  }
};

export default CustomButton;
