import { TOrder } from '../../common/types/order';
import { getCategory } from '../../utils/getCategory';

type TBasketItemShortProps = {
  product: TOrder;
}

export function BasketItemShort ({product}: TBasketItemShortProps) {
  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, type, category, level, vendorCode} = product.camera;

  return (
    <div className="basket-item basket-item--short" data-testid='basket-item-short'>
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="140" height="120" alt={name}/>
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${type} ${getCategory(category).toLowerCase()}`}</li>
          <li className="basket-item__list-item">{`${level} уровень`}</li>
        </ul>
      </div>
    </div>
  );
}
