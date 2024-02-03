import { TCamera } from '../../common/types/camera';
import ProductCard from '../product-card';

type TProductListProps = {
  currentProducts: TCamera[];
}

export function ProductList ({currentProducts}: TProductListProps) {
  return (
    <div className="cards catalog__cards">
      {
        currentProducts.length && currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} className='product-card'/>
        ))
      }
    </div>
  );
}
