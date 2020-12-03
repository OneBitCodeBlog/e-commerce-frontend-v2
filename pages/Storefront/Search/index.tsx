import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';
import { InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Search.module.css';
import StyledButton from '../../../components/shared/StyledButton';
import ProductInfo from '../../../components/shared/ProductInfo';

const Search: React.FC = () => {
  return(
    <MainComponent>
      <div>
        <div className="text-center mt-4">
          <h3>Resultados da Pesquisa</h3>
        </div>

        <form className="mb-4">
          <Row className="text-center col-md-6 offset-md-3">
            <Col xs={11}>
              <InputGroup className="pl-4">
                  <FormControl placeholder="Pesquise!!" />
              </InputGroup>
            </Col>

            <Col xs={1}>
              <Button type="submit" className={styles.button}>
                <FontAwesomeIcon icon={faSearch} size="2x" />
              </Button>
            </Col>
          </Row>
        </form>

        <Row>
          <Col>
            <span className="float-left">3 resultados</span>
          </Col>

          <Col>
            <div className="float-right">
              <b className="mr-3">Ordenar por:</b>
              <StyledButton action="Menor Preco" type_button="blue" />
            </div>
          </Col>
        </Row>

        <Row>
          <StyledButton action="Categoria" type_button="blue" />
          <StyledButton action="Tipo" type_button="blue" />
          <StyledButton action="Faixa Etária" type_button="blue" />
          <StyledButton action="Preco" type_button="blue" />
        </Row>

        <div className="mt-4">
          <h5>Resultados para Resident Evil</h5>

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
      </div>
    </MainComponent>
  )
}

export default Search;