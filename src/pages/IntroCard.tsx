import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImWarning } from 'react-icons/im';
import { RiDeleteBack2Line } from 'react-icons/ri';
import FrontCard from '../components/FrontCard/FrontCard';
import BackCard from '../components/BackCard/BackCard';

function IntroCard() {
  const navigate = useNavigate();
  const [isWorking, setIsWorking] = useState<boolean>(false);

  return (
    <>
      <Styled.intro>
        <Styled.wrapper className='wrapper'>
          <FrontCard/>
          <BackCard isWorking={isWorking} setIsWorking={setIsWorking} navigate={navigate}/>
        </Styled.wrapper>

        {/* will be removed when finished eng ver page*/}
        {isWorking && 
          <Styled.notice>
            <div className='notice-wrapper'>
              <div className='notice-delete'>
                <RiDeleteBack2Line className='delete' onClick={() => setIsWorking(!isWorking)}/>
              </div>
              <div className='notice-content'>  
                <ImWarning className="notice warning-icon"/>
                <div className='notice'>Sorry, this page is currently not available.</div>
                <div className='notice'>It will be finished as soon as possible.</div>
              </div>
            </div>
          </Styled.notice>}
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

  

  notice: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    white-space: nowrap;
    
    
    .notice-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      width: 50vw;
      height: 40vh;
      background-color: ivory;
      font-family: Jua, serif;
      font-size: 2.5vmin;

      .notice-delete {
        display: flex;
        flex-direction: row-reverse;
        font-size: 2.5vmin;
        margin-right: 5vmin;
        font-size: 4vmin;
        :hover {
          cursor: pointer;
        }
      }

      .notice-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .notice {
          padding: 2.5vmin 0;
        }

        .warning-icon {
          font-size: 5vmin;
          color: orange;
        }
      }
    }

  `,
}