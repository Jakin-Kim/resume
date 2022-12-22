import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiGmail, SiNotion } from "react-icons/si";
import { ImMobile } from "react-icons/im";

function Icons() {
  return (
    <Styled.wrapper>
        <SiGithub className="icons"/>
        <SiGmail className="icons"/>
        <SiNotion className="icons"/>
        <ImMobile className="icons"/>
    </Styled.wrapper>
  )
}

export default Icons;

const Styled = {
    wrapper: styled.div`
        font-size: 3.5vmin;
        margin: 3.5vmin 1.5vmin;
        :hover {
          cursor: pointer;
        }
    `
}