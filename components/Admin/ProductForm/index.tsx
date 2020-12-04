import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { faTimes, faArrowUp, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminPanel.module.css';
import StyledButton from '../../shared/StyledButton';
import Image from 'next/image';

import { useRouter } from 'next/router';

interface ProductFormProps {
  handleSubmit: (product: FormData) => Promise<void>;
  action?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ handleSubmit, action = 'Adicionar' }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(0);

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('status', status.toString());

    handleSubmit(formData);
  }

  const router = useRouter();


  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit}>
        <Row>
          <Col lg={4}>
            <Image src="/assets/product-image.png" alt="Product image" width={'auto'} height={'auto'} />

            <div className={styles.details_button}>
              <StyledButton icon={faArrowUp} action={"Atualizar"} type_button="blue" />
              <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
            </div>
          </Col>

          <Col lg={8}>
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

          </Col>
        </Row>

        <div className={styles.details_button}>
          <StyledButton
            icon={faGamepad}
            action={action}
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
    </div>
  )
}

export default ProductForm;