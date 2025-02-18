'use client';
import style from './mybtn.module.css';
import {useState} from 'react';

function mybtn(props) {
  const [text, setText] = useState('default text');

  const handleClick = () => {
    props.onClick(text);
  };

  return (
    <button type="button" onClick={handleClick} className={style[props.status]}>
      mybtn
    </button>
  );
}

export default mybtn;
