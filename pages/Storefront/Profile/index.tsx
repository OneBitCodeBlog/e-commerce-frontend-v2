import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BlueBackground from '../../../components/shared/BlueBackground';
import MainComponent from '../../../components/shared/MainComponent';

import StoreFrontProfileMenu from '../../../components/StoreFrontProfileMenu';
import StorefrontMenu from '../../../components/shared/StorefrontMenu';

import StoreFrontEmailData from '../../../components/shared/StoreFrontEmailData';
import StoreFrontPasswordData from '../../../components/shared/StoreFrontPasswordData';
import StoreFrontProfileData from '../../../components/shared/StoreFrontProfileData';

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

                    { false ? (
                        <Col md={{span: 4}}>
                            <StoreFrontEmailData />
                            <StoreFrontPasswordData />
                        </Col>
                    ) : (
                        <Col md={{span: 8}}>
                            <StoreFrontProfileData />
                        </Col>
                    )}
                </Row>
            </BlueBackground>

            <div className="float-right mt-2 mb-4">
                <StyledButton icon={faUser} action={"Salvar alterações"} type_button="blue" />
            </div>
        </MainComponent>
    )
}

export default Profile;