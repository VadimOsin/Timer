import React from "react";
import './Timer.css'

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        this.timer = 0
        this.start = false
        this.startTimers = this.startTimers.bind(this);
        this.stopTimers = this.stopTimers.bind(this);
        this.resetTimers = this.resetTimers.bind(this);
        this.setStateTimer = this.setStateTimer.bind(this);
    }

    componentDidMount() {
        this.setStateTimer()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.sec !== prevProps.sec) {
            this.setStateTimer()
        }
    }

    setStateTimer() {
        this.setState({
            hours: Math.floor(this.props.sec / (60 * 60)),
            minutes: Math.floor(this.props.sec % (60 * 60) / 60),
            seconds: Math.ceil(this.props.sec % 60)
        })

    }

    Timer() {
        this.setState((prevState) => {
            if (this.state.seconds > 0) {
                return ({
                    seconds: prevState.seconds - 1
                })
            } else if (this.state.seconds === 0) {
                if (this.state.minutes > 0) {
                    return ({
                        minutes: prevState.minutes - 1,
                        seconds: 59
                    })
                } else if (this.state.minutes === 0) {
                    if (this.state.hours > 0) {
                        return ({
                            hours: this.state.hours - 1,
                            minutes: 59,
                            seconds: 59
                        })
                    } else if (this.state.hours === 0) {
                        clearInterval(this.timer)
                    }
                }
            }
        })

    }

    startTimers() {
        this.setState(() =>
            this.start = true
        )
        this.timer = setInterval(
            () => this.Timer(),
            1000
        );
    }

    stopTimers = () => {
        this.setState(() =>
            this.start = false
        )
        clearInterval(this.timer);
    }

    resetTimers = () => {
        this.stopTimers()
        this.setStateTimer()
    }

    render() {
        return (<>
                <div className="timer">
                    <div className="timer__service timer__hours">{this.state.hours}</div>
                    <div className="timer__colon">:</div>
                    <div className="timer__service timer__minutes">{this.state.minutes}</div>
                    <div className="timer__colon">:</div>
                    <div className="timer__service timer__seconds">{this.state.seconds}</div>
                </div>
                <div className="btn">
                {
                    (this.start === false) ?
                        <button className="btn__start" onClick={this.startTimers}>Start</button> :
                        <button className="btn__stop" onClick={this.stopTimers}>Stop</button>}
                <button className="btn__reset" onClick={this.resetTimers}>Reset</button>
            </div>
            </>
        );
    }
}

export default Time;