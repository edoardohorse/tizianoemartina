import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
				modules={[Navigation, Pagination,EffectCards]}
				className={styles.carousel}
				spaceBetween={800}
				speed={300}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{props.images.map((src, index)=>{
					return <SwiperSlide key={index} className={styles['slide']}>
						<Image src={src} className={styles.image} alt={'1'} fill={true} loading={"lazy"}/>
					</SwiperSlide>
				})}

			</Swiper>
		</>
	);
}