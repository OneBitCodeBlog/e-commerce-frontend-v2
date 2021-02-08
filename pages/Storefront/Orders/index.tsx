import React from 'react';
import AdminListTable from '../../../components/shared/AdminListTable';
import MainComponent from '../../../components/shared/MainComponent';

import styles from './styles.module.css';
import payment_styles from '../PaymentConfirm/styles.module.css';
import StorefrontMenu from '../../../components/shared/StorefrontMenu';

const Orders: React.FC = () => {
    return (
        <MainComponent>
            <StorefrontMenu />
            
            <div className={`${styles.admin_table} mt-4 mb-4`}>
                <AdminListTable first_title="Data/Número" second_title="Produto" third_title="Pagamento" fourth_title="Valor" fifth_title="Situação">
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
                </AdminListTable>
            </div>
        </MainComponent>
    )
}

export default Orders;