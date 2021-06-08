import React, { useState } from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import VideoArea from './VideoArea';

const App = () => {
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log({localPeerName, remotePeerName})

  return(
    <>
      {/* 自分の名前を入力するコンポーネント */}
      <InputFormLocal
        localPeerName={localPeerName}
        setLocalPeerName={setLocalPeerName}
      />
      {/* 相手の名前を入力するコンポーネント */}
      <InputFormRemote
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
        setRemotePeerName={setRemotePeerName}
      />
      {/* ビデオを表示するコンポーネント */}
      <VideoArea
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
      />
    </>
  );
};

export default App;
