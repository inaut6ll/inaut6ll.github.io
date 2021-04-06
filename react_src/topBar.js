'use strict';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class="section top-bar" id="top">
                    <div class="name">
                        <a id="name" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">LILIAN ZHAO</a>
                        <canvas class="canvas" width="70" height="60"></canvas>
                    </div>
                    <div id="menu">
                        <a href="#projects">Projects</a>
                        <a class="faded" href="https://lilianzlettuce.github.io/about">About</a>
                        <a class="faded" href="LilianZhaoResumeJan2021.pdf" target="_blank">Resume</a>
                        <a class="faded" href="#" id="contact-btn">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#top-bar-container')
ReactDOM.render(<TopBar />, domContainer)