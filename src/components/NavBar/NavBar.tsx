import styled from 'styled-components';
import data from '../../data/data.json';
import { useState, useEffect, useRef } from 'react';
import { useScrollBy } from 'react-use-window-scroll';

function NavBar() {
  const { nav } = data;

  const scrollBy = useScrollBy();
  const contentRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  const getPosition = () => {
    const x = contentRef.current?.offsetLeft;
    setX(x);

    const y = contentRef.current?.offsetTop;
    setY(y);
  };

  useEffect(()=> {
    getPosition();
  },[]);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  console.log(x, y);

  return (
    <Styled.wrapper >
      {/* {nav.map(ele => 
        <div onClick={() => scrollBy({ top: y, left: 0, behavior: 'smooth' })} key={ele} className='nav-btn'>{ele}</div>)} */}
        <div ref={contentRef} className='nav-btn skills' onClick={() => scrollBy({ top: y, left: x, behavior: 'smooth' })}>스킬</div>
        <div className='nav-btn' onClick={() => scrollBy({ top: 1500, left: 0, behavior: 'smooth' })}>프로젝트</div>
        <div className='nav-btn'>경력</div>
        <div className='nav-btn'>활동</div>
        <div className='nav-btn'>교육</div>
        <div className='nav-btn etc'>기타</div>
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

    .skills {
      border-left: 1px solid black;
    } .etc { 
      border-right: 1px solid black;
    }
  `,
};