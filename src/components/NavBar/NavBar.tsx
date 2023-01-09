import styled from 'styled-components';
import data from '../../data/data.json';
import { useState, useEffect, useRef } from 'react';
// import { useScrollBy } from 'react-use-window-scroll';

function NavBar() {
  const { nav } = data;

  const goToScroll = (name: string) => {
    const clicked = (document.querySelector("#" + name) as HTMLElement).offsetTop;
    window.scrollTo({ top: clicked, behavior: 'smooth' });
  };
  return (
    <Styled.wrapper >
        <div className='nav-btn skills' onClick={() => goToScroll('skill')}>스킬</div>
        <div className='nav-btn' onClick={() => goToScroll('project')}>프로젝트</div>
        <div className='nav-btn' onClick={() => goToScroll('career')}>경력</div>
        <div className='nav-btn' onClick={() => goToScroll('activity')}>활동</div>
        <div className='nav-btn' onClick={() => goToScroll('education')}>교육</div>
        <div className='nav-btn etc' onClick={() => goToScroll('etc')}>기타</div>
    </Styled.wrapper>
  )
}

export default NavBar;

const Styled = {
  wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .nav-btn {
      border-left: .5px solid black;
      border-right: .5px solid black;
      padding: 0 2vmin;
      font-size: 4vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }
  `,
};