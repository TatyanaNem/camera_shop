import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductCard from '../product-card';
import { TCamera } from '../../common/types/camera';
import { useAppSelector } from '../../common/hooks';
import { selectAppStatus } from '../../store/app-process/selectors';
import { AppRoute, RequestStatus } from '../../common/const';
import { Navigate } from 'react-router-dom';

type TSimilarProductsProps = {
  similarProducts: TCamera[];
}

export function SimilarProducts ({similarProducts}: TSimilarProductsProps) {
  const fetchingStatus = useAppSelector(selectAppStatus);

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
            type="button" aria-label="Предыдущий слайд"
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
