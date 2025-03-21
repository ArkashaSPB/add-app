import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// Если нужно подключение дополнительных модулей:
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const url =  import.meta.env.VITE_IMG;
const SwiperImg = ({images}) => {
	return (
		<Swiper
			modules={[Navigation, Pagination]} // Модули: управление и пагинация
			spaceBetween={16} // Отступы между слайдами
			slidesPerView={3} // Количество слайдов, видимых одновременно
			navigation // Включаем кнопки навигации (стрелки)
			pagination={{ clickable: true }} // Включаем пагинацию (точки)
		>
			{images && images.map((src, index) => (
				<SwiperSlide key={index}>
					<img src={url+src} alt={`Slide ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
				</SwiperSlide>
			))}
		</Swiper>

	);
};

export default SwiperImg;