import { useState } from 'react';
import { ModalReview } from '../modals';
import { TReview } from '../../common/types/review';
import ReviewCard from '../review-card';
import { REVIEWS_SHOW_NUMBER } from '../../common/const';
import { compareDates } from '../../utils/date';
import { ModalReviewSuccess } from '../modals';
import { useAppDispatch } from '../../common/hooks';
import { closeModalReview, closeSuccessModal, openModalReview, openSuccessModal, resetModal } from '../../store/review-process/review-process';
import { TReviewFormData } from '../../common/types/review-data';
import { postReview } from '../../store/api-actions';

type TReviewsBlockProps = {
  reviews: TReview[];
  activeProductId: number;
}

export function ReviewsBlock ({reviews, activeProductId}: TReviewsBlockProps) {
  const dispatch = useAppDispatch();
  const [reviewsToShow, setReviewsToShow] = useState<TReview[]>([...reviews.slice(0, REVIEWS_SHOW_NUMBER)]);
  const reviewsItems = [...reviews].sort((a, b) => compareDates(a.createAt, b.createAt));
  const [reviewsNumber, setReviewsNumber] = useState(REVIEWS_SHOW_NUMBER);

  const addMoreReviews = (start: number, end: number) => {
    const slicedReviews = reviewsItems.slice(start, end);
    setReviewsToShow([...reviewsToShow, ...slicedReviews]);
  };

  const handleShowMoreButtonClick = () => {
    addMoreReviews(reviewsNumber, reviewsNumber + REVIEWS_SHOW_NUMBER);
    setReviewsNumber(reviewsNumber + REVIEWS_SHOW_NUMBER);
  };

  const handleOpenModalButtonClick = () => {
    dispatch(openModalReview());
    document.body.style.overflow = 'hidden';
  };

  const handleOnReviewModalClose = () => {
    dispatch(closeModalReview());
  };

  const handleOnSuccessModalClose = () => {
    dispatch(closeSuccessModal());
  };

  const handleOnReviewModalSubmit = (data: TReviewFormData) => {
    dispatch(postReview({
      reviewData: {...data, cameraId: activeProductId},
      callWhenResolved: () => {
        document.body.style.overflow = 'visible';
        dispatch(resetModal());
        dispatch(closeModalReview());
        dispatch(openSuccessModal());
      }
    }));
  };

  return (
    <>
      <section className="review-block" data-testid='review-block'>
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
              reviewsItems.slice(0, reviewsNumber).map((item) => (
                <ReviewCard key={item.id} reviewItem={item}/>
              ))
            }
          </ul>
          <div className="review-block__buttons">
            {
              reviewsNumber <= reviews.length &&
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
      <ModalReview onModalSubmit={handleOnReviewModalSubmit} onModalClose={handleOnReviewModalClose}/>
      <ModalReviewSuccess onModalClose={handleOnSuccessModalClose}/>
    </>
  );
}
