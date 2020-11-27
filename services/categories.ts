import api from './api';
import Category from '../dtos/Category';

interface CategoryIndexData {
  categories: Category[]
}


const CategoriesService = {
  index: (url: string) => {
    return api.get<CategoryIndexData>(url).then(response => response.data)
  },

  create: (name: string) => {
    return api.post<void>('/admin/v1/categories', { name })
  }
}

export default CategoriesService;