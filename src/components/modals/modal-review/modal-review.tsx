import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../../common/modal';
import { useAppSelector } from '../../../common/hooks';
import { useLayoutEffect, useRef } from 'react';
import { selectModalReviewState, selectShouldResetStatus } from '../../../store/review-process/selectors';
import { TReviewFormData } from '../../../common/types/review-data';

type TModalReviewProps = {
  onModalSubmit: (data: TReviewFormData) => void;
  onModalClose: () => void;
}

type TFormIValues = {
  rating: number;
  userName: string;
  userPlus: string;
  userMinus: string;
  userComment: string;
}

export function ModalReview ({onModalSubmit, onModalClose}: TModalReviewProps) {
  const isModalActive = useAppSelector(selectModalReviewState);
  const shouldResetStatus = useAppSelector(selectShouldResetStatus);
  const ratingRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset} = useForm<TFormIValues>({
    defaultValues: {
      rating: 0,
      userName: '',
      userPlus: '',
      userMinus: '',
      userComment: ''
    },
    mode: 'onChange'
  });
  const rateStarsValue = watch('rating');
  const {ref, ...rest} = register('rating', {required: true});

  const onSubmit: SubmitHandler<TFormIValues> = (data: TFormIValues, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    onModalSubmit({
      userName: data.userName,
      advantage: data.userPlus,
      disadvantage: data.userMinus,
      review: data.userComment,
      rating: Number(data.rating)
    });
  };

  useLayoutEffect(() => {
    if (shouldResetStatus) {
      reset();
    }
  }, [shouldResetStatus, reset]);

  return (
    <Modal
      title='Оставить отзыв'
      isNarrow={false}
      modalActive={isModalActive}
      onPopupClose={onModalClose}
      defaultFocusedElement={ratingRef}
    >
      <div className="form-review" data-testid='form-review'>
        <form
          method="post"
          onSubmit={(event) =>
            void handleSubmit(onSubmit)(event)}
        >
          <div className="form-review__rate">
            <fieldset className={errors.rating ? 'rate form-review__item is-invalid' : 'rate form-review__item'} autoFocus>
              <legend className="rate__caption">Рейтинг
                <svg width="9" height="9" aria-hidden="true">
                  <use xlinkHref="#icon-snowflake"></use>
                </svg>
              </legend>
              <div className="rate__bar">
                <div className="rate__group">
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    className="visually-hidden"
                    id="star-5"
                    type="radio"
                    value="5"
                  />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    className="visually-hidden"
                    id="star-4"
                    type="radio"
                    value="4"
                  />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    className="visually-hidden"
                    id="star-3"
                    type="radio"
                    value="3"
                  />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    className="visually-hidden"
                    id="star-2"
                    type="radio"
                    value="2"
                  />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    className="visually-hidden"
                    id="star-1"
                    type="radio"
                    value="1"
                    ref={(evt) => {
                      ref(evt);
                      ratingRef.current = evt;
                    }}
                    {...rest}
                  />
                  <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                </div>
                <div className="rate__progress"><span className="rate__stars">{rateStarsValue}</span> <span>/</span> <span className="rate__all-stars">5</span>
                </div>
              </div>
              <p className="rate__message">Нужно оценить товар</p>
            </fieldset>
            <div className={errors.userName ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
              <label>
                <span className="custom-input__label">Ваше имя
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  {...register('userName', {
                    required: {
                      value: true,
                      message: 'Нужно указать имя'
                    },
                    minLength: {
                      value: 2,
                      message: 'Не менее 2 символов'
                    },
                    maxLength: {
                      value: 15,
                      message: 'Не более 15 символов'
                    }
                  })}
                  type="text"
                  name="userName"
                  placeholder="Введите ваше имя"
                  data-testid='user-name'
                />
              </label>
              {errors.userName && errors.userName.type === 'required' && <p className="custom-input__error">Нужно указать имя</p>}
              {errors.userName && errors.userName.type === 'minLength' && <p className="custom-input__error">{errors.userName.message}</p>}
              {errors.userName && errors.userName.type === 'maxLength' && <p className="custom-input__error">{errors.userName.message}</p>}
            </div>
            <div className={errors.userPlus ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
              <label>
                <span className="custom-input__label">Достоинства
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  {...register('userPlus', {
                    required: {
                      value: true,
                      message: 'Нужно указать достоинства'
                    },
                    minLength: {
                      value: 10,
                      message: 'Не менее 10 символов'
                    },
                    maxLength: {
                      value: 160,
                      message: 'Не более 160 символов'
                    }
                  })}
                  type="text"
                  name="userPlus"
                  placeholder="Основные преимущества товара"
                />
              </label>
              {errors.userPlus && errors.userPlus.type === 'required' && <p className="custom-input__error">{errors.userPlus.message}</p>}
              {errors.userPlus && errors.userPlus.type === 'minLength' && <p className="custom-input__error">{errors.userPlus.message}</p>}
              {errors.userPlus && errors.userPlus.type === 'maxLength' && <p className="custom-input__error">{errors.userPlus.message}</p>}
            </div>
            <div className={errors.userMinus ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
              <label>
                <span className="custom-input__label">Недостатки
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  {...register('userMinus', {
                    required: {
                      value: true,
                      message: 'Нужно указать недостатки'
                    },
                    minLength: {
                      value: 3,
                      message: 'Не менее 10 символов'
                    },
                    maxLength: {
                      value: 160,
                      message: 'Не более 160 символов'
                    }
                  })}
                  type="text"
                  name="userMinus"
                  placeholder="Главные недостатки товара"
                />
              </label>
              {errors.userMinus && errors.userMinus.type === 'required' && <p className="custom-input__error">{errors.userMinus.message}</p>}
              {errors.userMinus && errors.userMinus.type === 'minLength' && <p className="custom-input__error">{errors.userMinus.message}</p>}
              {errors.userMinus && errors.userMinus.type === 'maxLength' && <p className="custom-input__error">{errors.userMinus.message}</p>}
            </div>
            <div className={errors.userComment ? 'custom-textarea form-review__item is-invalid' : 'custom-textarea form-review__item'}>
              <label>
                <span className="custom-textarea__label">Комментарий
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <textarea
                  {...register('userComment', {
                    required: {
                      value: true,
                      message: 'Нужно добавить комментарий'
                    },
                    minLength: {
                      value: 10,
                      message: 'Не менее 10 символов'
                    },
                    maxLength: {
                      value: 160,
                      message: 'Не более 160 символов'
                    }
                  })}
                  name="userComment"
                  minLength={5}
                  placeholder="Поделитесь своим опытом покупки"
                >
                </textarea>
              </label>
              {errors.userComment && errors.userComment.type === 'required' && <div className="custom-textarea__error">{errors.userComment.message}</div>}
              {errors.userComment && errors.userComment.type === 'minLength' && <p className="custom-input__error">{errors.userComment.message}</p>}
              {errors.userComment && errors.userComment.type === 'maxLength' && <p className="custom-input__error">{errors.userComment.message}</p>}
            </div>
          </div>
          <button
            className="btn btn--purple form-review__btn"
            type="submit"
            disabled={isSubmitting}
          >{isSubmitting ? 'Отправляю...' : 'Отправить отзыв'}
          </button>
        </form>
      </div>
    </Modal>
  );
}
