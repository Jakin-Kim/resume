import styled from "styled-components"
import data from "../../data/data.json"

function Activity() {

  const { activities } = data.contents;

  return (
    <Styled.activity id="activity">
      <div className="main_title">활동</div>
      {activities.map(ele => 
        <Styled.contents key={ele.id}>
          <div className='title'>{ele.title}</div>
          <div className='period'>{ele.period}</div>
          <div className='description'>
            <div>{'<Description>'}</div>
            <li>{ele.description}</li>
          </div>
          <div className='whatidid'>
            <div>{'<What I did>'}</div>
            {ele.whatidid.map(ele => <li key={ele}>{ele}</li>)}
          </div>
        </Styled.contents>)}
    </Styled.activity>
  )
}

export default Activity

const Styled = {
  activity: styled.div`
    margin: 8vmin;
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