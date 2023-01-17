import styled, { css } from "styled-components";
import { useState } from "react";
import data from "../data/data.json";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents";
import ScrollIndicator from "../components/ScrollIndicator";
import { IntroType } from "../types/meta";


function Resume() {  

  const { intro }: IntroType = data;
  const [isDark, setIsDark] = useState<boolean>(false);
  const changeMode = () => setIsDark(!isDark);

  return (
    <>
      <Styled.container className={`${isDark && "dark-mode"}`}>
        <ScrollIndicator/>
        <div className="dark-mode-wrapper">
          {isDark ? <MdLightMode onClick={changeMode}/> : <MdDarkMode onClick={changeMode}/>}
        </div>

        <Header intro={intro}/>
        <NavBar/>
        <Contents/>

      </Styled.container>
    </>
  )
}

export default Resume;

const Styled = {
  container: styled.div`
    .dark-mode-wrapper {
      display: flex;
      flex-direction: row-reverse;
      font-size: 3vmin;
      margin: 2.5vmin;
      > :hover{ 
        cursor: pointer; 
        color: gray;
      }
    }
  `
};