import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import MainComponent from '../../../components/shared/MainComponent';

import styles from './styles.module.css';

import BlueBackground from '../../../components/shared/BlueBackground';
import StyledButton from '../../../components/shared/StyledButton';

const Product: React.FC = () => {
  return (
    <MainComponent>
      <Row className="mt-4 mb-4">
        <Col md={6}>
            {/* html img usado por ter que regular responsividade da imagem, como 100% */}
            {/* ao col-md-6 */}
            <img
                className="w-100"
                src="/assets/game.png"
                alt="First slide"
            />

            <div className="mt-3">
                <b>Sobre o Jogo</b>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque eget vulputate velit. Aliquam in purus at tellus 
                    blandit placerat. Quisque ultricies scelerisque velit sit amet 
                    pharetra. Suspendisse lobortis lacinia dui. Vestibulum at augue 
                    et dui volutpat maximus. Ut dictum tellus sed lectus efficitur facilisis. 
                </p>

                <p>
                    Curabitur ullamcorper, sem a ullamcorper venenatis, sem risus pellentesque 
                    arcu, sed accumsan nisi augue blandit odio. Duis ac mauris eget dolor 
                    ultricies malesuada vitae vitae neque. Donec ultrices ultricies dolor, 
                    placerat ultrices nibh laoreet a. Pellentesque egestas vehicula massa. 
                    Donec placerat nulla id vulputate suscipit.
                </p>
            </div>

            <div className="mt-3">
                <b>DESTAQUES:</b>

                <ul>
                    <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></li>
                    <p>
                        Pellentesque eget vulputate velit. Aliquam in purus at tellus 
                        blandit placerat. Quisque ultricies scelerisque velit sit amet 
                        pharetra. Suspendisse lobortis lacinia dui. Vestibulum at augue 
                        et dui volutpat maximus. Ut dictum tellus sed lectus efficitur facilisis.
                    </p>

                    <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></li>
                    <p>
                        Pellentesque eget vulputate velit. Aliquam in purus at tellus 
                        blandit placerat. Quisque ultricies scelerisque velit sit amet 
                        pharetra. Suspendisse lobortis lacinia dui. Vestibulum at augue 
                        et dui volutpat maximus. Ut dictum tellus sed lectus efficitur facilisis.
                    </p>
                </ul>
            </div>
        </Col>

        <Col md={6}>
          <BlueBackground>
            <Row className="mb-4">
              <Col>
                <b>Counter Strike</b>

                <div>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Índie</Badge>
                </div>
              </Col>

              <Col>
                <b className="float-right">R$ 89.90</b>
              </Col>
            </Row>

            <Row className={styles.mb_50}>
              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>LANÇAMENTO</Badge> <br />
                23/10/2020
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>VENDIDOS</Badge> <br />
                347
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>FAVORITADO</Badge> <br />
                517 vezes
              </Col>
            </Row>

            <hr className={styles.line} />

            <Row className="mt-4 text-center">
              <Col>
                <StyledButton icon={faHeart} action={"Favoritar"} type_button="red" className={styles.gray_button} />
              </Col>
              
              <Col>
                <StyledButton icon={faCartPlus} action={"Comprar"} type_button="blue" />
              </Col>
            </Row>
          </BlueBackground>

          <div className="mt-4">
            <BlueBackground>
              <b>Requisitos do sistema</b>

              <div className="mt-3">
                <Badge variant="primary ml-1" className={styles.secondary_badge}>MÍNIMOS</Badge>

                <ul className={styles.list}>
                  <li>
                    <b>SO:</b> Windows 7
                  </li>

                  <li>
                    <b>Armazenamento:</b> 5 GB
                  </li>

                  <li>
                    <b>Processador:</b> Intel Core i5-3330 3.9 GHz / AMD FX 8300 3.3GHz
                  </li>

                  <li>
                    <b>Memória:</b> 4 GB
                  </li>

                  <li>
                    <b>Placa de Vídeo:</b> NVIDIA GeForce GTX 760 / Radeon RG 270
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <Badge variant="primary ml-1" className={styles.secondary_badge}>RECOMENDADOS</Badge>

                <ul className={styles.list}>
                  <li>
                    <b>SO:</b> Windows 10
                  </li>

                  <li>
                    <b>Armazenamento:</b> 5 GB
                  </li>

                  <li>
                    <b>Processador:</b> Intel Core i5-4690 3.5 GHz / AMD Ryzen 3 1300X 3.5 GHz
                  </li>

                  <li>
                    <b>Memória:</b> 6 GB
                  </li>

                  <li>
                    <b>Placa de Vídeo:</b> NVIDIA GeForce GTX 1050Ti / Radeon RG 560
                  </li>
                </ul>
              </div>
            </BlueBackground>
          </div>
        </Col>
      </Row>
    </MainComponent>
  )
}

export default Product;