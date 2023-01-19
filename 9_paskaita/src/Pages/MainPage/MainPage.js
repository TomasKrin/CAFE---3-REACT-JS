import GridTable from "../../Components/GridTable/GridTable";
import TopBar from "../../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { PetsAPI } from "../../Conts/conts";
import { H1, MainPageContainer } from "./StyledMainPage";

const MainPage = () => {
  const [pets, setPets] = useState(undefined);
  useEffect(() => {
    fetch(PetsAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("state", pets);
  return (
    <div>
      <TopBar />
      <MainPageContainer>
        <H1>Pet List</H1>
        {pets && <GridTable arr={pets} />}
      </MainPageContainer>
    </div>
  );
};

export default MainPage;
