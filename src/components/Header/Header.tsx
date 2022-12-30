import styled from "styled-components";
import Profile from "./Profile";
import Intro from "./Intro";
import { IntroType } from '../../types/meta';

function Header({ intro }: IntroType) {
  return (
    <Styled.header>
        <Profile/>
        <Intro intro={intro}/>        
    </Styled.header>
  )
}

export default Header;

const Styled = {
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
  `,
}