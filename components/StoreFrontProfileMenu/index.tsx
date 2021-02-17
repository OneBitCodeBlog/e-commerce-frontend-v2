import React from 'react';
import styles from './styles.module.css';

const StoreFrontProfileMenu: React.FC = () => {
    return (
        <div>
            <div className="mt-1">
                <button className={styles.button}>
                    <b>Minha conta</b>
                </button>
            </div>

            <div className="mt-1">
                <button className={styles.button}>
                    <b>Alterar senha</b>
                </button>
            </div>

            <div className="mt-1">
                <button className={styles.button}>
                    <b>Meu e-mail</b>
                </button>
            </div>
        </div>
    )
}

export default StoreFrontProfileMenu;