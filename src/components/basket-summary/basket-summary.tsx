import { FormEvent, useEffect, useState } from 'react';
import BasketPromo from './basket-promo';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { selectDiscount, selectProductsInCart, selectPromoCode, selectPromoCodeSendingStatus } from '../../store/cart-process/selectors';
import { addPromoCode, openSendOrderModalSuccess } from '../../store/cart-process/cart-process';
import { PromoValidationStatus, RequestStatus } from '../../common/const';
import { sendOrder, sendPromo } from '../../store/api-actions';
import OrderSummary from './order-summary';

export function BasketSummary () {
  const productsInCart = useAppSelector(selectProductsInCart);
  const dispatch = useAppDispatch();
  const initialPromoCode = useAppSelector(selectPromoCode);
  const [promoCode, setPromoCode] = useState(initialPromoCode);
  const [promoCodeValidationStatus, setPromoValidationStatus] = useState(PromoValidationStatus.Default);
  const isCartEmpty = productsInCart.length === 0;
  const discountPrice = useAppSelector(selectDiscount);
  const camerasInCartTotalPrice = productsInCart.reduce((acc, item) => acc + item.camera.price * item.quantity, 0);
  const promoCodeSendingStatus = useAppSelector(selectPromoCodeSendingStatus);

  const camerasIds = productsInCart.map((item) => item.camera.id);

  function handleInputPromoChange (value: string) {
    if(value === '') {
      setPromoValidationStatus(PromoValidationStatus.Default);
    }
    setPromoCode(value);
  }

  function handlePromoFormSubmit (event: FormEvent) {
    event.preventDefault();
    const validPromoCode = promoCode.trim().split(' ').join('');
    dispatch(sendPromo(validPromoCode));
    dispatch(addPromoCode(validPromoCode));
  }

  function handleSendOrderButtonClick () {
    const validCoupon = promoCodeValidationStatus === PromoValidationStatus.Valid ? promoCode.split(' ').join('') : null;
    dispatch(sendOrder({
      camerasIds,
      coupon: validCoupon
    })).unwrap().then(
      () => {
        dispatch(openSendOrderModalSuccess());
        document.body.style.overflow = 'hidden';
        setPromoValidationStatus(PromoValidationStatus.Default);
        setPromoCode('');
      }
    );
  }

  useEffect(() => {
    if (promoCodeSendingStatus === RequestStatus.Success) {
      if (discountPrice === null) {
        setPromoValidationStatus(PromoValidationStatus.NotValid);
      } else {
        setPromoValidationStatus(PromoValidationStatus.Valid);
      }
    }
    if (promoCodeSendingStatus === RequestStatus.Failed) {
      setPromoValidationStatus(PromoValidationStatus.Error);
    }
  },[discountPrice, promoCodeSendingStatus]);

  return (
    <div className="basket__summary">
      <BasketPromo
        promoCode={promoCode}
        onInputPromoChange={handleInputPromoChange}
        onPromoSubmit={handlePromoFormSubmit}
        isCartEmpty={isCartEmpty}
        promoCodeValidationStatus={promoCodeValidationStatus}
      />
      <OrderSummary
        discountPrice={discountPrice}
        camerasInCartTotalPrice={camerasInCartTotalPrice}
        isCartEmpty={isCartEmpty}
        onSendOrderButtonClick={handleSendOrderButtonClick}
      />
    </div>
  );
}
