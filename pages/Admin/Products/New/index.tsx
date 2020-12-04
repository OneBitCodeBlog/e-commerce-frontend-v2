import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm';

const New: React.FC = () => {

  const handleSubmit = async (product: FormData): Promise<void>  => {
    
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Produto" path="Dashboard > Produtos > Adicionar produtos" />

      <ProductForm handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);