import styled from 'styled-components';
import data from '../../data/data.json';
import { useState, useEffect, useRef } from 'react';
// import { useScrollBy } from 'react-use-window-scroll';

function NavBar() {
  const { nav } = data;
  const [hideElement, setHideElement] = useState(false);
  const scrollRef = useRef(null);
 
  // const yScrollEvent = () => {
  //   const scroll = scrollRef.current?.getBoundingClientRect();
  //   console.log(scroll);
  //   setHideElement(scroll!.top <= -100);
  // };

  // useEffect(() => {
  //   if (!scrollRef.current) return;
  //   window.addEventListener("scroll", yScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", yScrollEvent);
  //   };
  // }, [scrollRef.current]);

  // ----------------
  // const scrollBy = useScrollBy();
  // const contentRef = useRef<HTMLDivElement>(null);
  // const [x, setX] = useState<number | undefined>();
  // const [y, setY] = useState<number | undefined>();

  // const getPosition = () => {
  //   const x = contentRef.current?.offsetLeft;
  //   setX(x);

  //   const y = contentRef.current?.offsetTop;
  //   setY(y);
  // };

  // useEffect(()=> {
  //   getPosition();
  // },[]);

  // useEffect(() => {
  //   window.addEventListener("resize", getPosition);
  // }, []);

  // console.log(x, y);
  const goToScroll = (name) => {
    const clicked = document.querySelector("#" + name).offsetTop;
    window.scrollTo({ top: clicked, behavior: 'smooth' })
    console.log('1');
  };
  return (
    <Styled.wrapper >
      {/* {nav.map(ele => 
        <div key={ele} id='nav-btn' ref={scrollRef} onClick={scrollToClick} >{ele}</div>)} */}
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