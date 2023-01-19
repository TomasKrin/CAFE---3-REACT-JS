import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/"} element={""} />
      <Route path={"/"} element={""} />
      <Route path={"/"} element={""} />
    </Routes>
  );
}

export default App;
