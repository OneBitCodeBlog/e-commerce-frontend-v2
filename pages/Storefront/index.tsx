import React from 'react';
import MainComponent from '../../components/shared/MainComponent';
import { Carousel } from 'react-bootstrap';
import styles from '../../styles/Storefront.module.css';
import ProductsCategories from '../../components/ProductsCategories';

const Storefront: React.FC = () => {
    return(
        <MainComponent>
            <Carousel className={styles.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <ProductsCategories title="Ofertas da Semana" />

            <ProductsCategories title="Lancamentos" />

            <ProductsCategories title="Mais Populares" />
        </MainComponent>
    )
}

export default Storefront;