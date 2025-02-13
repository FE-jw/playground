'use client';

// 스토어
import useCountStore from '@/store/count';

function Count() {
  const count = useCountStore(state => state.count);
  const increment = useCountStore(state => state.increment);
  const decrement = useCountStore(state => state.decrement);

  return (
    <div>
      {count}
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Count;
