import {useSelector, useDispatch} from 'react-redux';

function MyTest() {
  const popup = useSelector(state => state.popup.isOpen);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
      blanditiis.
      <div className={popup ? 'red' : 'blue'}>클래스 변경</div>
    </div>
  );
}

export default MyTest;
