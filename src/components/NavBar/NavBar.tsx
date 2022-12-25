import styled from 'styled-components';

function NavBar() {
  return (
    <Styled.wrapper>
      <div className='nav-btn skills'>스킬</div>
      <div className='nav-btn projects'>프로젝트</div>
      <div className='nav-btn career'>경력</div>
      <div className='nav-btn activity'>활동</div>
      <div className='nav-btn education'>교육</div>
      <div className='nav-btn etc'>기타</div>
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
      border-left: 1px solid black;
      border-right: 1px solid black;
      padding: 0 2vmin;
      font-size: 3vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }

    .skills { border-left: 2px solid black; }
    .etc { border-right: 2px solid black; }
  `,
};