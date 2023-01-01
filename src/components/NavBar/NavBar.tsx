import styled from 'styled-components';
import data from '../../data/data.json'

function NavBar() {
  const { nav } = data;

  return (
    <Styled.wrapper>
      {nav.map(ele => 
        <div key={ele} className='nav-btn'>{ele}</div>)}
    </Styled.wrapper>
  )
}

export default NavBar;

const Styled = {
  wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-btn {
      border-left: .5px solid black;
      border-right: .5px solid black;
      padding: 0 2vmin;
      font-size: 3vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }
  `,
};