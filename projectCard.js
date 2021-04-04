'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = 'poop';

var projects = {
  veracity: {
    color: "rgb(106, 208, 255)",
    currentDotNum: 1,
    name: 'veracity',
    title: 'Veracity',
    type: 'React Web App',
    date: 'November 2020',
    descrip: 'Implements the ReactJS framework and Charity Navigator API to provide users with information on the most transparent and financially accountable charities. May be dead due to API subscription expiration. Click '
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
};
var projectArr = [projects.veracity, projects.snowball, projects.weather, projects.two, projects.tetris];

var ProjectCard = function (_React$Component) {
  _inherits(ProjectCard, _React$Component);

  function ProjectCard(props) {
    _classCallCheck(this, ProjectCard);

    return _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).call(this, props));
  }

  _createClass(ProjectCard, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        projectArr.map(function (project) {
          return React.createElement(
            'div',
            { className: 'project-container', key: project.name },
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

  return ProjectCard;
}(React.Component);

var domContainer = document.querySelector('#veracity-project-container');
ReactDOM.render(React.createElement(ProjectCard, null), domContainer);