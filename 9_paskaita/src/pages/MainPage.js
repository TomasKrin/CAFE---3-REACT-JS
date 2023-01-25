import React from "react";
import TopBar from "../components/TopBar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { mainDarkColor, mainColor } from "../consts/color";
import styled from "styled-components";

const getMainColor = (darkMode) => {
  return darkMode ? mainDarkColor : mainColor;
};

const MainPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: getMainColor(darkMode), minHeight: `100vh` }}
    >
      <TopBar />
      <p>Hello</p>
    </div>
  );
};

export default MainPage;
