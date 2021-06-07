import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
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
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');

  console.log({localPeerName, remotePeerName})

  return(
    <>
      <InputFormLocal
        localPeerName={localPeerName}
        setLocalPeerName={setLocalPeerName}
      />

      <InputFormRemote
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
        setRemotePeerName={setRemotePeerName}
      />
    </>
  );
};

export default App;
