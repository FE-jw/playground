import './App.css';
import axios, { HttpStatusCode } from 'axios';
import {useQuery} from '@tanstack/react-query';
import {useDefaultStore} from './store/useDefaultStore';

interface dataProps {
  id: number;
  title: string;
  body: string;
}

function App() {
  const {count, inc} = useDefaultStore();

  const queryFn = async () => {
    console.log('queryFn called');
    
    try{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
  
      return data as dataProps[];
    }catch{
      console.log('error caught in queryFn');
    }
  }
  
  const { data, isLoading, error } = useQuery({
    queryKey: [count],
    queryFn,
  });

  if (error) return <div>Error occurred: {(error as Error).message}</div>;
  
  return (
    <>
    <button onClick={inc}>Refresh</button>
     <div style={{ padding: 16 }}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <ul>
        {data?.slice(0, 10).map((item) => (
          <li key={item.id}>
            {item.title}: {item.body}
          </li>
        ))}
      </ul>
      }
    </div>
    </>
  );
}

export default App;
