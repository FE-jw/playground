import { useEffect } from 'react';

function Btn(props) {
  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <button type="button" onClick={props.click} className={props.classlist}>
      {props.children}
      {props.swiper && <div>Swiper is true</div>}
    </button>
  );
}

export default Btn;
