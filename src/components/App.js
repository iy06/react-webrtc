import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

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

const App = () => {
  return(
    <>
      <InputFormLocal />;
      <InputFormRemote />;
    </>
  );
};

export default App;
