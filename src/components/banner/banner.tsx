import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './banner.module.css';
import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { TPromo } from '../../common/types/promo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';

type TBannerProps = {
  slides: TPromo[];
}

export function Banner ({slides}: TBannerProps) {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      pagination={{clickable: true}}
      slidesPerView={1}
      loop
      autoplay={{delay: 3000}}
      className={styles.sliderWrapper}
    >
      {
        slides.map((slide) => (
          <SwiperSlide key={slide.id} data-testid='promo-slide'>
            <div className="banner">
              <picture>
                <source type="image/webp" srcSet={`${slide.previewImgWebp}, ${slide.previewImgWebp2x} 2x`}/>
                <img src={slide.previewImg} srcSet={`${slide.previewImg2x} 2x`} width="1280" height="280" alt={slide.name}/>
              </picture>
              <p className="banner__info">
                <span className="banner__message">Новинка!</span>
                <span className="title title--h1">{slide.name}</span>
                <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
                <Link
                  className="btn"
                  to={`${AppRoute.Product}/${slide.id}`}
                >
                  Подробнее
                </Link>
              </p>
            </div>
          </SwiperSlide>))
      }
    </Swiper>
  );
}
