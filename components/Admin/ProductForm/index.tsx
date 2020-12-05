import { useState } from 'react';
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
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState('available');
  const [image, setImage] = useState<File>();
  
  const [mode, setMode] = useState('pve');
  const [releaseDate, setReleaseDate] = useState('');
  const [developer, setDeveloper] = useState('');

  const [systemRequirements, setSystemRequirements] = useState(0);


  // length=999 para pegar 999 categorias
  const { data, error } = useSwr('/admin/v1/categories?length=999', CategoriesService.index);
  const router = useRouter();

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('product[id]', id.toString());
    formData.append('product[name]', name);
    formData.append('product[status]', status);
    formData.append('product[description]', description);
    formData.append('product[image]', image);
    formData.append('product[category_ids]', JSON.stringify(categories));
    formData.append('product[productable]', 'game');
    formData.append('product[price]', price.toString());
    formData.append('product[mode]', mode);
    formData.append('product[release_date]', releaseDate);
    formData.append('product[developer]', developer);

    handleSubmit(formData);
  }

  const handleCategoriesSelect = 
    (evt: React.ChangeEvent<HTMLSelectElement>): void => {
      const options = evt.target.selectedOptions;
      if (options) {
        let selectedCategories: Number[] = [];
        for (let i = 0; i < options.length; i++) {
          selectedCategories.push(Number(options[i].value));
        }
        setCategories(selectedCategories);
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
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group className="p-2">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    readOnly
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
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={12} sm={12}>
                <Form.Group className="p-2">
                  <Form.Label>Categorias</Form.Label>
                  <Form.Control 
                    as="select" 
                    className={styles.secundary_input}
                    multiple
                    onChange={handleCategoriesSelect}
                    required
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
            </Form.Row>

            <Form.Row>
              <Col md={6} sm={12}>
                <Form.Group  className="p-2">
                  <Form.Label>Modo</Form.Label>
                  <Form.Control
                    as="select"
                    className={styles.secundary_input}
                    defaultValue={mode}
                    onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) =>
                        setMode(evt.target.value)
                    }
                  >
                    <option value="pve">PVE</option>
                    <option value="pvp">PVP</option>
                    <option value="both">Ambos</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group  className="p-2">
                  <Form.Label>Desenvolvedora</Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.secundary_input}
                    defaultValue={developer}
                    placeholder="Digite o nome da desenvolvedora"
                    onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) =>
                        setDeveloper(evt.target.value)
                    }
                    required
                  >
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={6} sm={12}>
                <Form.Group  className="p-2">
                  <Form.Label>Data de Lançamento</Form.Label>
                  <Form.Control
                    type="date"
                    className={styles.secundary_input}
                    defaultValue={releaseDate}
                    placeholder="Digite o nome da desenvolvedora"
                    onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) =>
                        setReleaseDate(evt.target.value)
                    }
                    required
                  >
                  </Form.Control>
                </Form.Group>
              </Col>


              <Col md={6} sm={12}>
                <Form.Group  className="p-2">
                  <Form.Label>Requerimentos do Sistema</Form.Label>
                  <Form.Control
                    as="select"
                    className={styles.secundary_input}
                    defaultValue={systemRequirements}
                    onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) =>
                        setSystemRequirements(Number(evt.target.value))
                    }
                    required
                  >
                    <option value="available">Disponível</option>
                    <option value="unvailable">Indisponível</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>              
              <Col md={6} sm={12}>
                <Form.Group className="p-2">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o ID"
                    className={styles.secundary_input}
                    value={price}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) =>
                        setPrice(Number(evt.target.value))
                    }
                    required
                  />
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
                        setStatus(evt.target.value)
                    }
                  >
                    <option value="available">Disponível</option>
                    <option value="unavailable">Indisponível</option>
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