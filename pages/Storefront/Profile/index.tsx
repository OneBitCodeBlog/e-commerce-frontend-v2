import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';
import BlueBackground from '../../../components/shared/BlueBackground';
import MainComponent from '../../../components/shared/MainComponent';
import StorefrontMenu from '../../../components/shared/StorefrontMenu';
import StoreFrontProfileMenu from '../../../components/StoreFrontProfileMenu';

import StyledButton from '../../../components/shared/StyledButton';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

const Profile: React.FC = () => {
    return (
        <MainComponent>
            <StorefrontMenu tab="personal_data" />

            <br />
            
            <BlueBackground>
                <b>Leonardo Scorza</b> <br />
                <span className={styles.blue_text}>lscorza | contato@onebitcode.com</span>

                <Row className="mt-4">
                    <Col md={{span: 4}}>
                        <StoreFrontProfileMenu />
                    </Col>

                    <Col md={{span: 4}}>
                        <b>Alterar e-mail</b>

                        <div className="mt-4">
                            E-mail <br />
                            <FormControl placeholder="Digite seu E-mail" className={styles.input_background} />
                        </div>

                        <div className="mt-4">
                            Senha Atual <br />
                            <FormControl placeholder="Digite sua senha" type="password" className={styles.input_background} />
                        </div>
                    </Col>
                </Row>

            </BlueBackground>

            <div className="float-right mt-2">
                <StyledButton icon={faUser} action={"Salvar alterações"} type_button="blue" />
            </div>
        </MainComponent>
    )
}

export default Profile;