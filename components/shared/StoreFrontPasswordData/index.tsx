import React from 'react';
import styles from './styles.module.css';
import { FormControl } from 'react-bootstrap';

const StoreFrontPasswordData = () => {
    return (
        <div>
            <b>Alterar Senha</b>

            <div className="mt-4">
                Nova Senha <br />
                <FormControl placeholder="Nova Senha" className={styles.input_background} />
            </div>

            <div className="mt-4">
                Repetir Senha <br />
                <FormControl placeholder="Repetir Senha" type="password" className={styles.input_background} />
            </div>

            <div className="mt-4">
                Senha Atual <br />
                <FormControl placeholder="Senha Atual" type="password" className={styles.input_background} />
            </div>
        </div>
    )
}

export default StoreFrontPasswordData;