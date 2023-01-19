import CustomButton from "../CustomButton/CustomButton";
import { Email, H2, ItemContainer, BtnContainer } from "./StyledItem";

const GridItem = ({ name, date, email }) => {
  return (
    <ItemContainer>
      <H2>{name}</H2>
      <p>{new Date(date).toLocaleDateString("lt")}</p>
      <Email>{email}</Email>
      <BtnContainer>
        <CustomButton variant="contained">View Log</CustomButton>
        <CustomButton variant="outlined">Delete</CustomButton>
      </BtnContainer>
    </ItemContainer>
  );
};

export default GridItem;
