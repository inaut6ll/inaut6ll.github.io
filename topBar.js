'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_React$Component) {
    _inherits(TopBar, _React$Component);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));
    }

    _createClass(TopBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "section top-bar", id: "top" },
                    React.createElement(
                        "div",
                        { className: "name" },
                        React.createElement(
                            "a",
                            { id: "name", target: "_blank", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" },
                            "LILIAN ZHAO"
                        ),
                        React.createElement("canvas", { className: "canvas", width: "70", height: "60" })
                    ),
                    React.createElement(
                        "div",
                        { id: "menu" },
                        React.createElement(
                            "a",
                            { href: "https://lilianzlettuce.github.io/#projects" },
                            "Projects"
                        ),
                        React.createElement(
                            "a",
                            { className: "faded", href: "https://lilianzlettuce.github.io/about" },
                            "About"
                        ),
                        React.createElement(
                            "a",
                            { className: "faded", href: "#footer", id: "contact-btn" },
                            "Contact"
                        ),
                        React.createElement(
                            "a",
                            { className: "faded", href: "LilianZhaoResumeJan2021.pdf", target: "_blank" },
                            "Resume"
                        )
                    )
                )
            );
        }
    }]);

    return TopBar;
}(React.Component);

var domContainer = document.querySelector('#top-bar-container');
ReactDOM.render(React.createElement(TopBar, null), domContainer);