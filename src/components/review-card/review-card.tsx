import { TReview } from '../../common/types/review';
import { formatDate } from '../../utils/date';
import StarRating from '../star-rating';

type TReviewCardProps = {
  reviewItem: TReview;
}

export function ReviewCard ({reviewItem}: TReviewCardProps) {
  const {userName, createAt, rating, advantage, disadvantage, review} = reviewItem;
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{formatDate(createAt)}</time>
      </div>
      <StarRating rating={rating} block='review-card'/>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}
