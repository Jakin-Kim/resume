import styled from 'styled-components';

function IntroCard() {
  return (
    <div>
      <Styled.container>
        <Styled.wrapper>

          {/* frontside */}
          <Styled.front>
            <div className='title'>Jakin Kim</div>
            <div className='title'>Resume</div>
            <div className='content'>Hi, I'm Jakin,</div>
            <div className='content'>Front-End Developer &#x1F60A;</div>
          </Styled.front>

          {/* backside */}
          {/* <Styled.back>
            <div className='kor'>
              <div className='kor_title'>한국어</div>
              <div className='kor_title'>이력서</div>
            </div>
            <div className='eng'>
              <div className='eng_title'>English</div>
              <div className='eng_title'>Resume</div>
            </div>
          </Styled.back> */}

        </Styled.wrapper>
      </Styled.container>
    </div>
  )
}

export default IntroCard;

const Styled = {
  container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: 1px solid black; // 삭제하기
  `,

  wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 80vh;
    background-color: #E7FFFE;
    border-radius: 20px;
    :hover{
      filter: drop-shadow(10px 10px 5px #AFAFAF);
      cursor: pointer;
    }
    /* border: 1px solid red; // 삭제하기 */

    @media (max-width: 650px) {
      width: 55vw;
      height: 80vh;
    }
  `,

  front: styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

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
    
  `

    
  

}