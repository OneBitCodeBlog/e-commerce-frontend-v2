import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import styles from '../../../../styles/AdminPanel.module.css';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import useSWR from 'swr';
import ProductsService from '../../../../services/products';
import NoData from '../../../../components/shared/NoData';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, error, mutate } = useSWR('/admin/v1/products', ProductsService.index);

  console.log(data);

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Produtos" 
        path="Dashboard > Produtos" 
        icon={faGamepad} 
        newPath="/Admin/Products/New"
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="produto" />

      {
        data && data.products && data.products.length > 0 ? (
          <AdminListTable first_title="Nome do produto" second_title="Categorias" third_title="Código" fourth_title="Status">
            {/* <tr className={styles.table_line}>
              <td>Ri sem dente evil</td>
              <td>Terror, Suspense, História</td>
              <td>#000001</td>
              <td>Disponível</td>
              <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
              <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
            </tr> */}
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
    </AdminComponent>
  )
}

export default withAuthAdmin(List);