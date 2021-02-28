import React from 'react';
import styles from './styles.module.css';
import { FormControl } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';

import StyledButton from '../../../components/shared/StyledButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const StoreFrontProfileData = () => {
    return (
        <div>
            <Row>
                <Col xs={{span: 7}}>
                    <div className="mt-4">
                        Informações Públicas <br />
                        <small className={styles.blue_text}>Essas Informações serão exibidas publicamente</small>
                        
                        <div className="p-4">
                            Nome de exibição <br />
                            <FormControl placeholder="Nome de exibição" className={styles.input_background} />
                        </div>
                    </div>
                </Col>

                <Col xs={{span: 5}}>
                    <Row>
                        <Col md={{span: 4}}>
                            <img src="/assets/profile.png" alt="Profile photo" className="rounded-circle w-100" />
                        </Col>

                        <Col md={{span: 8}} className="mt-3">
                            <StyledButton icon={faTrash} action={"Excluir foto"} type_button="red" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className="mt-4">
                Informações Pessoais <br />
                <small className={styles.blue_text}>Essas Informações NÃO serão exibidas publicamente</small>
                
                <div className="pl-4 pr-4 pt-3">
                    Login <br />
                    <FormControl placeholder="Usuário de Login" className={styles.input_background} />
                </div>

                <div className="pl-4 pr-4 pt-3">
                    Nome <br />
                    <FormControl placeholder="Nome" className={styles.input_background} />
                </div>

                <div className="pl-4 pr-4 pt-3">
                    Sobrenome <br />
                    <FormControl placeholder="Sobrenome" className={styles.input_background} />
                </div>
            </div>
        </div>
    )
}

export default StoreFrontProfileData;