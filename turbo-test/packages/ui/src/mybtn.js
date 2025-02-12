'use client';
import style from './mybtn.module.css';

function mybtn(props) {
  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <button type="button" onClick={handleClick} className={style[props.status]}>
      mybtn
    </button>
  );
}

export default mybtn;
