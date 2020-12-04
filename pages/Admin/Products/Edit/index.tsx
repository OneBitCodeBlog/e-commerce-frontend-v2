import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm'

const Edit: React.FC = () => {

  const handleSubmit = async (product: FormData): Promise<void> => {

  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Produto" path="Dashboard > Produtos > Detalhes do produto > Editar produto" />

      <ProductForm action="Atualizar" handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);