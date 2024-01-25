import { useEffect, useState } from 'react';
import { ModalReview } from '../modals/modal-review';
import { TReview } from '../../common/types/review';
import ReviewCard from '../review-card';
import { REVIEWS_SHOW_NUMBER } from '../../common/const';
import { ModalReviewSuccess } from '../modals/modal-review-success';

type TReviewsBlockProps = {
  reviews: TReview[];
  activeProductId: number;
}

export function ReviewsBlock ({reviews, activeProductId}: TReviewsBlockProps) {
  const [modalActive, setModalActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState<TReview[]>([]);
  const [reviewsNumber, setReviewsNumber] = useState(REVIEWS_SHOW_NUMBER);

  const addMoreReviews = (start: number, end: number) => {
    const slicedReviews = reviews.slice(start, end);
    setReviewsToShow([...reviewsToShow, ...slicedReviews]);
  };

  const handleShowMoreButtonClick = () => {
    addMoreReviews(reviewsNumber, reviewsNumber + REVIEWS_SHOW_NUMBER);
    setReviewsNumber(reviewsNumber + REVIEWS_SHOW_NUMBER);
  };

  const handleOpenModalButtonClick = () => {
    setModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    setReviewsToShow(reviews.slice(0, REVIEWS_SHOW_NUMBER));
  }, [reviews]);

  return (
    <>
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button
              className="btn"
              type="button"
              onClick={handleOpenModalButtonClick}
            >
                Оставить свой отзыв
            </button>
          </div>
          <ul className="review-block__list">
            {
              reviewsToShow.map((item) => (
                <ReviewCard key={item.id} reviewItem={item}/>
              ))
            }
          </ul>
          <div className="review-block__buttons">
            {
              reviews.length > 3 && reviews.length !== reviewsToShow.length &&
              <button
                className="btn btn--purple"
                type="button"
                onClick={handleShowMoreButtonClick}
              >
                Показать больше отзывов
              </button>
            }
          </div>
        </div>
      </section>
      <ModalReview modalActive={modalActive} setModalActive={setModalActive} activeProductId={activeProductId} setModalSuccessActive={setModalSuccessActive}/>
      <ModalReviewSuccess className='modal--narrow' modalActive={modalSuccessActive} setModalActive={setModalSuccessActive}/>
    </>
  );
}
