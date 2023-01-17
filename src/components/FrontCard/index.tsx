import React from 'react';
import styled from 'styled-components';

function FrontCard() {
  return (
    <Styled.front>
        <div className='title'>Jakin Kim</div>
        <div className='title'>Resume</div>
        <div className='content'>Hi, I'm Jakin,</div>
        <div className='content'>Front-End Developer &#x1F60A;</div>
    </Styled.front>
  )
}

export default FrontCard;

const Styled = {
    front: styled.div`
    position: absolute;
    display:flex;
    flex-direction: column;
    align-items: center;

    // card flip
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    .title {
      padding-bottom: 10px;
      font-weight: 900;
      font-family: 'Nanumsquare', sans-serif;
      font-size: 5vmin;
    }

    .content{
      font-family: 'Nanumsquare', sans-serif;
      font-size: 2vmin;
      padding-bottom: 5px;
    }
  `,
}