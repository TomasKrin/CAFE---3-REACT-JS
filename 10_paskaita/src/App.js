import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={""} element={""} />
      <Route path={""} element={""} />
    </Routes>
  );
}

export default App;
