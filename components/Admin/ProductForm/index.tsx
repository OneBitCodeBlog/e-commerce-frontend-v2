import { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminPanel.module.css';
import StyledButton from '../../shared/StyledButton';
import ProductImage from './ProductImage';

import { useRouter } from 'next/router';
import useSwr from 'swr';
import CategoriesService from '../../../services/categories';

import { toast } from 'react-toastify';
interface ProductFormProps {
  handleSubmit: (product: FormData) => Promise<void>;
  action?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ handleSubmit, action = 'Adicionar' }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState<File>();

  // length=999 para pegar 999 categorias
  const { data, error } = useSwr('/admin/v1/categories?length=999', CategoriesService.index);
  const router = useRouter();

  useEffect(() => {
    console.log(image)
  }, [image])

  console.log(data)

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('status', status.toString());
    formData.append('description', description);
    formData.append('image', image);
    formData.append('category_ids', JSON.stringify(categories));

    handleSubmit(formData);
  }

  const handleCategoriesSelect = 
    (evt: React.ChangeEvent<HTMLSelectElement>): void => {
      const options = evt.target.selectedOptions;
      if (options) {
        let selectedCategories: Number[] = [];
        for (let i = 0; i < options.length; i++) {
          selectedCategories.push(Number(options[i].value))
        }

        console.log(selectedCategories)
      }
  }

  if (error) {
    toast.error('Ocorreu um erro ao obter as categorias, tente novamente.');
    console.log(error);
  }

  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit}>
        <Row>

          <ProductImage
            setImage={setImage}
          />

          <Col lg={8}>
            <Form.Row>
              <Col md={6} sm={12}>
                <Form.Group className="p-2">
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
              </Col>

              <Col md={6} sm={12}>
                <Form.Group className="p-2">
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
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12}>
                <Form.Group className="p-2">
                <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Digite a descrição do produto"
                    className={styles.secundary_input}
                    value={description}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) =>
                        setDescription(evt.target.value)
                    }/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>              
              <Col md={6} sm={12}>
                <Form.Group className="p-2">
                  <Form.Label>Categorias</Form.Label>
                  <Form.Control 
                    as="select" 
                    className={styles.secundary_input}
                    multiple
                    onChange={handleCategoriesSelect}
                  >
                    {
                      data && data.categories &&
                      data.categories.map(category => (
                        <option 
                          value={category.id} 
                          key={category.id}
                        >
                          {category.name}
                        </option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group  className="p-2">
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
              </Col>
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