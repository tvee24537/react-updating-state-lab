// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    onBitButtonClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    onResolutionButtonClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }



    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.onBitButtonClick}>Bits are now {this.state.settings.bitrate}</button> 
                <br/>
                <button className="resolution" onClick={this.onResolutionButtonClick}>Resolution is now {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger;