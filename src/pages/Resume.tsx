import styled from "styled-components";
import { useState } from "react";
import data from "../data/data.json";
import { SiGithub, SiGmail, SiNotion } from "react-icons/si";
import { ImMobile } from "react-icons/im";
import { MdDarkMode, MdLightMode } from "react-icons/md"
function Resume() {
  const [ isDark, setIsDark ] = useState<boolean>(false);
  const { intro } = data;

  return (
    <>
      <Styled.container>
        <div className="dark-mode">
          {isDark ? <MdLightMode/> : <MdDarkMode/>}
        </div>
        <Styled.header>
          <div className="profile">
            <img src="./images/profile.png" alt="profile"/>
            <div>
              <SiGithub className="icons"/>
              <SiGmail className="icons"/>
              <SiNotion className="icons"/>
              <ImMobile className="icons"/>
            </div>
          </div>
          <div className="intro">
            <h1>{intro.title}</h1>
            <ul>{intro.content.map(items => <li key={items}>{items}</li>)}</ul>
          </div>
        </Styled.header>
        <Styled.nav>

        </Styled.nav>
        <Styled.content>

        </Styled.content>
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
    


  `,

  header: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 75%;
        height: 75%;
        @media (max-width: 650px) {
          width: 55%;
          height: 55%;
        }
      }
     
      .icons {
        font-size: 3.5vmin;
        margin: 3.5vmin 1.5vmin;
        :hover {
          cursor: pointer;
        }
      }
    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 7vmin;
      font-family: 'Nanumsquare', sans-serif;
      font-size: 2vmin;
      li {
        margin: 1.5vmin 0;
      }
    }
  `,

  nav: styled.nav`

  `,

  content: styled.div`
    
  `,
};