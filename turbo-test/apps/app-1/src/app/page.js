'use client';

import {Provider} from 'react-redux';
import {store} from '@/store';
import {useId} from 'react';

// 공통 컴포넌트
import MyBtn from '@repo/ui/mybtn';
import MySwiper from '@repo/ui/myswiper';

// 컴포넌트
import BtnCount from '@/components/BtnCount';
import MyTest from '@/components/MyTest';

export default function Home() {
  const tempList = [{name: 'jw'}, {name: 'a'}, {name: 'b'}, {name: 'c'}];

  for (let index = 0; index < 100; index++) {
    console.log(`${index}: `, useId());
  }

  const handleClickBtn = e => {
    console.log(e);
  };

  const handleClickBtn2 = text => {
    console.log(text);
  };

  return (
    <Provider store={store}>
      <BtnCount />
      <MyBtn status="default" onClick={() => console.log('this')} />
      <MyBtn status="default" onClick={handleClickBtn2} />
      <MySwiper list={tempList} onClickBtn={handleClickBtn} />
      <MyTest footer={<span>Lorem, ipsum dolor.</span>} />
    </Provider>
  );
}
