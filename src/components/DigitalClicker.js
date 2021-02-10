// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = { timesClicked: 0 }

    onButtonClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked += 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>
                    {this.state.timesClicked}
                </button>
            </div>
        )
    }
}

export default DigitalClicker; 