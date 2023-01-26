import styled from "styled-components";

const PrimaryHeroDiv = styled.div`
  background-color: #1a746b;
  padding: 35px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const PrimaryTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const PrimarySubtitle = styled.p`
  margin: 0;
`;

const SecondaryHeroDiv = styled.div`
  background-color: #14a37f;
  padding: 30px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const SecondaryTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

const SecondarySubtitle = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

const Hero = ({ type, title, subtitle }) => {
  if (type === "primary") {
    return (
      <PrimaryHeroDiv>
        <PrimaryTitle>{title}</PrimaryTitle>
        <PrimarySubtitle>{subtitle}</PrimarySubtitle>
      </PrimaryHeroDiv>
    );
  }

  if (type === "secondary") {
    return (
      <SecondaryHeroDiv>
        <SecondaryTitle>{title}</SecondaryTitle>
        <SecondarySubtitle>{subtitle}</SecondarySubtitle>
      </SecondaryHeroDiv>
    );
  }
};

export default Hero;
