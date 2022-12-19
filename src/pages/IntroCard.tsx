import styled from 'styled-components';
import { useState } from 'react';

function IntroCard() {
  const isFlipped = useState<boolean>(false);

  return (
    <div>
      <Styled.intro>
        <Styled.wrapper className='wrapper'>

          {/* frontside */}
          <Styled.front>
            <div className='title'>Jakin Kim</div>
            <div className='title'>Resume</div>
            <div className='content'>Hi, I'm Jakin,</div>
            <div className='content'>Front-End Developer &#x1F60A;</div>
          </Styled.front>

          {/* backside */}
          {/* <Styled.back>

          </Styled.back> */}
          <Styled.back>
            <div className='kor'>
              <div className='kor_title'>한국어</div>
              <div className='kor_title'>이력서</div>
            </div>
            <div className='eng'>
              <div className='eng_title'>English</div>
              <div className='eng_title'>Resume</div>
            </div>
          </Styled.back>

        </Styled.wrapper>
      </Styled.intro>
    </div>
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

    :hover{
      cursor: pointer;

      // card flip
      transform: rotateY(180deg);
      box-shadow: 0px 0px 3px #AFAFAF;
    }

    @media (max-width: 650px) {
      width: 55vw;
      height: 80vh;
    }
  `,

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

  back: styled.div`
    position: absolute;
    display:flex;
    flex-direction: column;
    
    align-items: center;
    background-color: #F3D6D7;

    // card flip
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    border-radius: 20px;
    .kor, .eng {
      padding-bottom: 10px;
      font-weight: 900;
      font-family: 'Nanumsquare', sans-serif;
      font-size: 5vmin;
    }

  `,
}