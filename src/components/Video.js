import React from 'react';

const Video = ({ isLocal, name, videoRef }) => {
  console.log(videoRef);
  return (
    <div>
      <video autoPlay ref={videoRef} muted={isLocal} />
      <div>{name}</div>
    </div>
  );
};

export default Video;