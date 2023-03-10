import styled from "styled-components";
import data from "../../data/data.json";
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Education() {

  const { education } = data.contents;

  return (
    <Styled.education id="education">
      <div className="main_title" {...useScrollFadeIn('up', 1, 0)}>교육</div>
        <Styled.contents {...useScrollFadeIn('up', 1, 0)}>
        {education.map(edu => 
          <div key={edu.id}>
            <div className='title'>{edu.title}</div>
            <div className='period'>{edu.period}</div>
            <div className='description'>{edu.description}</div>
            <div className='whatidid'>
              {edu.whatidid.map(edu => <li key={edu}>{edu}</li>)}
            </div>
          </div>)}
        </Styled.contents>
    </Styled.education>
  )
}

export default Education

const Styled = {
  education: styled.div`
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
    .description { font-weight: bold }
    .description, .whatidid, .stack {
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