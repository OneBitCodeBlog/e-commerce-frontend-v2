import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainComponent from '../../../components/shared/MainComponent';
import Image from 'next/image';

const Product: React.FC = () => {
    return (
        <MainComponent>
            <Row className="mt-4">
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
                </Col>
            </Row>
        </MainComponent>
    )
}

export default Product;