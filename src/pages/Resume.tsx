import styled, { css } from "styled-components";
import React, { useRef, useState } from "react";
import data from "../data/data.json";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents";
import ScrollIndicator from "../components/ScrollIndicator";
import { IntroType } from "../types/meta";
import theme from "../styles/theme";

function Resume() {  

  const { intro }: IntroType = data;
  const [isDark, setIsDark] = useState<boolean>(false);
  const changeMode = () => setIsDark(!isDark);

  return (
    <>
      <Styled.container isDark={isDark}>
        <ScrollIndicator/>
        <div className="dark-mode-wrapper">
          {isDark ? 
            <MdLightMode 
              className="light" 
              onClick={changeMode}/> : 
            <MdDarkMode 
              className="dark" 
              onClick={changeMode}/>}
        </div>
        <Header intro={intro}/>
        <NavBar isDark={isDark}/>
        <Contents/>
      </Styled.container>
    </>
  )
}

export default Resume;

const Styled = {
  container: styled.div<{isDark: boolean}>`
    margin-bottom: 100px;
    ${(props) => props.isDark 
      && css`
        background-color: black;
        color: white;
      `}

    .dark-mode-wrapper {
      display: flex;
      flex-direction: row-reverse;
      font-size: 3vmin;
      padding: 2.5vmin;
      .light, .dark {
        :hover{ 
          cursor: pointer; 
          color: gray;
        }
      }
    }
  `
};