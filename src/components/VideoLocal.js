import React, { useEffect, useRef } from 'react';
import Video from './Video';

const VideoLocal = ({ rtcClient }) => {
  // useRefを初期化
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;
  const mediaStream = rtcClient.mediaStream;

  useEffect(() => {
    if (currentVideoRef === null) return;

    const getMedia = () => {

      try {
        currentVideoRef.srcObject = mediaStream;
      } catch(error) {
        console.log(error)
      }
    };

    getMedia();
  }, [currentVideoRef, mediaStream]);

  return <Video isLocal={true} videoRef={videoRef} name={rtcClient.localPeerName}/>;
};

export default VideoLocal;

// import React, { useEffect, useRef } from 'react';

// import Video from './Video';

// const VideoLocal = ({ name }) => {
//   const videoRef = useRef(null);
//   const currentVideoRef = videoRef.current;

//   useEffect(() => {
//     if (currentVideoRef === null) return;

//     const getMedia = async () => {
//       const constraints = { audio: true, video: true };

//       try {
//         const mediaStream = await navigator.mediaDevices.getUserMedia(
//           constraints
//         );
//         currentVideoRef.srcObject = mediaStream;
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getMedia();
//   }, [currentVideoRef]);

//   return <Video isLocal={true} name={name} videoRef={videoRef} />;
// };

// export default VideoLocal;