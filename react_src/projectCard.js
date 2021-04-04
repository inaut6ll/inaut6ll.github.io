'use strict';

let test = 'poop'

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
      currentDotNum: 1
  },
  weather: {
      color: "black",
      currentDotNum: 1
  },
  two: {
      color: "orange",
      currentDotNum: 1
  },
  tetris: {
      color: "rgb(103, 219, 151)",
      currentDotNum: 1
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
                  <p className="descrip">{project.descrip}
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

const domContainer = document.querySelector('#veracity-project-container');
ReactDOM.render(<ProjectCard/>, domContainer);