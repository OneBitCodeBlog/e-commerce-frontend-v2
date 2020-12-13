import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../../styles/ProductInfo.module.css';

interface HighlitedButtonProps {
  type?: String;
}

const ProductInfo: React.FC<HighlitedButtonProps> = ({ type }) => {
  return (
    <div>
      <div>
        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
            alt="Product Game" 
            className={styles.image} />
      </div>

      <div className={styles.background}>
        <div>
          God of War <br />
          BIOHAZARD RE:2
        </div>

        <div className={styles.button}>
          { type ? 
            <Button className="btn btn-info">R$ 19,90</Button> : 
            <Button className={styles.highlited_button}>R$ 19,90</Button> 
          }
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;