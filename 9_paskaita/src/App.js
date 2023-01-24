import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AddPetPage from "./Pages/AddPetPage/AddPetPage";
import { MainPageRoute, AddNewPetRoute } from "./Routes/routes";
import PetsLogPage from "./Pages/PetsLogPage/PetsLogPage";

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
