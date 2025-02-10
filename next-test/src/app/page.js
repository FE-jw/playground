'use client';

import { useState, useEffect } from 'react';
import Tit from '@components/Tit';
import Btn from '@components/Btn';
import MyLink from '@components/MyLink';
import titStyle from '@components/Tit.module.css';
import btnStyle from '@components/Btn.module.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@features/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default function Home() {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
  };

  const handleMouseEnter = evt => {
    console.log(evt.target);
  };

  const handleMouseLeave = evt => {
    console.log(evt.target);
  };

  useEffect(() => {
    console.log('cnt 변수 업데이트 되면 재실행');
  }, [cnt]);

  useEffect(() => {
    console.log('Home 컴포넌트 렌더링 완료');
  }, []);

  return (
    <Provider store={store}>
      <Tit classlist={`${titStyle.main}`}>HHHHHH</Tit>
      <span className="w-[50px] h-[50px] inline-flex justify-center items-center">{cnt}</span>
      <Btn classlist={`${btnStyle.default} px-[20px] py-[10px] d:px-[30px]`} click={handleClick}>
        UP
      </Btn>
      <Btn classlist={`${btnStyle.default} px-[20px] py-[10px] d:px-[30px]`} click={handleClick}>
        UP Store
      </Btn>

      <CommonTxt className={'p-[10px] text-[20px] box-border'}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam vel, asperiores officiis tempora quisquam,
        fugiat officia porro rem dolore unde exercitationem culpa dolor quis odio commodi repellat rerum delectus ipsum
        provident. Rerum obcaecati soluta voluptatum quod autem. Dolor deleniti incidunt ab maxime illo cupiditate omnis
        quod, doloremque tempora dignissimos repellat corporis reiciendis dolore cumque temporibus, eius, quidem fuga
        nobis soluta cum quisquam esse aliquam! Aliquam, perspiciatis deserunt corrupti architecto reprehenderit
        voluptates. Reprehenderit inventore sint corporis expedita accusamus facere soluta minima ab praesentium porro
        et recusandae debitis consequatur possimus alias, aperiam ipsam ex, molestias natus obcaecati, repellendus
        voluptates temporibus. Quasi, nostrum.
      </CommonTxt>
      <MyLink href="/about" evtMouseEnter={handleMouseEnter} evtMouseLeave={handleMouseLeave}>
        about
      </MyLink>
      <MyLink href="/intro" evtMouseEnter={handleMouseEnter} evtMouseLeave={handleMouseLeave}>
        intro
      </MyLink>
      <MyLink href="/noevent">no event</MyLink>
    </Provider>
  );
}

function CommonTxt(props) {
  useEffect(() => {
    console.log('CommonTxt 컴포넌트 렌더링 완료');
  }, []);

  return <p className={props.className}>{props.children}</p>;
}
