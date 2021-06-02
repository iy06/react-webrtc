import React from 'react';

const getMedia = async () => {
  // 使用するメディアの種類を定義
  const constraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch(error) {
    // エラー処理
    console.log(error)
  }
};

getMedia();

constApp = () => {
  return <div>Hello, React!</div>;
};

export default App;
