import { useState, useEffect } from 'react';
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

import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";

import UrlService from '../../../../util/UrlService';

const defaultUrl = '/admin/v1/products';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [productToRemove, setProductToRemove] = useState(0);


  const search = useSelector(state => state.search);
  const currentPage = useSelector(state => state.pagination.currentPage);
  const dispatch = useDispatch();

  const { data, error, mutate } = useSWR(url, ProductsService.index);

  if (error) {
    toast.error('Erro ao listar produtos');
    console.log(error);
  }

  useEffect(() => {
    setUrl(
      defaultUrl +
      UrlService.execute({ currentPage, search })
    )
  }, [search, currentPage]);

  const handleShow = (id: number) => {
    setShow(true);
    setProductToRemove(id);
  }

  const handleClose = async (success: boolean): Promise<void> => {
    setShow(false);

    if (!success) return;

    try {
      await ProductsService.delete(productToRemove);
      mutate();
    } catch (err) {
      toast.error('Ocorreu um erro ao remover o produto, tente novamente.')
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Produtos" 
        path="Dashboard > Produtos" 
        icon={faGamepad} 
        newPath="/Admin/Products/New"
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="produto"/>

      {
        data && data.products && data.products.length > 0 ? (
          <AdminListTable 
            first_title="Nome do produto" 
            second_title="Categorias" 
            third_title="Código" 
            fourth_title="Status"  
            meta={data.meta}
          >
            {
              data.products.map(product => (
                <tr className={styles.table_line} key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    { 
                      // concatenando as categorias
                      // adicionando uma virgula e um espaço para as que
                      // não sejam a última
                      product.categories.map(
                        (category, index) => 
                          `${ 
                            category + 
                            (index === product.categories.length - 1 ? '' : ', ')
                          }`
                      )
                    }
                  </td>
                  <td>
                    {`#${product.id}`}
                  </td>
                  <td>
                    {product.status == 'available' ? 'Disponível' : 'Indisponível'}
                  </td>
                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                  </td>
                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(product.id)} />
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