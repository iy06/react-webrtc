import React from 'react';
import { Button } from '@material-ui/core';

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
  return <Button color="inherit" variant="contained">Hello World</Button>;
};

export default App;
