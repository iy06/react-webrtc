import React, { useState, useReducer } from 'react';
import InputForms from '../components/InputForms';
import VideoArea from './VideoArea';
import useRtcClient from './hooks/useRtcClient';

const App = () => {
  // rtcClientをカスタムHookとして定義
  const rtcClient = useRtcClient();

  return(
    <>
      <InputForms rtcClient={rtcClient}/>
      {/* ビデオを表示するコンポーネント */}
      <VideoArea rtcClient={rtcClient}/>
    </>
  );
};

export default App;

