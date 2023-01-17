import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FrontCard from '../components/FrontCard';
import BackCard from '../components/BackCard';
import Notice from '../components/Notice';

function IntroCard() {
  const navigate = useNavigate();
  const [isWorking, setIsWorking] = useState<boolean>(false);

  return (
    <>
      <Styled.intro>
        <Styled.wrapper className='wrapper'>
          <FrontCard/>
          <BackCard 
            isWorking={isWorking} 
            setIsWorking={setIsWorking} 
            navigate={navigate} />
        </Styled.wrapper>

        {/* will be removed when finished eng ver page*/}
        {isWorking && <Notice isWorking={isWorking} setIsWorking={setIsWorking}/>}
      </Styled.intro>
    </>
  )
}

export default IntroCard;

const Styled = {
  intro: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    // card flip
    perspective: 1000px; 
  `,

  wrapper: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 80vh;
    background-color: #E7FFFE;
    border-radius: 20px;
    box-shadow: 3px 3px 3px #AFAFAF;
    
    // card flip
    transition: transform 0.6s;
    transform-style: preserve-3d;
    will-change: transition;

    :hover{
      cursor: pointer;

      // card flip
      transform: rotateY(180deg);
      box-shadow: 0px 0px 3px #AFAFAF;
      will-change: transform;
    }

    @media (max-width: 650px) {
      width: 65vw;
      height: 80vh;
    }
  `,
}