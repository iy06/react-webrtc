import React, { useEffect, useRef } from 'react';

const VideoLocal = () => {
  // useRefを初期化
  const VideoRef = useRef(null);
  const currentVideoRef = VideoRef.current;

  useEffect(() => {
    if (currentVideoRef === null) return;

    const getMedia = async () => {
      // 使用するメディアの種類を定義
      const constraints = { audio: true, video: true };

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        currentVideoRef.srcObject = mediaStream;
      } catch(error) {
        console.log(error)
      }
    };

    getMedia();

  });

  return <></>;
};

export default VideoLocal;