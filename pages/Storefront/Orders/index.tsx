import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';

import styles from './styles.module.css';
import payment_styles from '../PaymentConfirm/styles.module.css';

import { Table } from 'react-bootstrap';

import StorefrontMenu from '../../../components/shared/StorefrontMenu';
import BlueBackground from '../../../components/shared/BlueBackground';
import StyledButton from '../../../components/shared/StyledButton';

const Orders: React.FC = () => {
    return (
        <MainComponent>
            <StorefrontMenu tab="orders" />
            
            <div className="mt-4 mb-4">
                <BlueBackground>
                    <Table borderless={true} hover={true} responsive={true} className={styles.table}>
                        <thead>
                            <tr>
                                <th>Data/Número</th>
                                <th>Produto</th>
                                <th>Pagamento</th>
                                <th>Valor</th>
                                <th>Situação</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className={styles.table_line}>
                                <td>
                                    <span className={payment_styles.secondary_color}>07/01/2021</span> <br />
                                    #202101
                                </td>
                                <td>Mortal Kombat X</td>
                                <td>Cartão de crédito à vista</td>
                                <td>R$89.90</td>
                                <td>Liberado</td>
                            </tr>

                            <br />

                            <tr className={styles.table_line}>
                                <td>
                                    <span className={payment_styles.secondary_color}>07/01/2021</span> <br />
                                    #202101
                                </td>
                                <td>Mortal Kombat X</td>
                                <td>Cartão de crédito à vista</td>
                                <td>R$89.90</td>
                                <td>Liberado</td>
                            </tr>

                            <br />

                            <tr className={styles.table_line}>
                                <td>
                                    <span className={payment_styles.secondary_color}>07/01/2021</span> <br />
                                    #202101
                                </td>
                                <td>Mortal Kombat X</td>
                                <td>Cartão de crédito à vista</td>
                                <td>R$89.90</td>
                                <td>Liberado</td>
                            </tr>

                            <br />

                            <tr className={styles.table_line}>
                                <td>
                                    <span className={payment_styles.secondary_color}>07/01/2021</span> <br />
                                    #202101
                                </td>
                                <td>Mortal Kombat X</td>
                                <td>Cartão de crédito à vista</td>
                                <td>R$89.90</td>
                                <td>Liberado</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="pagination justify-content-center">
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
                </BlueBackground>
            </div>
        </MainComponent>
    )
}

export default Orders;