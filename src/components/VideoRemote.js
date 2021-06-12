import React from 'react';
import Video from './Video';

const VideoRemote = ({ name }) => {
  // useRefを初期化
  const videoRef = null;
  return <Video isLocal={false} vidoRef={videoRef} name={name}/>;
};

export default VideoRemote;