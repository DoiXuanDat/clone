import React, { useState, useRef } from 'react';
import './AudioControls.css';

const AudioControls = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-controls">
            <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
            />
            <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <a href={audioUrl} download="audio.mp3">
                Download
            </a>
        </div>
    );
};

export default AudioControls;