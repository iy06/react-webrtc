import React from 'react';
import Video from './Video';

const VideoRemote = ({ rtcClient }) => {
  // useRefを初期化
  const videoRef = rtcClient.remoteVideoRef;
  return <Video isLocal={false} vidoRef={videoRef} name={rtcClient.remotePeerName}/>;
};

export default VideoRemote;