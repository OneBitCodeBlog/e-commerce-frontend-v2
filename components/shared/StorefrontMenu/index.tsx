import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './styles.module.css';

interface StorefrontMenuProps {
    tab?: String;
}


const StorefrontMenu: React.FC<StorefrontMenuProps> = ({ tab }) => {
    return (
        <Row className="mt-4 text-center">
            <Col>
                <b className={ (tab == "personal_data" && `${styles.text_color}`) }>Meus Dados</b>
            </Col>

            <Col>
                <b className={ (tab == "orders" && `${styles.text_color}`) }>Meus Pedidos</b>
            </Col>

            <Col>
                <b className={ (tab == "my_games" && `${styles.text_color}`) }>Meus Games</b>
            </Col>

            <Col>
                <b className={ (tab == "desired_games" && `${styles.text_color}`) }>Games Desejados</b>
            </Col>
        </Row>
    )
}

export default StorefrontMenu;