import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm';

const New: React.FC = () => {

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Produto" path="Dashboard > Produtos > Adicionar produtos" />

      <ProductForm />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);