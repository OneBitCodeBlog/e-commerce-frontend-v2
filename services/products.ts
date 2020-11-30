import api from './api';
import Product from '../dtos/Product';

interface IProductsIndexData {
  products: Product[]
}

const ProductsService = {
  index: (url: string) => {
    return api.get<IProductsIndexData>(url).then(response => response.data);
  }
}

export default ProductsService;