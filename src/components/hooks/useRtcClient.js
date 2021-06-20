import { useState, useEffect, useReducer, useRef } from 'react';
import RtcClient from '../../utils/RtcClient';

const useRtcClient = () => {
  const [rtcClient, _setRtcClient] = useState(null);
  const remoteVideoRef = useRef(null);
  const [, forceRender] = useReducer((boolean) => !boolean, false);

  const setRtcClient = (rtcClient) => {
    _setRtcClient(rtcClient);

    forceRender();
  };

  useEffect(() => {
    // useEffect内でasyncを使用する場合は、別で関数を作成する。
    const init = async () => {
      const client = new RtcClient(remoteVideoRef, setRtcClient);
      await client.getUserMedia();
      client.setRtcClient();
    };

    init();
  }, []);

  return rtcClient;
};

export default useRtcClient;
