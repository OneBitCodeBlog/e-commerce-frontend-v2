import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form } from 'react-bootstrap';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { clearCategoryToEdit } from '../../../../store/modules/admin/category/reducer';
import CategoriesService from '../../../../services/categories';
import { toast } from 'react-toastify';

const Edit: React.FC = () => {
    const [name, setName] = useState('');

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if(category) {
            setName(category.name);
        }
    }, [category])

    const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
        evt.preventDefault();

        try {
            await CategoriesService.update({ id: category.id, name });

            toast.info('Categoria atualizada com sucesso!');

            dispatch(clearCategoryToEdit());
            router.back();
        }catch (err) {
            toast.error('Ocorreu um erro ao atualizar a categoria, tente novamente.');
            console.log(err);
        }
    }

    return (
        <AdminComponent>
            <TitleAdminPanel title="Editar Categoria" path="Dashboard > Categorias > Detalhes da categoria > Editar categoria" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form} onSubmit={handleSubmit}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Digite o nome da categoria" 
                        className={styles.secundary_input} 
                        value={name}
                        onChange={
                            (evt: React.ChangeEvent<HTMLInputElement>) => 
                                setName(evt.target.value)
                        }
                        required
                        />

                    <div className={styles.details_button}>
                        <StyledButton 
                            icon={faUser} 
                            action={"Atualizar"} 
                            type_button="blue" 
                            type="submit"
                        />
                        
                        <Link href="/Admin/Category/List">
                            <a>
                                <StyledButton 
                                    icon={faTimes} 
                                    action={"Cancelar"} 
                                    type_button="red" 
                                />
                            </a>
                        </Link>
                    </div>
                </Form>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(Edit);