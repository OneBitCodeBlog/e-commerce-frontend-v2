import React from 'react';

import MainComponent from '../../../components/shared/MainComponent';
import BlueBackground from '../../../components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import product_styles from '../Product/styles.module.css';
import StyledButton from '../../../components/shared/StyledButton';

import Image from 'next/image';
import StorefrontMenu from '../../../components/shared/StorefrontMenu';

const Wishlist: React.FC = () => {
    return (
        <MainComponent>
            <StorefrontMenu tab="desired_games" />

            <div className="mt-4 mb-4">
                <BlueBackground>
                    <Row>
                        <Col md={{span: 2}} className="text-center pt-4">
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </Col>

                        <Col md={{span: 8}}>
                            <Row>
                                <Col xs={{span: 4}}>
                                    <Image src="/assets/game.png" alt="Jogo Counter Strike" width={150} height={100} />
                                </Col>

                                <Col xs={{span: 8}}>
                                    <b>Counter Strike</b> <br />
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Ação</Badge>
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Aventura</Badge>
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Índie</Badge>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={{span: 2}}>
                            <b className="float-right">R$ 89.90</b>
                            
                            <div className="float-right">
                                <StyledButton action={"Comprar"} icon={faCartPlus} type_button="blue" />
                            </div>
                        </Col>
                    </Row>
                </BlueBackground>
            </div>

            <div className="mt-4 mb-4">
                <BlueBackground>
                    <Row>
                        <Col md={{span: 2}} className="text-center pt-4">
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </Col>

                        <Col md={{span: 8}}>
                            <Row>
                                <Col xs={{span: 4}}>
                                    <Image src="/assets/game.png" alt="Jogo Counter Strike" width={150} height={100} />
                                </Col>

                                <Col xs={{span: 8}}>
                                    <b>Counter Strike</b> <br />
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Ação</Badge>
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Aventura</Badge>
                                    <Badge variant="primary ml-1" className={product_styles.primary_badge}>Índie</Badge>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={{span: 2}}>
                            <b className="float-right">R$ 89.90</b>
                            
                            <div className="float-right">
                                <StyledButton action={"Comprar"} icon={faCartPlus} type_button="blue" />
                            </div>
                        </Col>
                    </Row>
                </BlueBackground>
            </div>
        </MainComponent>
    )
}

export default Wishlist;