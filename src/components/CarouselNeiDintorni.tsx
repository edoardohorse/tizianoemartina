import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image'

import styles from  './style/carousel.module.css'
import  './style/carousel.module.css'



export default function CarouselNeiDintorni(props: {images: Array<string>}) {
	return (
		<>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				// slidesPerView={5}
				className={styles.carousel}
				spaceBetween={800}
				speed={300}
			>
				{props.images.map((src, index)=>{
					return <SwiperSlide key={index} className={styles['slide']}><img src={src} className={styles.image} alt={'1'}/></SwiperSlide>
				})}

			</Swiper>
		</>
	);
}