import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

import './styles.css';

interface AbSwiperModel {
  children?: React.ReactNode[];
}

function AbNewsSwiper({ children }: AbSwiperModel) {
  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}

export default AbNewsSwiper;