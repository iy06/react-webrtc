// RtcClientクラス
export default class RtcClient {
  constructor() {
    // stunサーバーのurlを設定
    const config = {
      iceServers: [{
          urls: 'stun:stun.stunprotocol.org',
        },
      ],
    }
    this.rtcPeerConnection = new RTCPeerConnection(config);
    this.localPeerName = '';
    this.remotePeerName = '';
  }
}