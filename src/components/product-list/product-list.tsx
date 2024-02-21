import { TCamera } from '../../common/types/camera';
import ProductCard from '../product-card';
import './product-list.css';

type TProductListProps = {
  currentProducts: TCamera[];
}

export function ProductList ({currentProducts}: TProductListProps) {
  return (
    <div className="cards catalog__cards">
      {
        currentProducts.length
          ? currentProducts.map((item) => (
            <ProductCard key={item.id} product={item} className='product-card'/>))
          : <div className='catalog-empty'>по вашему запросу ничего не найдено</div>
      }
    </div>
  );
}
