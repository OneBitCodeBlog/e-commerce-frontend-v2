import { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGhost } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import styles from '../../../../styles/AdminPanel.module.css';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import useSWR from 'swr';
import CategoriesService from '../../../../services/categories';

const List: React.FC = () => {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, error } = useSWR('/admin/v1/categories', CategoriesService.index)

  console.log('data', data);
  console.log('erros', error);
  return (
    <AdminComponent>
      <TitleAdminPanel title="Categorias" path="Dashboard > Categorias" icon={faGhost} />

      <AdminDeleteModal handleClose={handleClose} show={show} target="categoria" />

      <AdminListTable first_title="Nome da categoria">
        {/* {
          data?.categories.map(category => (
            <tr className={styles.table_line} key={category.id}>
              <td>{category.name}</td>
              <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
              <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
            </tr>
          ))
        } */}

        <tr className={styles.table_line}>
          <td>Suspense</td>
          <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
          <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
        </tr>

        <tr className={styles.table_line}>
          <td>Mundo Aberto</td>
          <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
          <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
        </tr>

        <tr className={styles.table_line}>
          <td>Ação</td>
          <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
          <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
        </tr>
      </AdminListTable>
    </AdminComponent>
  )
}

export default withAuthAdmin(List);