'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projects = {
  new: {
    name: '',
    title: '',
    type: '',
    date: '',
    descrip: ''
  },
  sleep: {
    name: 'sleep',
    title: 'Chamomile',
    type: 'THING',
    date: '????????',
    descrip: 'This is here right now solely for aesthetic purposes.'
  },
  veracity: {
    name: 'veracity',
    title: 'Veracity',
    type: 'React Web App',
    date: 'November 2020',
    descrip: 'Implements the ReactJS framework and Charity Navigator API to provide users with information on the most transparent and financially accountable charities. May be dead due to API subscription expiration. Click '
  },
  snowball: {
    name: 'snowball',
    title: 'Snowball',
    type: 'Mobile Android App',
    date: 'October 2020',
    descrip: 'Takes advantage of corporate matching programs to maximize the impact of individual donations. Developed with a partner using Android Studio (Java & XML). Won Best Overall Hack @ the Creativa 2020 Hackathon.'
  },
  weather: {
    name: 'weather',
    title: 'Weather',
    type: 'Website',
    date: 'August 2020',
    descrip: 'Uses a weather API to display forecast data from user\'s current location if allowed. Can also get data and location from manually entered coordinates.'
  },
  two: {
    name: 'two',
    title: '2048',
    type: 'Website/Game',
    date: 'July 2020',
    descrip: 'My version of the classic 2048 game built with Javascript (using a lot of array methods)— complete with original styling and themes.'
  },
  tetris: {
    name: 'tetris',
    title: 'Tetris',
    type: 'Website/Game',
    date: 'June 2020',
    descrip: 'Customized version of Tetris developed from scratch using HTML/CSS, JavaScript, & jQuery. Incorporates many different creative modes including multiple themes and difficulty levels.'
  }
};
var projectArr = [projects.sleep, projects.veracity, projects.snowball, projects.weather, projects.two, projects.tetris];

var Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        projectArr.map(function (project) {
          return React.createElement(
            'div',
            { className: 'project-container', key: project.name, id: project.name + "PC" },
            React.createElement(
              'div',
              { className: 'descrip-box' },
              React.createElement(
                'div',
                { className: 'controls' },
                React.createElement(
                  'div',
                  { className: 'dots' },
                  React.createElement('div', { className: 'hex', id: project.name + "-hex", style: { zIndex: -100 } }),
                  React.createElement('div', { className: "dot dot1 " + project.name + "-dot", id: project.name + "-dot1" }),
                  React.createElement('div', { className: "dot dot2 " + project.name + "-dot", id: project.name + "-dot2" }),
                  React.createElement('div', { className: "dot dot3 " + project.name + "-dot", id: project.name + "-dot3" }),
                  React.createElement('i', { id: project.name + "-icon", className: 'fas fa-angle-right icon right-arrow' })
                )
              ),
              React.createElement(
                'div',
                { className: 'descrip-text' },
                React.createElement(
                  'h4',
                  { className: 'title' },
                  project.title
                ),
                React.createElement(
                  'h5',
                  { className: 'type' },
                  project.type
                ),
                React.createElement(
                  'h6',
                  { className: 'date' },
                  project.date
                ),
                React.createElement(
                  'p',
                  { className: 'descrip' },
                  project.descrip,
                  project.name == 'veracity' && React.createElement(
                    'span',
                    null,
                    React.createElement(
                      'a',
                      { style: { fontSize: 1.6 + 'rem', color: 'rgb(255, 136, 115)' }, href: 'https://youtu.be/gMbwmaDJzTM', target: '_blank' },
                      'here'
                    ),
                    ' to see a demo video.'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'image', id: project.name },
              React.createElement('div', { id: project.name + "2", className: 'image-over' }),
              React.createElement('div', { id: project.name + "3", className: 'image-over image-over2' }),
              React.createElement('div', { id: project.name + "-hover", className: 'white-hover' })
            )
          );
        })
      );
    }
  }]);

  return Project;
}(React.Component);

var domContainer = document.querySelector('#projects');
ReactDOM.render(React.createElement(Project, null), domContainer);