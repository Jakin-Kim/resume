import styled from "styled-components";
import { useState } from "react";
import data from "../data/data.json";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Contents from "../components/Contents";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import { IntroType } from "../types/meta";


function Resume() {  

  const { intro }: IntroType = data;
  

  return (
    <>
      <Styled.container>
        <ScrollIndicator/>
        <div className="dark-mode">
          <MdDarkMode/>
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
    .dark-mode {
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