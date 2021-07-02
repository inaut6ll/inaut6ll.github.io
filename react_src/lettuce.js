'use strict';

class Lettuce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Just a neat leaf animation I made. Isn\'t it cool?',
            initialLinks: true,
            choseNo: false,
            choseYes: false,
            meh: false,
        }
    }

    changeText = (text, old, choice) => {
        this.setState({ 
            text,
            [old]: false, 
            [choice]: true,
        })
    }

    render() {
        return (
            <div id="login-page">
                <div id="login-container">
                    <h3>{this.state.text}</h3>
                    <br/>
                    {this.state.initialLinks &&
                        <div className="link-box">
                            <a onClick={() => this.changeText('Thanks, I\'m flattered.', 'initialLinks', 'choseYes')} className="leaf-link">Yes, super cool</a> 
                            <a onClick={() => this.changeText('Wow, rude.', 'initialLinks','choseNo')} className="leaf-link">No, I'm leaving</a>
                        </div>
                    }
                    {this.state.choseNo &&
                        <div className="link-box">
                            <a onClick={() => this.changeText('Too late, you have already hurt my feelings. There is no turning back.', 'choseNo', 'meh')} className="leaf-link">Just kidding</a> 
                            <a onClick={() => this.changeText(`...go away >:(`, 'choseNo', 'meh')} className="leaf-link">What? I've seen much cooler things</a>
                        </div>
                    }
                    {this.state.choseYes &&
                        <div className="link-box">
                            <a onClick={() => this.changeText('... that\'s honestly kind of concerning. Maybe you should go outside or something.', 'choseYes', 'meh')} className="leaf-link">This is the most amazing thing I've ever seen</a> 
                            <a onClick={() => this.changeText('No. You must stay here forever.', 'choseYes', 'meh')} className="leaf-link">Ok can I leave now</a>
                        </div>
                    }
                </div>
                <div id="svg-container">
                    <Leaf strokeWidth="1" color="rgb(5, 85, 5)" id="leaf" />
                    <Leaf strokeWidth="1" color="rgb(109, 207, 109)" id="leaf2" />
                </div>
            </div>
        )
    }
}

function Leaf(props) {
    return (
        <div>
            <svg className="leaves" id={props.id} width="600" height="400">
                <path stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d="M 4 210 Q 90 210, 95 280 T 180 280 T 150 320 Q 120 355, 240 370 Q 270 370, 280 290 Q 280 270, 300 270 T 300 300 Q 280 340, 270 375 Q 270 395, 350 375 T 400 300 T 400 250 Q 425 255, 450 310 T 450 360 Q 445 355, 455 350 Q 470 340, 510 340 Q 450 300, 420 245 Q 410 230, 400 230 Q 350 230, 300 220 T 200 220 T 100 210 Q 90 205, 85 200 Q 75 195, 85 195 T 135 215 Q 180 230, 260 225 T 360 225 Q 400 245 420 225 T 455 170 Q 450 150, 390 155 Q 370 175, 370 195 Q 373 200, 378 195 T 378 160 Q 378 155, 355 155 T 290 160 T 220 160 Q 210 220, 215 160 Q 210 163, 160 175 Q 140 180, 120 175 Q 90 170, 55 190 T 15 230" />
            </svg>
        </div>
    )
}

const domContainer = document.querySelector('#lettuce')
ReactDOM.render(<Lettuce />, domContainer)