'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lettuce = function (_React$Component) {
    _inherits(Lettuce, _React$Component);

    function Lettuce(props) {
        _classCallCheck(this, Lettuce);

        var _this = _possibleConstructorReturn(this, (Lettuce.__proto__ || Object.getPrototypeOf(Lettuce)).call(this, props));

        _this.changeText = function (text, old, choice) {
            var _this$setState;

            _this.setState((_this$setState = {
                text: text
            }, _defineProperty(_this$setState, old, false), _defineProperty(_this$setState, choice, true), _this$setState));
        };

        _this.state = {
            text: 'Just a neat leaf animation I made. Isn\'t it cool?',
            initialLinks: true,
            choseNo: false,
            choseYes: false,
            meh: false
        };
        return _this;
    }

    _createClass(Lettuce, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { id: 'login-page' },
                React.createElement(
                    'div',
                    { id: 'login-container' },
                    React.createElement(
                        'h3',
                        null,
                        this.state.text
                    ),
                    React.createElement('br', null),
                    this.state.initialLinks && React.createElement(
                        'div',
                        { className: 'link-box' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('Thanks, I\'m flattered.', 'initialLinks', 'choseYes');
                                }, className: 'leaf-link' },
                            'Yes, super cool'
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('Wow, rude.', 'initialLinks', 'choseNo');
                                }, className: 'leaf-link' },
                            'No, I\'m leaving'
                        )
                    ),
                    this.state.choseNo && React.createElement(
                        'div',
                        { className: 'link-box' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('Too late, you have already hurt my feelings. There is no turning back.', 'choseNo', 'meh');
                                }, className: 'leaf-link' },
                            'Just kidding'
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('...go away >:(', 'choseNo', 'meh');
                                }, className: 'leaf-link' },
                            'What? I\'ve seen much cooler things'
                        )
                    ),
                    this.state.choseYes && React.createElement(
                        'div',
                        { className: 'link-box' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('... that\'s honestly kind of concerning. Maybe you should go outside or something.', 'choseYes', 'meh');
                                }, className: 'leaf-link' },
                            'This is the most amazing thing I\'ve ever seen'
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.changeText('No. You must stay here forever.', 'choseYes', 'meh');
                                }, className: 'leaf-link' },
                            'Ok can I leave now'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'svg-container' },
                    React.createElement(Leaf, { strokeWidth: '1', color: 'rgb(5, 85, 5)', id: 'leaf' }),
                    React.createElement(Leaf, { strokeWidth: '1', color: 'rgb(109, 207, 109)', id: 'leaf2' })
                )
            );
        }
    }]);

    return Lettuce;
}(React.Component);

function Leaf(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'svg',
            { className: 'leaves', id: props.id, width: '600', height: '400' },
            React.createElement('path', { stroke: props.color, strokeLinecap: 'round', strokeWidth: props.strokeWidth, fill: 'transparent', d: 'M 4 210 Q 90 210, 95 280 T 180 280 T 150 320 Q 120 355, 240 370 Q 270 370, 280 290 Q 280 270, 300 270 T 300 300 Q 280 340, 270 375 Q 270 395, 350 375 T 400 300 T 400 250 Q 425 255, 450 310 T 450 360 Q 445 355, 455 350 Q 470 340, 510 340 Q 450 300, 420 245 Q 410 230, 400 230 Q 350 230, 300 220 T 200 220 T 100 210 Q 90 205, 85 200 Q 75 195, 85 195 T 135 215 Q 180 230, 260 225 T 360 225 Q 400 245 420 225 T 455 170 Q 450 150, 390 155 Q 370 175, 370 195 Q 373 200, 378 195 T 378 160 Q 378 155, 355 155 T 290 160 T 220 160 Q 210 220, 215 160 Q 210 163, 160 175 Q 140 180, 120 175 Q 90 170, 55 190 T 15 230' })
        )
    );
}

var domContainer = document.querySelector('#lettuce');
ReactDOM.render(React.createElement(Lettuce, null), domContainer);