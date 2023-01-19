import logo from "../TopBar/logo.png";
import {
  Logo,
  LogoContainer,
  LogoText,
  Nav,
  NavItem,
  NavItemList,
} from "./StyledTopBar";

const TopBar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="Vet Bee Logo" />
        <LogoText>vetbee</LogoText>
      </LogoContainer>
      <NavItemList>
        <NavItem>Pets</NavItem>
        <NavItem>Medications</NavItem>
      </NavItemList>
    </Nav>
  );
};

export default TopBar;
