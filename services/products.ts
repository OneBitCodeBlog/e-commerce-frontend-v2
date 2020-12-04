import api from './api';
import Product from '../dtos/Product';
import Meta from '../dtos/Meta';

interface IProductsIndexData {
  products: Product[];
  meta: Meta
}

const ProductsService = {
  index: (url: string) => {
    return api.get<IProductsIndexData>(url).then(response => response.data);
  },

  delete: (id: number) => {
    return api.delete<void>(`/admin/v1/products/${id}`);
  }
}

export default ProductsService;