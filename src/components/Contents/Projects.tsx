import styled from 'styled-components';
import data from '../../data/data.json';
import { ProjectsType } from '../../types/meta';

function Projects() {

  const { projects } = data.contents;
  
  return (
    <Styled.projects>
      <div className='title'>프로젝트</div>
      {projects.map(project => 
        <Styled.contents key={project.id}>
          <div className='project_title'>{project.title}</div>
          <div className='project_period'>{project.period}</div>
          <div className='project_description'>
            <div>{'<Description>'}</div>
            <li>{project.description}</li>
          </div>
          <div className='project_whatidid'>
            <div>{'<What I did>'}</div>
            {project.whatidid.map(ele => <li key={ele}>{ele}</li>)}
          </div>
          <div className='project_stack'>
            <div>{'<Tech Stack>'}</div>
            {project.stack.map(ele => <span key={ele} className='stack'>| {ele} |</span>)}
          </div>
        </Styled.contents>
        )}
    </Styled.projects>
  )
}

export default Projects;

const Styled = {
  projects: styled.div`
    margin: 8vmin;
    .title {
      border-bottom: 1px solid black;
      padding: 1vmin;
      font-size: 4vmin;
      font-weight: 800;
      font-family: 'Nanumsquare', sans-serif;
    }
  `,
  contents: styled.div`
    font-family: 'Nanumsquare', sans-serif; 
    .project_title {
      margin-top: 8vmin;
      padding: 0 1.5vmin;
      font-size: 3vmin;
      font-weight: 800;
    }

    .project_period {
      color: gray;
      font-size: 2vmin;
      padding: .5vmin 2vmin;
    }

    .project_description, .project_whatidid, .project_stack {
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