import { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGhost } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import styles from '../../../../styles/AdminPanel.module.css';
import NoData from '../../../../components/shared/NoData';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import useSWR from 'swr';
import CategoriesService from '../../../../services/categories';

const List: React.FC = () => {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, error } = useSWR('/admin/v1/categories', CategoriesService.index)

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Categorias" 
        path="Dashboard > Categorias" 
        icon={faGhost} 
        newPath="/Admin/Category/New"/>

      <AdminDeleteModal handleClose={handleClose} show={show} target="categoria" />

      {
        data && data.categories && data.categories.length > 0 ? (
          <AdminListTable first_title="Nome da categoria">
            {
              data.categories.map(category => (
                <tr className={styles.table_line} key={category.id}>
                  <td>{category.name}</td>
                  <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                  <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
              ))
            }
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
    </AdminComponent>
  )
}

export default withAuthAdmin(List);