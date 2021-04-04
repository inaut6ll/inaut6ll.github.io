'use strict';

let projects = {
  veracity: {
      color: "rgb(106, 208, 255)",
      currentDotNum: 1,
      name: 'veracity',
      title: 'Veracity',
      type: 'React Web App',
      date: 'November 2020',
      descrip: 'Implements the ReactJS framework and Charity Navigator API to provide users with information on the most transparent and financially accountable charities. May be dead due to API subscription expiration. Click ',
  },
  snowball: {
      color: "rgb(86, 40, 255)",
      currentDotNum: 1,
      name: 'snowball',
      title: 'Snowball',
      type: 'Mobile Android App',
      date: 'October 2020',
      descrip: 'Takes advantage of corporate matching programs to maximize the impact of individual donations. Developed with a partner using Android Studio (Java & XML). Won Best Overall Hack @ the Creativa 2020 Hackathon.',
  },
  weather: {
      color: "black",
      currentDotNum: 1,
      name: 'weather',
      title: 'Weather',
      type: 'Website',
      date: 'August 2020',
      descrip: 'Uses a weather API to display forecast data from user\'s current location if allowed. Can also get data and location from manually entered coordinates.',
  },
  two: {
      color: "orange",
      currentDotNum: 1,
      name: 'two',
      title: '2048',
      type: 'Website/Game',
      date: 'July 2020',
      descrip: 'My version of the classic 2048 game built with Javascript (using a lot of array methods)— complete with original styling and themes.',
  },
  tetris: {
      color: "rgb(103, 219, 151)",
      currentDotNum: 1,
      name: 'tetris',
      title: 'Tetris',
      type: 'Website/Game',
      date: 'June 2020',
      descrip: 'Customized version of Tetris developed from scratch using HTML/CSS, JavaScript, & jQuery. Incorporates many different creative modes including multiple themes and difficulty levels.',
  }
}
let projectArr = [projects.veracity, projects.snowball, projects.weather, projects.two, projects.tetris]

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {projectArr.map(project =>
          <div className="project-container" key={project.name}>
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
                  <h5 className="type">{project.type}</h5>
                  <h6 className="date">{project.date}</h6>
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
    );
  }
}

const domContainer = document.querySelector('#projects');
ReactDOM.render(<ProjectCard/>, domContainer);