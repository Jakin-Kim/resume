import styled from "styled-components";
import data from "../../data/data.json";
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Etc() {

  const { etc } = data.contents;
  
  return (
    <Styled.etc id="etc">
      <div className="main_title" {...useScrollFadeIn('up', 1, 0)}>기타</div>
      <Styled.contents {...useScrollFadeIn('up', 1, 0)}>
      {etc.map(item => 
        <div key={item.id}>
          <div className='title'>{item.title}</div>
          <div className='period'>{item.period}</div>
        </div>)}
        </Styled.contents>
    </Styled.etc>
  )
}

export default Etc;

const Styled = {
  etc: styled.div`
    margin: 8vmin;
    z-index: 0;
    
    .main_title {
      border-bottom: 1px solid black;
      padding: 1vmin;
      font-size: 4vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
    }
  `,
  contents: styled.div`
    font-family: 'Nanumsquare', sans-serif; 
    .title {
      margin-top: 8vmin;
      padding: 0 1.5vmin;
      font-size: 3vmin;
      font-weight: 800;
    }

    .period {
      color: gray;
      font-size: 2vmin;
      padding: .5vmin 2vmin;
    }

    .description, .stack {
      font-weight: bold;
      font-size: 2vmin;
      padding: 1.5vmin;
      > div {
        font-weight: 800;
      }
      > li, span {
        padding: .5vmin;
      }
    }
  `

}