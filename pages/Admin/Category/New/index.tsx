import { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';
import Link from 'next/link';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import CategoriesService from '../../../../services/categories';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const New: React.FC = () => {
    const [categoryName, setCategoryName] = useState('');
    const router = useRouter();

    const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
        evt.preventDefault();

        try {
            await CategoriesService.create(categoryName);
            toast.info('Categoria cadastrada com sucesso!');

            router.back();
        } catch(err) {
            toast.error('Ocorreu algum erro, tente novamente!');
            console.log(err);
        }
    }

    return (
        <AdminComponent>
            <TitleAdminPanel title="Adicionar Categoria" path="Dashboard > Categorias > Adicionar Categoria" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form} onSubmit={handleSubmit}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Digite o nome da categoria" 
                        className={styles.secundary_input} 
                        value={categoryName}
                        onChange={
                            (evt: React.ChangeEvent<HTMLInputElement>) => 
                                setCategoryName(evt.target.value)
                        }
                        required
                    />

                    <div className={styles.details_button}>
                        <StyledButton type="submit" icon={faUserPlus} action={"Salvar"} type_button="blue" />

                        <Link href="/Admin/Category/List">
                            <a>
                                <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
                            </a>
                        </Link>
                    </div>
                </Form>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(New);