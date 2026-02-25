import './App.css';
import {useQuery} from '@tanstack/react-query';
import {useDefaultStore} from './store/useDefaultStore';
import {postsProps} from './types';

function App() {
  const {count, setCount} = useDefaultStore();

  // 데이터 패칭 함수
  const queryFn = async () => {
    console.log('queryFn called');
    
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
  
      return data as postsProps[];
    }catch{
      console.log('error caught in queryFn');
    }
  }
  
  // 스토어의 count 값이 변경되면 쿼리 재실행
  const { data, isLoading, error } = useQuery({
    queryKey: [count],  // 스토어에 있는 값을 쿼리키로 사용
    queryFn,
  });

  if (error) return <div>Error occurred: {(error as Error).message}</div>;
  
  return (
    <>
    <button onClick={setCount}>Refresh</button>
     <div style={{ padding: 16 }}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <ul>
        {data?.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>({item.id}) {item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      }
    </div>
    </>
  );
}

export default App;
