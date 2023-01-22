import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import Projects from './Projects'
import Activity from './Activity'
import Career from './Career'
import Education from './Education'
import Etc from './Etc'

type RefType = {
  
}
function Contents() {

  // const animationRef = useRef<HTMLDivElement>(document.querySelector('.contents'));
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(animationRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('entry', entry);
    })

    // observer.observe(animationRef.current);
  },[])


  return (
    <Styled.contents className="contents" ref={animationRef}>
      <Skills/>
      <Projects/>
      <Career/>
      <Activity/>
      <Education/>
      <Etc/>
    </Styled.contents>
  )
}

export default Contents;

const Styled = {
  contents: styled.div`
    display: flex;
    flex-direction: column;
    
  `
}