'use strict';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="section top-bar" id="top">
                    <div className="name">
                        <a id="name" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">LILIAN ZHAO</a>
                        <canvas className="canvas" width="70" height="60"></canvas>
                    </div>
                    <div id="menu">
                        <a id="projects-link" href="https://lilianzlettuce.github.io/#projects">Projects</a>
                        <a id="about-link" href="https://lilianzlettuce.github.io/about">About</a>
                        <a className="faded" href="#footer" id="contact-btn">Contact</a>
                        <a className="faded" href="LilianZhaoResumeMay2021.pdf" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#top-bar-container')
ReactDOM.render(<TopBar />, domContainer)