'use client';

import {Provider} from 'react-redux';
import {store} from '@/store';

// 공통 컴포넌트
import MyBtn from '@repo/ui/mybtn';
import MySwiper from '@repo/ui/myswiper';

// 컴포펀트
import BtnCount from '@/components/BtnCount';
import MyTest from '@/components/MyTest';

export default function Home() {
  const tempList = [{name: 'jw'}, {name: 'a'}, {name: 'b'}, {name: 'c'}];

  const handleClickBtn = e => {
    console.log(e);
  };

  return (
    <Provider store={store}>
      <BtnCount />
      <MyBtn status="default" />
      <MySwiper list={tempList} onClickBtn={handleClickBtn} />
      <MyTest footer={<span>Lorem, ipsum dolor.</span>} />
    </Provider>
  );
}
