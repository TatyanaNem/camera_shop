import { useSwiper } from 'swiper/react';

export function SwiperNavigations () {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд">
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </>
  );
}
