'use strict';

let projects = {
  veracity: {
      color: "rgb(106, 208, 255)",
      currentDotNum: 1,
      name: 'veracity',
      title: 'Veracity',
      type: 'React Web App',
      date: 'November 2020',
      descrip: 'Implements the ReactJS framework and Charity Navigator API to provide users with information on the most transparent and financially accountable charities. May be dead due to API subscription expiration. Click <a style="font-size: 1.6rem; color:rgb(255, 136, 115)" href="https://youtu.be/gMbwmaDJzTM" target="_blank">here</a> to see demo video.',

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
          <div>
            <div class="descrip-box">
              <div class="controls">
                  <div class="dots">
                    <div class="hex" id={project.name + "-hex"} style="z-index: -100;"></div>
                    <div class={"dot dot1 " + project.name + "-dot"} id={project.name + "-dot1"}></div>
                    <div class={"dot dot2 " + project.name + "-dot"} id={project.name + "-dot2"}></div>
                    <div class={"dot dot3 " + project.name + "-dot"} id={project.name + "-dot3"}></div>
                    <i id={project.name + "-icon"} class="fas fa-angle-right icon right-arrow"></i>
                  </div>
              </div>
              <div class="descrip-text">
                  <h4 class="title">{project.title}</h4>
                  <h5 class="type">{project.type}</h5>
                  <h6 class="date">{project.date}</h6>
                  <p class="descrip">{project.descrip}</p>
              </div>
            </div>
            <div class="image" id={project.name}>
                <div id="${project.name}2" class="image-over"></div>
                <div id="${project.name}3" class="image-over image-over2"></div>
                <div id="${project.name}-hover" class="white-hover"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const domContainer = document.querySelector('#veracity-project-container');
ReactDOM.render(<ProjectCard/>, domContainer);