import {useSelector, useDispatch} from 'react-redux';

function MyTest(props) {
  const popup = useSelector(state => state.popup.isOpen);
  console.log(props);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
      blanditiis.
      <div className={popup ? 'red' : 'blue'}>클래스 변경</div>
      {props.footer}
    </div>
  );
}

export default MyTest;
