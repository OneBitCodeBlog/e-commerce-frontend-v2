import { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form, Col, Row } from 'react-bootstrap';
import { faTimes, faArrowUp, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';
import Image from 'next/image';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useRouter } from 'next/router';

const New: React.FC = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(0);

  const router = useRouter();

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    console.log(id);
    console.log(name);
    console.log(status);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Produto" path="Dashboard > Produtos > Adicionar produtos" />

      <div className={styles.admin_panel}>
        <Row style={{alignItems: 'center'}}>
          <Col lg={4}>
            <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />

            <div className={styles.details_button}>
              <StyledButton 
                icon={faArrowUp} 
                action={"Atualizar"} 
                type_button="blue" 
              />

              <StyledButton 
                icon={faTrash} 
                action={"Excluir"} 
                type_button="red"
              />
            </div>
          </Col>

          <Col lg={8}>
            <Form className={styles.new_form} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} className="p-4">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Digite o nome do produto" 
                    className={styles.secundary_input}
                    value={name}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setName(evt.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} className="p-4">
                  <Form.Label>Código</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Digite o ID" 
                    className={styles.secundary_input} 
                    value={id}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setId(Number(evt.target.value))
                    }
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} className="p-4">
                  <Form.Label>Categorias</Form.Label>
                  <Form.Control as="select" className={styles.secundary_input}>
                    <option>Selecionar</option>
                    <option>História</option>
                    <option>Aventura</option>
                    <option>Mundo aberto</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} className="p-4">
                  <Form.Label>Status</Form.Label>
                  <Form.Control 
                    as="select" 
                    className={styles.secundary_input}
                    defaultValue={status}
                    onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) =>
                        setStatus(Number(evt.target.value))
                    }
                    >
                    <option value="0">Disponível</option>
                    <option value="1">Indisponível</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <div className={styles.details_button}>
                <StyledButton 
                  icon={faGamepad} 
                  action={"Adicionar"} 
                  type_button="blue"
                  type="submit"
                />

                <StyledButton 
                  icon={faTimes} 
                  action={"Cancelar"} 
                  type_button="red" 
                  onClick={() => router.back()}
                />
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);