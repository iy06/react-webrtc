import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

const InputForms = ({ rtcClient }) => {

  if (rtcClient === null) return <></>;

  return (
    <>
      {/* 自分の名前を入力するコンポーネント */}
      <InputFormLocal rtcClient={rtcClient}/>
      {/* 相手の名前を入力するコンポーネント */}
      <InputFormRemote rtcClient={rtcClient}/>
    </>
  )
}

export default InputForms;