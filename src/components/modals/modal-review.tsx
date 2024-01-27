import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../common/modal';
import { useAppDispatch } from '../../common/hooks';
import { postReview } from '../../store/api-actions';
import { useEffect, useRef } from 'react';

type TModalReviewProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className?: string;
  activeProductId: number;
  setModalSuccessActive: (isActive: boolean) => void;
}

type TFormIValues = {
  rating: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
}

export function ModalReview ({modalActive, setModalActive, className, activeProductId, setModalSuccessActive}: TModalReviewProps) {
  const dispatch = useAppDispatch();
  const firstInputRef = useRef<HTMLFieldSetElement>(null);
  const lastInputRef = useRef<HTMLButtonElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<TFormIValues>({
    defaultValues: {
      rating: 0,
      userName: '',
      advantage: '',
      disadvantage: '',
      review: ''
    },
    mode: 'onChange'
  });
  const rateStarsValue = watch('rating');

  const onSubmit: SubmitHandler<TFormIValues> = (data: TFormIValues, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    dispatch(postReview({...data, rating: Number(data.rating), cameraId: activeProductId})).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        setModalActive(false);
        setModalSuccessActive(true);
        reset();
      }
    });
  };

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive} className={className}>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form
          method="post"
          onSubmit={(event) =>
            void handleSubmit(onSubmit)(event)}
        >
          <div className="form-review__rate">
            <fieldset className={errors.rating ? 'rate form-review__item is-invalid' : 'rate form-review__item'} ref={firstInputRef} autoFocus>
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
                    tabIndex={5}
                    className="visually-hidden"
                    id="star-5"
                    name="rating"
                    type="radio"
                    value="5"
                  />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    tabIndex={4}
                    className="visually-hidden"
                    id="star-4"
                    name="rating"
                    type="radio"
                    value="4"
                  />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    tabIndex={3}
                    className="visually-hidden"
                    id="star-3"
                    name="rating"
                    type="radio"
                    value="3"
                  />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    tabIndex={2}
                    className="visually-hidden"
                    id="star-2"
                    name="rating"
                    type="radio"
                    value="2"
                  />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <input
                    {...register('rating', {
                      required: true,
                    })}
                    tabIndex={1}
                    className="visually-hidden"
                    id="star-1"
                    name="rating"
                    type="radio"
                    value="1"
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
                />
              </label>
              {errors.userName && errors.userName.type === 'required' && <p className="custom-input__error">Нужно указать имя</p>}
              {errors.userName && errors.userName.type === 'minLength' && <p className="custom-input__error">{errors.userName.message}</p>}
              {errors.userName && errors.userName.type === 'maxLength' && <p className="custom-input__error">{errors.userName.message}</p>}
            </div>
            <div className={errors.advantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
              <label>
                <span className="custom-input__label">Достоинства
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  {...register('advantage', {
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
                  name="advantage"
                  placeholder="Основные преимущества товара"
                />
              </label>
              {errors.advantage && errors.advantage.type === 'required' && <p className="custom-input__error">{errors.advantage.message}</p>}
              {errors.advantage && errors.advantage.type === 'minLength' && <p className="custom-input__error">{errors.advantage.message}</p>}
              {errors.advantage && errors.advantage.type === 'maxLength' && <p className="custom-input__error">{errors.advantage.message}</p>}
            </div>
            <div className={errors.disadvantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
              <label>
                <span className="custom-input__label">Недостатки
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  {...register('disadvantage', {
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
                  name="disadvantage"
                  placeholder="Главные недостатки товара"
                />
              </label>
              {errors.disadvantage && errors.disadvantage.type === 'required' && <p className="custom-input__error">{errors.disadvantage.message}</p>}
              {errors.disadvantage && errors.disadvantage.type === 'minLength' && <p className="custom-input__error">{errors.disadvantage.message}</p>}
              {errors.disadvantage && errors.disadvantage.type === 'maxLength' && <p className="custom-input__error">{errors.disadvantage.message}</p>}
            </div>
            <div className={errors.review ? 'custom-textarea form-review__item is-invalid' : 'custom-textarea form-review__item'}>
              <label>
                <span className="custom-textarea__label">Комментарий
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <textarea
                  {...register('review', {
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
                  name="review"
                  minLength={5}
                  placeholder="Поделитесь своим опытом покупки"
                >
                </textarea>
              </label>
              {errors.review && errors.review.type === 'required' && <div className="custom-textarea__error">{errors.review.message}</div>}
              {errors.review && errors.review.type === 'minLength' && <p className="custom-input__error">{errors.review.message}</p>}
              {errors.review && errors.review.type === 'maxLength' && <p className="custom-input__error">{errors.review.message}</p>}
            </div>
          </div>
          <button
            ref={lastInputRef}
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
