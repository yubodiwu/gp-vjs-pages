import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./App.css";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    const queryParams = new URLSearchParams(window.location.search);
    const sources = [{ src: `https://videodelivery.net/${queryParams.get('src')}/manifest/video.m3u8` }];
    const startTimestamp = queryParams.get('startTimestamp') || 0;

    this.state = {
      muted: true,
      src: '',
      startTime: 0,
      sources: queryParams.has('src') ? sources : null,
      startTimestamp,
    };
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(
      this.videoNode,
      { ...this.props, sources: this.state.sources, muted: this.state.muted },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
    setTimeout(() => this.player.play(), 1000);
    this.player.currentTime(Math.floor(Date.now() / 1000) - this.state.startTimestamp);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js vjs-theme-city vjs-16-9"
          />
        </div>
        <div className="unmute-container">
          {this.state.muted &&
            <button
              className="unmute-button"
              onClick={() => {
                this.player.muted(false);
                this.setState({ muted: false });
              }}
            >
              tap to unmute
            </button>}
        </div>
      </div>
    );
  }
}

function App() {
  return <VideoPlayer autoplay controls />;
}

export default App;
