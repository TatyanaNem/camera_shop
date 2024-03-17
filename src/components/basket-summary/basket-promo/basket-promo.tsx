import { ChangeEvent, FormEvent} from 'react';
import { PromoValidationStatus} from '../../../common/const';

type TBasketPromoProps = {
  promoCode: string;
  onInputPromoChange: (value: string) => void;
  onPromoSubmit: (event: FormEvent) => void;
  isCartEmpty: boolean;
  promoCodeValidationStatus: PromoValidationStatus;
}

export function BasketPromo ({promoCode, onInputPromoChange, onPromoSubmit, isCartEmpty, promoCodeValidationStatus}: TBasketPromoProps) {
  function handleInputPromoChange (event: ChangeEvent<HTMLInputElement>) {
    onInputPromoChange(event.target.value);
  }

  function getPromoCodeValidationInputClass () {
    if (promoCodeValidationStatus === PromoValidationStatus.NotValid || promoCodeValidationStatus === PromoValidationStatus.Error) {
      return 'is-invalid';
    }
    if (promoCodeValidationStatus === PromoValidationStatus.Valid) {
      return 'is-valid';
    }
    return '';
  }

  return (
    <div className="basket__promo">
      <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
      <div className="basket-form">
        <form action="#" onSubmit={onPromoSubmit}>
          <div className={`custom-input ${getPromoCodeValidationInputClass()}`}>
            <label><span className="custom-input__label">Промокод</span>
              <input
                type="text"
                name="promo"
                value={promoCode}
                placeholder="Введите промокод"
                onChange={handleInputPromoChange}
              />
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className="custom-input__success">Промокод принят!</p>
          </div>
          <button
            className="btn"
            type="submit"
            disabled={isCartEmpty}
          >
            Применить
          </button>
        </form>
      </div>
    </div>
  );
}
