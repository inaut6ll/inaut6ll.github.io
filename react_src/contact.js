'use strict';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div id="footer-container">
                    <div className="section-title" id="footer-title">Contact <a href="#top" id="contactBtn2">↑</a></div>
                    <div className="section" id="footer">
                        <a className="contact-bottom" target="_blank" href="mailto:milanzq309@gmail.com">—Email</a> 
                        <a className="contact-bottom" target="_blank" href="https://github.com/lilianzlettuce">—Github</a> 
                        <a className="contact-bottom" target="_blank" href="https://www.linkedin.com/in/lilian-zhao/">—LinkedIn</a>
                        <a className="contact-bottom lettuce" id="lettuce-bottom" target="_blank" href="https://lilianzlettuce.github.io/lettuce">🥬</a>
                        <p id="bottom-text">Made with the blood of a thousand snails | 2021</p>
                    </div>
                </div>

                <div id="svg-container">
                    <svg className="scribbles" id="scribble2" width="50vw" height="70vh">
                        <path id="scribble-path2" stroke="rgb(134, 173, 255)" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble3" width="50vw" height="70vh">
                        <path id="scribble-path3" stroke="tomato" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble4" width="50vw" height="70vh">
                        <path id="scribble-path4" stroke="black" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble" width="60vw" height="70vh">
                        <path id="scribble-path" stroke="black" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Contact />, document.querySelector('#contact-container'))