import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductCard from '../product-card';
import { TCamera } from '../../common/types/camera';
import { useAppSelector } from '../../common/hooks';
import { selectAppStatus } from '../../store/app-process/selectors';
import { AppRoute, FIRST_SLIDE_ITEM_INDEX, RequestStatus, SLIDES_PER_VIEW } from '../../common/const';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

type TSimilarProductsProps = {
  similarProducts: TCamera[];
}

export function SimilarProducts ({similarProducts}: TSimilarProductsProps) {
  const fetchingStatus = useAppSelector(selectAppStatus);
  const [firstContentIndex, setFirstContentIndex] = useState<number>(FIRST_SLIDE_ITEM_INDEX);
  const lastContentIndex = firstContentIndex + SLIDES_PER_VIEW;

  const isPrev = firstContentIndex === FIRST_SLIDE_ITEM_INDEX;
  const isNext = lastContentIndex === similarProducts.length;

  const changeSlide = (direction: boolean) => {
    setFirstContentIndex((prevState) => {
      if (direction) {
        if (lastContentIndex === similarProducts.length) {
          return prevState;
        }
        return prevState + SLIDES_PER_VIEW;
      } else {
        if (prevState === FIRST_SLIDE_ITEM_INDEX) {
          return prevState;
        }
        return prevState - SLIDES_PER_VIEW;
      }
    });
  };

  const handleButtonNextClick = () => changeSlide(true);
  const handleButtonPrevClick = () => changeSlide(false);

  if (fetchingStatus === RequestStatus.Loading) {
    return <h1>Loading...</h1>;
  }

  if (fetchingStatus === RequestStatus.Failed) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="product-similar" data-testid='product-similar'>
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={3}
            slidesPerView={3}
            spaceBetween={32}
            navigation={{
              prevEl: '.slider-controls--prev',
              nextEl: '.slider-controls--next'
            }}
            className='product-similar__slider-list'
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {
              !!similarProducts && similarProducts.map((item) => (
                <SwiperSlide
                  key={item.id}
                  data-testid='similar-slide'
                >
                  <ProductCard product={item} className='is-active'/>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <button
            id='prev'
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
            disabled={isPrev}
            style={{pointerEvents: isPrev ? 'none' : 'auto'}}
            onClick={handleButtonPrevClick}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            id='next'
            className="slider-controls slider-controls--next"
            type="button"
            aria-label="Следующий слайд"
            disabled={isNext}
            style={{pointerEvents: isNext ? 'none' : 'auto'}}
            onClick={handleButtonNextClick}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
