import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiGmail, SiNotion } from "react-icons/si";
import { ImMobile } from "react-icons/im";

function ContactIcons() {
  return (
    <Styled.wrapper>
        <SiGithub className="icons" onClick={() => window.open('https://github.com/Jakin-Kim')}/>
        <SiGmail className="icons" onClick={() => window.location.href='mailto:kimyagin94@gmail.com'}/>
        <SiNotion className="icons" onClick={() => window.open('https://broccoli-lover.notion.site/Broccoli-Lover-s-Story-9cc48b965a02455fb3e143c79aee951a')}/>
        <ImMobile className="icons" onClick={() => window.location.href='tel:010-4392-1691'}/>
    </Styled.wrapper>
  )
}

export default ContactIcons;

const Styled = {
    wrapper: styled.div`
        font-size: 3.5vmin;
        .icons {
            margin: 3.5vmin 1.5vmin;
            :hover {
                cursor: pointer;
                color: gray;
            }
        }
    `,
}