import React from 'react';


const Recorder = ({ isRecording, isPlaying, startRecording, stopRecording}) => {
  return (
    <div className='recorder'>
      <button className = 'start-button' onClick= {startRecording} disabled={isRecording}>Start</button>
      <button className = 'stop-button' onClick= {stopRecording} disabled={!isRecording}>Stop</button>
    </div>
  );
};

export default Recorder;
