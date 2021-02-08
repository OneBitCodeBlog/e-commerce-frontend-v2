import React from 'react';
import Image from 'next/image';

import MainComponent from '../../../components/shared/MainComponent';
import StyledButton from '../../../components/shared/StyledButton';

import styles from './styles.module.css';
import product_style from '../Product/styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGamepad, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import BlueBackground from '../../../components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';

const PaymentConfirm: React.FC = () => {
    return (
        <MainComponent>
            <div className="mt-4 mb-4">
                <b>Pagamento Recebido</b> - <b className={styles.secondary_color}>#202101</b>
                
                <div className="float-right">
                    <StyledButton action={"Voltar para a Loja"} icon={faArrowLeft} type_button="blue" />
                </div>
            </div>

            <br />

            <div className="mt-4">
                <div className={styles.blue_text}>
                    <FontAwesomeIcon icon={faCheckSquare} /> <b>Sucesso: </b> 
                    <span>Obrigado por seu pedido! Você receberá um e-mail em breve.</span>
                </div>
            </div>

            <BlueBackground>
                <b>PRODUTO</b>
                <b className="float-right">VALOR</b>

                <hr className={product_style.line} />

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
                        <b>R$ 89.90</b>
                    </Col>
                </Row>

                <hr className={product_style.line} />

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
                        <b>R$ 89.90</b>
                    </Col>
                </Row>
            </BlueBackground>

            <Row className="mt-4 mb-4">
                <Col md={{span: 3, offset: 6}} xs>
                    <StyledButton action={"Voltar para a Loja"} icon={faArrowLeft} type_button="blue" />
                </Col>

                <Col>
                    <StyledButton action={"Acessar meus Games"} icon={faGamepad} type_button="blue" className={`${styles.button_blue_light} float-right`} />
                </Col>
            </Row>
        </MainComponent>
    )
}

export default PaymentConfirm;