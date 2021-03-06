// RtcClientクラス
import FirebaseSignalingClient from './FirebaseSignalingClient';
export default class RtcClient {
  constructor(remoteVideoRef, setRtcClient) {
    // stunサーバーのurlを設定
    const config = {
      iceServers: [{
          urls: 'stun:stun.stunprotocol.org',
        },
      ],
    };

    this.rtcPeerConnection = new RTCPeerConnection(config);
    this.FirebaseSignalingClient = new FirebaseSignalingClient();
    this.localPeerName = '';
    this.remotePeerName = '';
    this.remoteVideoRef = remoteVideoRef;
    this._setRtcClient = setRtcClient;
    this.mediaStream = null;
  };

  setRtcClient() {
    this._setRtcClient(this);
  };

  async getUserMedia() {
    try {
      const constraints = { audio: true, video: true };
      this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch(error) {
      console.log(error);
    };
  };

  async setMediaStram() {
    await this.getUserMedia();
  };

  addTracks() {
    this.addAudioTrack();
    this.addVideoTrack();
  };

  addAudioTrack() {
    this.rtcPeerConnection.addTrack(this.audioTrack, this.mediaStream);
  };

  addVideoTrack() {
    this.rtcPeerConnection.addTrack(this.videoTrack, this.mediaStream);
  };

  get audioTrack() {
    return this.mediaStream.getAudioTracks()[0];
  };

  get videoTrack() {
    return this.mediaStream.getVideoTracks()[0];
  };

  async offer() {
    const sessionDescription = await this.createOffer();
    console.log(sessionDescription);
    await this.setLocalDescription(sessionDescription);
    await this.sendOffer();
  };

  async createOffer() {
    console.log("ok");
    try {
      return await this.rtcPeerConnection.createOffer();
    } catch(error) {
      console.error(error);
    };
  };

  async setLocalDescription(sessionDescription) {
    try {
      await this.rtcPeerConnection.setLocalDescription(sessionDescription);
    } catch(error) {
      console.error(error);
    };
  };

  async sendOffer() {
    this.FirebaseSignalingClient.setPeerNames(
      this.localPeerName,
      this.remotePeerName
    );
    console.log(this.rtcPeerConnection.localDescription);
    await this.FirebaseSignalingClient.sendOffer(this.localDescription);
  };

  get localDescription() {
    return this.rtcPeerConnection.localDescription.toJSON();
  };

  setOnTrack() {
    this.rtcPeerConnection.onTrack = (rtcTrackEvent) => {
      if (rtcTrackEvent.track.kind !== 'video') return;
      const remoteMediaStream = rtcTrackEvent.stream[0];
      this.remoteVideoRef.current.srcObject = remoteMediaStream;
      this.setRtcClient();
    };
  };

  async connect(remotePeerName) {
    this.remotePeerName = remotePeerName;
    this.setOnicecandidateCallback();
    this.setOnTrack();
    await this.offer();
    this.setRtcClient();
  };

  setOnicecandidateCallback = () => {
    this.rtcPeerConnection.setOnicecandidate = ({ candidate }) => {
      console.log(candidate);
      if (candidate) {
        console.log(candidate);
      }
    };
  };

  startListening(localPeerName) {
    this.localPeerName = localPeerName;
    this.setRtcClient();
    this.FirebaseSignalingClient.database.ref(localPeerName).on('value', (snapshot) => {
      // const data = snapshot.val();
    });
  };
};