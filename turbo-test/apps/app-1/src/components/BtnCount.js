import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '@/store/reducers/counter';
import {open, close} from '@/store/reducers/popup';

function BtnCount() {
  const count = useSelector(state => state.counter.count);
  const popup = useSelector(state => state.popup.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>{popup ? 'true' : 'false'}</div>
      <div>
        <button onClick={() => dispatch(open())}>Open</button>
      </div>
      <div>
        <button onClick={() => dispatch(close())}>Close</button>
      </div>
    </div>
  );
}

export default BtnCount;
