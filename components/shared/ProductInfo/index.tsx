import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../../styles/ProductInfo.module.css';


const ProductInfo: React.FC = () => {
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
          <Button className="btn btn-info">R$ 19,90</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;