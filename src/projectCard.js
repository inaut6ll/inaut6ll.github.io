'use strict';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>test 2.0</div>
    );
  }
}

const domContainer = document.querySelector('#veracity-project-container');
ReactDOM.render(<ProjectCard/>, domContainer);