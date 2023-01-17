import styled from 'styled-components';
import { ImWarning } from 'react-icons/im';
import { RiDeleteBack2Line } from 'react-icons/ri';

interface NoticeType {
  isWorking: boolean,
  setIsWorking: (isWorking: boolean) => void,
}

function Notice({ isWorking, setIsWorking }: NoticeType) {
  return (
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
    </Styled.notice>
  )
}

export default Notice;

const Styled = {
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