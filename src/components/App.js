import React, { useState, useReducer } from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import RtcClient from '../utils/RtcClient';
import VideoArea from './VideoArea';

const App = () => {
  const [rtcClient, _setRtcClient] = useState(new RtcClient());
  const [, forceRender] = useReducer((boolean) => !boolean, false);
  const setRtcClient = (rtcClient) => {
    _setRtcClient(rtcClient);
    forceRender();
  };

  return(
    <>
      {/* 自分の名前を入力するコンポーネント */}
      <InputFormLocal rtcClient={rtcClient} setRtcClient={setRtcClient}/>
      {/* 相手の名前を入力するコンポーネント */}
      <InputFormRemote rtcClient={rtcClient} setRtcClient={setRtcClient}/>
      {/* ビデオを表示するコンポーネント */}
      <VideoArea rtcClient={rtcClient}/>
    </>
  );
};

export default App;

