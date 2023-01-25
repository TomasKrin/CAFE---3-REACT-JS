import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../components/TopBar.css";
import { FaMoon, FaSun } from "react-icons/fa";

const TopBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log(darkMode);
  return (
    <nav className="topbar">
      <h2 className="logo">Tomas..</h2>
      <ul>
        <li>Home</li>
        <li>My Projects</li>
        <li>Contact Me</li>
        <li>
          {darkMode ? (
            <FaMoon onClick={toggleDarkMode} />
          ) : (
            <FaSun onClick={toggleDarkMode} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
