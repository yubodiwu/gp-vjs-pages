import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Stream, HTMLStreamElement } from '@cloudflare/stream-react';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const CloudflareStream = () => {
  const [muted, setMuted] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [src, setSrc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const streamRef = useRef<HTMLStreamElement>(null) as MutableRefObject<HTMLStreamElement>;
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    streamRef.current?.classList.add('stream');
    
    try {
      const startTimestamp: number = parseInt(query.get('startTimestamp') || '0');
      setStartTime(Math.floor(Date.now() / 1000) - startTimestamp);
      setSrc(query.get('src') || '');
    } catch (err) {
      setErrorMessage('something went wrong');
      console.error(err);
    }
  }, [streamRef, setStartTime, query]);

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
      />
    </>
    : <p>{errorMessage}</p>
  );
};

export default CloudflareStream;
