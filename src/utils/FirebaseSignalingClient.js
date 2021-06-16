import firebase from 'firebase/app';
import 'firebase/database';

export default class SignalingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDZhNeM1zc6anPpOKyJpxuYrdWUGycOFu0",
      authDomain: "react-webrtc-54762.firebaseapp.com",
      databaseURL: "https://react-webrtc-54762-default-rtdb.firebaseio.com",
      projectId: "react-webrtc-54762",
      storageBucket: "react-webrtc-54762.appspot.com",
      messagingSenderId: "999810639778",
      appId: "1:999810639778:web:db900792702bd8eee0b4fb"
    };
    // ブラウザにキャッシュされているシグナリングサーバのインスタンスがなければ初期化する。
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    // インスタンスとして持ち回るため定義
    this.database = firebase.database();

    this.localPeerName = '';
    
    this.remotePeerName = '';
  };
};