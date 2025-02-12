'use client';

import MyBtn from '@repo/ui/mybtn';
import MySwiper from '@repo/ui/myswiper';

export default function Home() {
  const tempList = [{name: 'jw'}, {name: 'a'}, {name: 'b'}, {name: 'c'}];

  const handleClickBtn = e => {
    console.log(e);
    console.log(e);
  };

  return (
    <>
      <MyBtn status="default" />
      <MySwiper list={tempList} onClickBtn={handleClickBtn} />
    </>
  );
}
