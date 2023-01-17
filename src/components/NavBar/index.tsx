import styled, { css } from 'styled-components';
import data from '../../data/data.json';
import { useEffect, useState } from 'react';
import { DarkModeType, NavBarProps } from '../../types/meta';

function NavBar({isDark}: DarkModeType) {
  
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  const goToScroll = (name: string) => {
    const clicked = (document.querySelector("#" + name) as HTMLElement).offsetTop;
    window.scrollTo({ top: clicked - 135, behavior: 'smooth' });
  };
  
  const scrollFixed = () => {
    if(scrollY > 535) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFixed);
    return () => window.removeEventListener('scroll', scrollFixed);
  });

  return (
    <Styled.wrapper id="nav" isDark={isDark} isActive={scrollActive}>
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
  wrapper: styled.div<NavBarProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;

    .nav-btn {
      border-left: .5px solid gray;
      border-right: .5px solid gray;
      padding: 0 2vmin;
      font-size: 4vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }
    .skills {
      border-left: 2px solid gray;
    }

    .etc {
      border-right: 2px solid gray;
    }

     ${(props) => props.isActive 
        && css`
          width: 100vw;
          height: 6vh;
          background-color: #ffffff;
          position: fixed;
          top: 0;
          border-bottom: .5px solid lightgray;
          .nav-btn { font-size: 2.5vmin; }
        `}

      ${(props) => props.isDark 
        && css`
          background-color: black;
          color: white;
        `}
    `,
};