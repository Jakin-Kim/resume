import styled from "styled-components"
import data from "../../data/data.json"
import { AiOutlineComment } from "react-icons/ai";
import { SiJavascript, SiTypescript, SiReact, SiAmazonaws } from "react-icons/si";

function Skills() {
  const { skills } = data.contents;

  return (
    <Styled.skills id="skill">
      <div className="title">스킬</div>

      <div className="communication">
        <AiOutlineComment className="icons"/>
        <ul>{skills.communication.map( ele => <li key={ele}>{ele}</li>)}</ul>
      </div>
      <div className="javascript">
        <SiJavascript className="icons"/>
        <ul>{skills.javascript.map( ele => <li key={ele}>{ele}</li>)}</ul>
      </div>
      <div className="typescript">
        <SiTypescript className="icons"/>
        <ul>{skills.typescript.map( ele => <li key={ele}>{ele}</li>)}</ul>
      </div>
      <div className="react">
        <SiReact className="icons"/>
        <ul>{skills.react.map( ele => <li key={ele}>{ele}</li>)}</ul>
      </div>
      <div className="aws">
        <SiAmazonaws className="icons"/>
        <ul>{skills.aws.map( ele => <li key={ele}>{ele}</li>)}</ul>
      </div>
    </Styled.skills>
  )
}

export default Skills;

const Styled = {
  skills: styled.div`
    margin: 8vmin;
    .title {
      border-bottom: 1px solid black;
      padding: 1vmin;
      font-size: 4vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
    }
    .communication, .javascript, .typescript, .react, .aws{
      display: flex;
      align-items: center;
      font-size: 2vmin;
      font-family: 'Nanumsquare', sans-serif;
      li {
        padding: 1vmin 3vmin;
      }
    }

    .icons {
      margin: 0 3vmin;
      font-size: 8vmin;
    }
  `
}