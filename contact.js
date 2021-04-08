'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "footer-container" },
                    React.createElement(
                        "div",
                        { className: "section-title", id: "footer-title" },
                        "Contact ",
                        React.createElement(
                            "a",
                            { href: "#top", id: "contactBtn2" },
                            "\u2191"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "section", id: "footer" },
                        React.createElement(
                            "a",
                            { className: "contact-bottom", target: "_blank", href: "mailto:milanzq309@gmail.com" },
                            "\u2014Email"
                        ),
                        React.createElement(
                            "a",
                            { className: "contact-bottom", target: "_blank", href: "https://github.com/lilianzlettuce" },
                            "\u2014Github"
                        ),
                        React.createElement(
                            "a",
                            { className: "contact-bottom", target: "_blank", href: "https://www.linkedin.com/in/lilian-zhao/" },
                            "\u2014LinkedIn"
                        ),
                        React.createElement(
                            "a",
                            { className: "contact-bottom lettuce", id: "lettuce-bottom", target: "_blank", href: "https://lilianzlettuce.github.io/lettuce" },
                            "\uD83E\uDD6C"
                        ),
                        React.createElement(
                            "p",
                            { id: "bottom-text" },
                            "Made with the blood of a thousand snails | 2021"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "svg-container" },
                    React.createElement(
                        "svg",
                        { className: "scribbles", id: "scribble2", width: "50vw", height: "70vh" },
                        React.createElement("path", { id: "scribble-path2", stroke: "rgb(134, 173, 255)", strokeLinecap: "round", strokeWidth: "1", fill: "transparent", d: "" })
                    ),
                    React.createElement(
                        "svg",
                        { className: "scribbles", id: "scribble3", width: "50vw", height: "70vh" },
                        React.createElement("path", { id: "scribble-path3", stroke: "tomato", strokeLinecap: "round", strokeWidth: "1", fill: "transparent", d: "" })
                    ),
                    React.createElement(
                        "svg",
                        { className: "scribbles", id: "scribble4", width: "50vw", height: "70vh" },
                        React.createElement("path", { id: "scribble-path4", stroke: "black", strokeLinecap: "round", strokeWidth: "1", fill: "transparent", d: "" })
                    ),
                    React.createElement(
                        "svg",
                        { className: "scribbles", id: "scribble", width: "60vw", height: "70vh" },
                        React.createElement("path", { id: "scribble-path", stroke: "black", strokeLinecap: "round", strokeWidth: "1", fill: "transparent", d: "" })
                    )
                )
            );
        }
    }]);

    return Contact;
}(React.Component);

ReactDOM.render(React.createElement(Contact, null), document.querySelector('#contact-container'));