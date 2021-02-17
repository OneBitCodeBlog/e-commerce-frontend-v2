import React from 'react';
import styles from './styles.module.css';
import { FormControl } from 'react-bootstrap';

const StoreFrontEmailData = () => {
    return (
        <div>
            <b>Alterar e-mail</b>

            <div className="mt-4">
                E-mail <br />
                <FormControl placeholder="Digite seu E-mail" className={styles.input_background} />
            </div>

            <div className="mt-4">
                Senha Atual <br />
                <FormControl placeholder="Digite sua senha" type="password" className={styles.input_background} />
            </div>
        </div>
    )
}

export default StoreFrontEmailData;