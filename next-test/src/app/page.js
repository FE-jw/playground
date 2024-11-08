'use client';

import { useState, useEffect } from 'react';
import Tit from '@/components/Tit';
import Btn from '@/components/Btn';
import titStyle from '@/components/Tit.module.css';
import btnStyle from '@/components/Btn.module.css';

export default function Home() {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
  };

  useEffect(() => {
    console.log('cnt 변수 업데이트 되면 재실행');
  }, [cnt]);

  useEffect(() => {
    console.log('Home 컴포넌트 렌더링 완료');
  }, []);

  return (
    <>
      <Tit classlist={`${titStyle.main}`}>HHHHHH</Tit>
      <span className="w-[50px] h-[50px] inline-flex justify-center items-center">{cnt}</span>
      <Btn classlist={`${btnStyle.default} px-[20px] py-[10px] d:px-[30px]`} click={handleClick}>
        UP
      </Btn>
      <CommonTxt classlist={'w-[80%] p-[10px] text-[20px]'} />
    </>
  );
}

function CommonTxt(props) {
  useEffect(() => {
    console.log('CommonTxt 컴포넌트 렌더링 완료');
  }, []);

  return (
    <p className={props.classlist}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit reiciendis, repellendus debitis quod
      perspiciatis laudantium illo totam modi voluptatibus fuga cum optio esse iste omnis unde temporibus inventore
      quibusdam excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, necessitatibus. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Culpa nihil velit eaque veniam porro perferendis, sapiente
      dignissimos reiciendis unde possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      obcaecati accusamus rem nobis molestias provident corrupti tempore eligendi, quia hic. At et porro quam libero
      perferendis officiis neque qui impedit.
    </p>
  );
}
