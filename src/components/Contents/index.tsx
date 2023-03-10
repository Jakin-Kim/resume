import styled from 'styled-components';
import Skills from './Skills';
import Projects from './Projects';
import Activity from './Activity';
import Career from './Career';
import Education from './Education';
import Etc from './Etc';

function Contents() {

  return (
    <Styled.contents >
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
    
    .deactive {
      transform: translateX(-50%);
      opacity: 0;
      transition: .8s;
    }

    .active {
      transform: translateX(0);
      opacity: 1;
    }
  `,
}