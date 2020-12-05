import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Col } from 'react-bootstrap';
import { faArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../../shared/StyledButton';

import styles from '../../../../styles/ProductForm.module.css';

interface ProductImageProps {
  setImage: Dispatch<SetStateAction<File>>;
  productImage: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ setImage, productImage }) => {
  const [imageToShow, setImageToShow] = useState('/assets/product-image.png');
  const imageInputRef = useRef(null);

  // se for uma edição e imagem do produto
  // existir, a imagem será alterada para a imagem do produto
  useEffect (() => {
    if (productImage) {
      setImageToShow(productImage);
    }
  }, [productImage])

  // utilizando um ref para simular o click do botão
  // do input type="file" quando o botão atualizar é clicado
  const handleUpdateImage = (): void => {
    if (imageInputRef) {
      imageInputRef.current.click();
    }
  }

  // pegando a imagem que foi selecionada, setando ela no estado do componente
  // pai e criando uma url para que a mesma seja exibida na tela
  const handleSetImage = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files[0];

    setImage(file);
    setImageToShow(URL.createObjectURL(file))
  }

  return (
    <Col lg={4}>
      <img 
        src={imageToShow} 
        alt="Product image" 
        className={styles.image}
      />

      <label htmlFor="image">
        <input 
          type="file"
          id="image" 
          hidden
          ref={imageInputRef}
          onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
              handleSetImage(evt)
          }
        />
      </label>

      <div className={styles.details_button}>
        <StyledButton 
          icon={faArrowUp} 
          action={"Atualizar"} 
          type_button="blue" 
          onClick={handleUpdateImage}
        />

        <StyledButton 
          icon={faTrash} 
          action={"Excluir"} 
          type_button="red" 
        />
      </div>
    </Col>
  );
}

export default ProductImage;