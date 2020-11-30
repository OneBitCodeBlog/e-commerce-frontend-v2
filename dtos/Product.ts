import Category from './Category';

export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  status: string;
  image_url: string;
  productable: string;
  categories: Category[]
};