'use strict';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div id="footer-container">
                    <div class="section-title" id="footer-title">Contact <a href="#top" id="contactBtn2">↑</a></div>
                    <div class="section" id="footer">
                        <a class="contact-bottom" target="_blank" href="mailto:milanzq309@gmail.com">—Email</a> 
                        <a class="contact-bottom" target="_blank" href="https://github.com/lilianzlettuce">—Github</a> 
                        <a class="contact-bottom" target="_blank" href="https://www.linkedin.com/in/lilian-zhao/">—LinkedIn</a>
                        <a class="contact-bottom lettuce" id="lettuce-bottom" target="_blank" href="https://lilianzlettuce.github.io/lettuce">🥬</a>
                        <p id="bottom-text">Made with the blood of a thousand snails | 2021</p>
                    </div>
                </div>

                <div id="svg-container">
                    <svg class="scribbles" id="scribble2" width="50vw" height="70vh">
                        <path id="scribble-path2" stroke="rgb(134, 173, 255)" stroke-linecap="round" stroke-width="1" fill="transparent" d=""/>
                    </svg>
                    <svg class="scribbles" id="scribble3" width="50vw" height="70vh">
                        <path id="scribble-path3" stroke="tomato" stroke-linecap="round" stroke-width="1" fill="transparent" d=""/>
                    </svg>
                    <svg class="scribbles" id="scribble4" width="50vw" height="70vh">
                        <path id="scribble-path4" stroke="black" stroke-linecap="round" stroke-width="1" fill="transparent" d=""/>
                    </svg>
                    <svg class="scribbles" id="scribble" width="60vw" height="70vh">
                        <path id="scribble-path" stroke="black" stroke-linecap="round" stroke-width="1" fill="transparent" d=""/>
                    </svg>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Contact />, document.querySelector('#contact-container'))