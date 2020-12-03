import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledButton from '../shared/StyledButton';
import Link from 'next/link';
import styles from '../../styles/Storefront.module.css';
import ProductInfo from '../shared/ProductInfo';

interface HighlitedProductsProps {
  title: String;
}

const HighlitedProducts: React.FC<HighlitedProductsProps> = ({ title }) => {
  return (
    <div>
      <Row className="mt-4">
        <Col xs={3}>
          <h5>{ title }</h5>
        </Col>

        <Col xs={7}>
          <hr className={styles.line} />
        </Col>

        <Col xs={2}>
          <Link href="#">
            <a className="float-right">
              <StyledButton action="Ver Mais" type_button="blue" />
            </a>
          </Link>
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col md={3}>
          <ProductInfo />
        </Col>

        <Col md={3}>
          <ProductInfo />
        </Col>

        <Col md={3}>
          <ProductInfo />
        </Col>

        <Col md={3}>
          <ProductInfo />
        </Col>
      </Row>
    </div>
  )
}

export default HighlitedProducts;