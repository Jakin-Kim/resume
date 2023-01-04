import styled from 'styled-components';
import data from '../../data/data.json';
import { ProjectsType } from '../../types/meta';

function Projects() {

  const { projects } = data.contents;
  
  return (
    <Styled.projects>
      <div className='main_title'>프로젝트</div>
      {projects.map(project => 
        <Styled.contents key={project.id}>
          <div className='title'>{project.title}</div>
          <div className='period'>{project.period}</div>
          <div className='description'>
            <div>{'<Description>'}</div>
            <li>{project.description}</li>
          </div>
          <div className='whatidid'>
            <div>{'<What I did>'}</div>
            {project.whatidid.map(ele => <li key={ele}>{ele}</li>)}
          </div>
          <div className='stack'>
            <div>{'<Tech Stack>'}</div>
            {project.stack.map(ele => <span key={ele} className='stack'>| {ele} |</span>)}
          </div>
        </Styled.contents>)}
    </Styled.projects>
  )
}

export default Projects;

const Styled = {
  projects: styled.div`
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