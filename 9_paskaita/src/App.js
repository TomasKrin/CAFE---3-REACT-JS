import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AddPetPage from "./Pages/AddPetPage/AddPetPage";

import PetsLogPage from "./Pages/PetsLogPage/PetsLogPage";
import { AddNewPetRoute, MainPageRoute } from "./Conts/routes";

function App() {
  return (
    <Routes>
      <Route path={MainPageRoute} element={<MainPage />} />
      <Route path={AddNewPetRoute} element={<AddPetPage />} />
      <Route path={`/logs/:name/:id`} element={<PetsLogPage />} />
    </Routes>
  );
}

export default App;
