import React, { useState, useEffect, useRef } from 'react';
import { Stream } from '@cloudflare/stream-react';
import './CloudflareStream.css';

const setCurrentTime = (query, setStartTime) => {
  const startTimestamp = parseInt(query.get('startTimestamp') || '0');
  setStartTime(Math.floor(Date.now() / 1000) - startTimestamp);
};

const CloudflareStream = () => {
  const [muted, setMuted] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [src, setSrc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const streamRef = useRef(null);
  console.log(document.location.search);
  
  const query = new URLSearchParams(document.location.search);

  useEffect(() => {
    streamRef.current?.classList.add('stream');

    try {
      setCurrentTime(query, setStartTime);
      setSrc(query.get('src') || '');
    } catch (err) {
      setErrorMessage('something went wrong');
      console.error(err);
    }
  }, [streamRef, setStartTime, query, startTime]);

  return (errorMessage === '' ?
    <>
      {muted && <button className="unmute-button" onClick={() => setMuted(false)}>tap to unmute</button>}
      <Stream
        autoplay
        controls
        muted={muted}
        currentTime={startTime}
        preload="auto" 
        src={src}
        streamRef={streamRef}
        onPause={() => streamRef.current.play()}
        onError={() => setCurrentTime(query, setStartTime)}
        onPlaying={() => setCurrentTime(query, setStartTime)}
        onSeeked={() => setCurrentTime(query, setStartTime)}
        onSeeking={() => setCurrentTime(query, setStartTime)}
      />
    </>
    : <p>{errorMessage}</p>
  );
};

export default CloudflareStream;
