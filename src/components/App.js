import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import RtcClient from '../utils/RtcClient';
import VideoArea from './VideoArea';

const App = () => {
  const rtcClient = new RtcClient();
  console.log(rtcClient);

  return(
    <>
      {/* 自分の名前を入力するコンポーネント */}
      <InputFormLocal rtcClient={rtcClient} />
      {/* 相手の名前を入力するコンポーネント */}
      <InputFormRemote rtcClient={rtcClient} />
      {/* ビデオを表示するコンポーネント */}
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
