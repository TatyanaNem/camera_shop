import { RATING_NUMBER } from '../../common/const';

type StarRatingProps = {
  rating: number;
  reviewCount: number;
}

export function StarRating ({rating, reviewCount}: StarRatingProps) {
  return (
    <div className="rate product-card__rate">

      {Array.from({length: RATING_NUMBER}).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <svg key={index}
          width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref={(index + 1) <= rating ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}
      <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}
