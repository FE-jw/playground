'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import style from './myswiper.module.css';

function myswiper(props) {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {props.list.map((item, index) => (
        <SwiperSlide key={index}>
          <button
            type="button"
            className={style.btn}
            onClick={() => props.onClickBtn({name: item.name, index})}
          >
            {item.name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default myswiper;
