'use client';

import MySwiper from '@repo/ui/myswiper';

export default function Home() {
  const tempList = [{name: 'app-2'}, {name: 'a'}, {name: 'b'}, {name: 'c'}];

  return (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita
      <MySwiper list={tempList} onClickBtn={e => console.log(e)} />
    </>
  );
}
