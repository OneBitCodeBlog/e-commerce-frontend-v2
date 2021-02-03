import Image from 'next/image';
import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import BlueBackground from '../../../components/shared/BlueBackground';
import MainComponent from '../../../components/shared/MainComponent';
import StyledButton from '../../../components/shared/StyledButton';

import styles from './styles.module.css';
import product_style from '../Product/styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Cart: React.FC = () => {
  return (
    <MainComponent>
      <Row className="mb-4">
        <Col md={{span: 8, offset: 0}} className="mt-4 mb-4">
          <div className="mb-4">
            <b>Meu carrinho</b>
          </div>

          <BlueBackground>
            <b>Produto</b>

            <div className={styles.product}>
              <Row>
                <Col xs={{span: 3}}>
                  <Image src="/assets/game.png" alt="Jogo Counter Strike" width={150} height={100} />
                </Col>

                <Col xs={{span: 7}}>
                  <b>Counter Strike</b>

                  <div>
                    <Badge variant="primary ml-1" className={product_style.primary_badge}>Ação</Badge>
                    <Badge variant="primary ml-1" className={product_style.primary_badge}>Aventura</Badge>
                    <Badge variant="primary ml-1" className={product_style.primary_badge}>Índie</Badge>
                  </div>
                </Col>

                <Col xs={{span: 2}} className="text-center">
                  <b>R$ 89.90</b> <br />
                  <a href="#">
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </Col>
              </Row>

              <hr className={product_style.line} />

              <div className="mt-3 mb-3">
                <b className="mr-3">Possui um cupom de desconto?</b>
                <input type="text" className={styles.gray_input} placeholder="EXEMPLO-DE-CUPOM" />
                <StyledButton action={"Aplicar"} type_button="red" className={product_style.gray_button} />
              </div>

              <div className={styles.price_and_discount}>
                <b>R$ 209.80</b> <br /><br />
                <span className={styles.blue_text}>- 10% OFF + <b>R$ 20.98</b></span>
              </div>

              <hr className={product_style.line} />

              <div>
                <b>SUBTOTAL</b>

                <b className="float-right">R$ 188.82</b>
              </div>
            </div>
          </BlueBackground>
        </Col>

        <Col md={{span: 4, offset: 0}} className={styles.payment_column}>
          <div className={styles.back_button}>
            <div className="float-right">
              <StyledButton action={"Continuar Comprando"} icon={faArrowLeft} type_button="blue" />
            </div>
          </div>

          <BlueBackground>
            <b>FORMAS DE PAGAMENTO</b>

            <hr className={product_style.line} />

            <div>
              <input type="checkbox" className="mr-2" />
              <b>Boleto</b> <br />
              <Image src="/assets/card-flags/boleto.png" alt="Boleto" className="rounded" width={30} height={20} />
            </div>

            <hr className={product_style.line} />
            
            <div>
              <input type="checkbox" className="mr-2" />
              <b>Cartão de Crédito</b> <br />
              <small>Até 12x sem juros no cartão</small> <br />
              <Image src="/assets/card-flags/mastercard.png" alt="Mastercard" className="rounded" width={30} height={20} />{' '}
              <Image src="/assets/card-flags/visa.png" alt="Visa" className="rounded" width={30} height={20} />
            </div>

            <div className="mt-4">
              <b>Número do cartão</b>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" className={styles.gray_input} />
            </div>

            <div className="mt-3">
              <Row>
                <Col>
                  <b>Data de validade</b>

                  <Row>
                    <Col>
                      <select className={styles.gray_select}>
                        <option>Mês</option>
                        <option>Janeiro</option>
                        <option>Fevereiro</option>
                        <option>Março</option>
                        <option>Abril</option>
                        <option>Maio</option>
                        <option>Junho</option>
                        <option>Julho</option>
                        <option>Agosto</option>
                        <option>Setembro</option>
                        <option>Outubro</option>
                        <option>Novembro</option>
                        <option>Dezembro</option>
                      </select>
                    </Col>

                    <Col>
                      <select className={styles.gray_select}>
                        <option>Ano</option>
                        <option>2032</option>
                        <option>2031</option>
                        <option>2030</option>
                        <option>2029</option>
                        <option>2028</option>
                        <option>2027</option>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                      </select>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <b>Código</b> <br />
                  <input type="text" placeholder="xxx" className={`${styles.gray_input} w-100`} />
                </Col>
              </Row>

              <div className="mt-4">
                <b>Nome do cartão</b>
                <input type="text" placeholder="NOME DO CARTÃO" className={`${styles.gray_input} w-100`} />
              </div>

              <div className="mt-4">
                <b>Nome do cartão</b>
                <select className={styles.gray_select}>
                  <option>Selecione</option>
                  <option>1x de 188.82 (188.82)</option>
                  <option>2x de 104.41 (188.82)</option>
                  <option>3x de 62.94 (188.82)</option>
                </select>
              </div>
            </div>
          </BlueBackground>

          <br />

          <BlueBackground>
            <div>
              <b>VALOR TOTAL</b>
              <b className="float-right">R$ 188.82</b>
            </div>

            <hr className={product_style.line} />
          
            <StyledButton action={"Finalizar Pedido"} icon={faCartPlus} type_button="red" className={styles.finish_order_button} />
          </BlueBackground>
        </Col>
      </Row>
    </MainComponent>
  )
}

export default Cart;