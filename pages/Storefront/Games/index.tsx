import React from 'react';

import MainComponent from '../../../components/shared/MainComponent';
import StorefrontMenu from '../../../components/shared/StorefrontMenu';

import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import BlueBackground from '../../../components/shared/BlueBackground';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';
import StyledButton from '../../../components/shared/StyledButton';

const Games: React.FC = () => {
    return (
        <MainComponent>
            <StorefrontMenu tab="my_games" />

            <Row className="mt-4">
                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>
            </Row>

            <br />

            <BlueBackground>
                <b>Cuphead - "Don't deal with the Devil"</b>
                <FontAwesomeIcon icon={faTimes} className="float-right" />

                <br />

                <Row className="mt-4">
                    <Col>
                        Chaves de Ativação <br />
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className={styles.input_background}>
                                    <FontAwesomeIcon icon={faKey} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl id="inlineFormInputGroup" placeholder="Digite sua Chave" className={styles.input_background} />
                        </InputGroup>
                    </Col>

                    <Col>
                        Número do pedido <br />
                        <span>#202101</span>
                    </Col>

                    <Col>
                        Data do pedido <br />
                        <span>07 de janeiro de 2021</span>
                    </Col>
                </Row>
            </BlueBackground>

            <br />

            <Row className="mt-4">
                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
                            alt="Product Game" className="w-100"/>
                    </div>

                    <div>
                        <div>
                            God of War <br />
                            BIOHAZARD RE:2
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="pagination justify-content-center mt-4 mb-4">
                <div className="pagination">
                    <StyledButton action="<" type_button="blue" />
                    <StyledButton action="1" type_button="blue" />
                    <StyledButton action="2" type_button="blue" />
                    <StyledButton action="3" type_button="blue" />
                    ...
                    <StyledButton action="31" type_button="blue" />
                    <StyledButton action=">" type_button="blue" />
                </div>
            </div>
        </MainComponent>
    )
}

export default Games;