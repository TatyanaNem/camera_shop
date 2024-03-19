import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { selectProductsInCart } from '../../store/cart-process/selectors';
import { BasketItem } from '../../components/basket-item/basket-item';
import './basket-page.css';
import { closeRemoveFromCartModal, closeSendOrderModalSuccess } from '../../store/cart-process/cart-process';
import { ModalRemoveFromCart } from '../../components/modals';
import BasketSummary from '../../components/basket-summary';
import { ModalSendOrderSuccess } from '../../components/modals/modal-send-order-success/modal-send-order-success';

export function BasketPage () {
  const productsInCart = useAppSelector(selectProductsInCart);
  const dispatch = useAppDispatch();

  function handleModalClose () {
    dispatch(closeRemoveFromCartModal());
  }

  function handleModalSuccessClose () {
    document.body.style.overflow = 'visible';
    dispatch(closeSendOrderModalSuccess());
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <section className="basket">
        <div className="container">
          <h1 className="title title--h2">Корзина</h1>
          {
            productsInCart.length
              ? (
                <ul className="basket__list">
                  {
                    productsInCart.map((item) => (
                      <BasketItem key={item.camera.id} product={item}/>
                    ))
                  }
                </ul>
              )
              : <div className='empty-basket'>В корзине еще нет товаров</div>
          }
          <BasketSummary />
        </div>
      </section>
      <ModalRemoveFromCart onModalClose={handleModalClose}/>
      <ModalSendOrderSuccess onModalSuccessClose={handleModalSuccessClose}/>
    </>
  );
}
