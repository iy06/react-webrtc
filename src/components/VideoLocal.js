import React, { useEffect, useRef } from 'react';
import Video from './Video';

const VideoLocal = ({ name }) => {
  // useRefを初期化
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;

  useEffect(() => {
    if (currentVideoRef === null) return;

    const getMedia = async () => {
      // 使用するメディアの種類を定義
      const constraints = { audio: true, video: true };
      console.log("getMedia!")

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(mediaStream);
        currentVideoRef.srcObject = mediaStream;
      } catch(error) {
        console.log(error)
      }
    };

    getMedia();
  }, [currentVideoRef]);

  return <Video isLocal={true} videoRef={videoRef} name={name}/>;
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