'use strict';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>test</div>
    );
  }
}

const domContainer = document.querySelector('#veracity-project-container');
ReactDOM.render(<ProjectCard/>, domContainer);