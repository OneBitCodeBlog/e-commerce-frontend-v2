import React from 'react';
import { Col, Row } from 'react-bootstrap';

const StorefrontMenu = () => {
    return (
        <Row className="mt-4 text-center">
            <Col>
                <b>Meus Dados</b>
            </Col>

            <Col>
                <b>Meus Pedidos</b>
            </Col>

            <Col>
                <b>Meus Games</b>
            </Col>

            <Col>
                <b>Games Desejados</b>
            </Col>
        </Row>
    )
}

export default StorefrontMenu;