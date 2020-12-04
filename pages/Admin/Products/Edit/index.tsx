import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm'

const Edit: React.FC = () => {
  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Produto" path="Dashboard > Produtos > Detalhes do produto > Editar produto" />

      <ProductForm />
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);