import React, { useState } from 'react'
import styled from 'styled-components';

function ScrollIndicator() {

  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <>
      <Styled.container>
        <div id="progress-bar" style={{width: `${scroll}%`}}/>
      </Styled.container>
    </>
  )
}

export default ScrollIndicator;

const Styled = {
  container: styled.div`
    background-color: lightgray;
    height: 5px;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;

    #progress-bar {
      height: 5px;
      background-color: skyblue;
    }
  `,
}