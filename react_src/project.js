'use strict';

let projects = {
  new: {
    name: '',
    title: '',
    type: '',
    date: '',
    descrip: '',
  },
  cero: {
    name: 'cero',
    title: 'Cero',
    date: 'June 2020',
    award: '1st Place @ Hydrangea Hack',
    descrip: 'Customized version of cero developed to include different creative modes such as multiple color-changing themes and speed/difficulty levels.',
  },
  bloog: {
    name: 'bloog',
    title: 'BLOOG',
    date: 'April - June 2021',
    descrip: 'Knockoff quizlet. (Lets users create, study, and browse sets of flashcards) Uses firebase for authentication and data storage.',
  },
  linescape: {
    name: 'linescape',
    title: 'LineScape',
    date: 'April 2021',
    award: 'Best Design @ Superposition V',
    descrip: 'SVG drawing tool designed to simplify the process of creating line animations for websites.',
  },
  veracity: {
      name: 'veracity',
      title: 'Veracity',
      date: 'November 2020',
      descrip: 'Charity-searching web app that helps users determine the reliability of relevant organizations. May be dead due to API key expiration. Click ',
  },
  snowball: {
      name: 'snowball',
      title: 'Snowball',
      award: 'Best Overall Hack @ Creatica 2020',
      descrip: 'Networking app that connects users with working professionals to maximize the impact of individual donations using corporate matching programs',
  },
  two: {
      name: 'two',
      title: '2048',
      type: 'Website/Game',
      descrip: 'My version of the classic 2048 game built with Javascript (using a lot of array methods)— complete with original styling and themes.',
  },
}
let projectArr = [projects.cero, projects.bloog, projects.linescape, projects.veracity, projects.snowball, projects.two]

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {projectArr.map(project =>
          <div className="project-container" key={project.name} id={project.name + "PC"}>
            <div className="descrip-box">
              <div className="controls">
                  <div className="dots">
                    <div className="hex" id={project.name + "-hex"} style={{zIndex: -100}}></div>
                    <div className={"dot dot1 " + project.name + "-dot"} id={project.name + "-dot1"}></div>
                    <div className={"dot dot2 " + project.name + "-dot"} id={project.name + "-dot2"}></div>
                    <div className={"dot dot3 " + project.name + "-dot"} id={project.name + "-dot3"}></div>
                    <i id={project.name + "-icon"} className="fas fa-angle-right icon right-arrow"></i>
                  </div>
              </div>
              <div className="descrip-text">
                  <h4 className="title">{project.title}</h4>
                  <h6 className="date">{project.date}</h6>
                  {project.award && <div className="award" id={"award-" + project.name}>{project.award}</div>}
                  <p className="descrip">
                    {project.descrip}
                    {project.name == 'veracity' && <span><a style={{fontSize: 1.6 + 'rem', color: 'rgb(255, 136, 115)'}} href="https://youtu.be/gMbwmaDJzTM" target="_blank">here</a> to see a demo video.</span>}
                  </p>
              </div>
            </div>
            <div className="image" id={project.name}>
                <div id={project.name + "2"} className="image-over"></div>
                <div id={project.name + "3"} className="image-over image-over2"></div>
                <div id={project.name + "-hover"} className="white-hover"></div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const domContainer = document.querySelector('#projects')
ReactDOM.render(<Project/>, domContainer)