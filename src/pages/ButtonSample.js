import React from 'react';
import './ButtonSample.css'
import { useState } from 'react';

const buttonInfo = {
  name: 'ボタンパーツ',
  url: 'http://localhost:3000/'
};

function ButtonParts() {

  const [count, setCount] = useState(0);

  function onClickButtonParts() {
    setCount(count + 1);
    alert('クリックされました！');
  }

  return (
    <button className="buttonparts" onClick={onClickButtonParts}>
      {buttonInfo.name} 【これまでに {count} 回クリックされました。】
    </button>
  );
}

const ButtonSample = () => {
  return (
    <div>
      <h1>Button Sample Page</h1>
      <ButtonParts />
    </div>
  );
};

export default ButtonSample;
