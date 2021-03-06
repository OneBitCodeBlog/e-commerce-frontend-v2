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
import Category from '../../../../dtos/Category';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCategoryToEdit } from '../../../../store/modules/admin/category/reducer';
import { useRouter } from 'next/router';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const [categoryToRemove, setCategoryToRemove] = useState(0);

  const { data, error, mutate } = useSWR('/admin/v1/categories', CategoriesService.index)
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClose = async (success: boolean): Promise<void> => { 
    setShow(false);

    if (!success) return;

    try {
      await CategoriesService.delete(categoryToRemove);
      toast.info('Categoria removida com sucesso!');
      mutate();
    } catch (err){
      toast.error('Ocorreu um erro ao remove uma categoria, tente novamente.');
      console.log(err);
    }
  }

  const handleShow = (id: number): void => {
    setShow(true);
    setCategoryToRemove(id);
  }

  const handleEdit = (category: Category): void => {
    dispatch(setCategoryToEdit(category));
    router.push('/Admin/Category/Edit');
  }

  if(error) {
    toast.error('Erro ao listar categorias');
    console.log(error);
  }

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
                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(category)}
                      />
                    </div>
                  </td>

                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(category.id)} 
                      />
                    </div>
                  </td>
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