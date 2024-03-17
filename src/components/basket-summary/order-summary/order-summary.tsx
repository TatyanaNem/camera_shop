type TOrderSummaryProps = {
  discountPrice: number | null;
  camerasInCartTotalPrice: number;
  isCartEmpty: boolean;
}

export function OrderSummary ({discountPrice, camerasInCartTotalPrice, isCartEmpty}: TOrderSummaryProps) {
  const bonusValue = discountPrice ? Math.ceil(camerasInCartTotalPrice * discountPrice / 100) : 0;
  const finalPrice = camerasInCartTotalPrice - bonusValue;

  return (
    <div className="basket__summary-order">
      <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{`${camerasInCartTotalPrice.toLocaleString()} ₽`}</span></p>
      <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className="basket__summary-value basket__summary-value--bonus">{`${bonusValue.toLocaleString()} ₽`}</span></p>
      <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{`${finalPrice.toLocaleString()} ₽`}</span></p>
      <button
        className="btn btn--purple"
        type="submit"
        disabled={isCartEmpty}
      >
        Оформить заказ
      </button>
    </div>
  );
}
