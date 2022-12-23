import React from 'react'
import styled from 'styled-components';
import { Data } from '../../types/meta';

function Intro({ intro }: Data) {
  return (
    <Styled.intro>
        <h1>{intro.title}</h1>
        <ul>{intro.content.map(items => <li key={items}>{items}</li>)}</ul>
    </Styled.intro>
  )
}

export default Intro;

const Styled = {
    intro: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 7vmin;
      font-family: 'Nanumsquare', sans-serif;
      font-size: 2vmin;
      li {
        margin: 1.5vmin 0;
      }
    `
}