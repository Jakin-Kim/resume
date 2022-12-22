import React from 'react'
import styled from 'styled-components';

interface BackCardType {
    isWorking: boolean,
    setIsWorking: (isWorking: boolean) => void,
    navigate: (path: string) => void
}

function BackCard({ isWorking, setIsWorking, navigate }: BackCardType ) {
  return (
    <Styled.back>
        <div className='kor' onClick={() => navigate('/jakin-resume')}>
            <div className='kor-title'>한국어</div>
            <div className='kor-title'>이력서</div>
            <div className='kor-ver'>(Kor)</div>
        </div>
        <div className='eng' onClick={() => setIsWorking(!isWorking)} >
            <div className='eng-title'>English</div>
            <div className='eng-title'>Resume</div>
            <div className='eng-ver'>(Eng)</div>
        </div>
    </Styled.back>
  )
}

export default BackCard;

const Styled = {
    back: styled.div`
    position: absolute;
    display:flex;
    flex-direction: column;
    align-items: center;

    // card flip
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;

    .kor, .eng {
      
      margin: 35px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #F3D6D7;
      width: 20vw;
      height: 30vh;
      font-weight: 100;
      :hover {
        will-change: font-weight;
        box-shadow: 3px 3px 3px #AFAFAF;
        font-weight: 900;
        transition: font-weight .35s ease-in-out;
      }
      @media (max-width: 650px) {
        width: 40vw;
        height: 10vh;
      }
    }

    .kor-title, .eng-title {
      font-family: 'Nanumsquare', sans-serif;
      font-size: 5vmin;
    }
  `,
}