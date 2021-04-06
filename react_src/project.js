'use strict';

let projects = {
  new: {
    name: '',
    title: '',
    type: '',
    date: '',
    descrip: '',
  },
  sleep: {
    name: 'sleep',
    title: 'Chamomile',
    type: 'THING?????',
    date: 'Work in Progress',
    descrip: 'React/Firebase web app made to help you get more sleep... Coming soon? Or not... ',
  },
  veracity: {
      name: 'veracity',
      title: 'Veracity',
      type: 'React Web App',
      date: 'November 2020',
      descrip: 'Implements the ReactJS framework and Charity Navigator API to simplify the process of finding the right charity. May be dead due to API key expiration. Click ',
  },
  snowball: {
      name: 'snowball',
      title: 'Snowball',
      type: 'Mobile Android App',
      date: 'October 2020',
      descrip: 'Aims to connect working professionals and potential donors to take advantage of corporate matching programs and maximize the impact of individual donations.',
  },
  weather: {
      name: 'weather',
      title: 'Weather',
      type: 'Website',
      date: 'August 2020',
      descrip: 'Uses a weather API to display forecast data from the user\'s current location and/or get data and location from manually entered coordinates.',
  },
  two: {
      name: 'two',
      title: '2048',
      type: 'Website/Game',
      date: 'July 2020',
      descrip: 'My version of the classic 2048 game built with Javascript (using a lot of array methods)— complete with original styling and themes.',
  },
  tetris: {
      name: 'tetris',
      title: 'Tetris',
      type: 'Website/Game',
      date: 'June 2020',
      descrip: 'Customized version of Tetris developed to include different creative modes such as multiple color-changing themes and speed/difficulty levels.',
  }
}
let projectArr = [projects.sleep, projects.veracity, projects.snowball, projects.weather, projects.two, projects.tetris]

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
ReactDOM.render(<Project/>, domContainer);