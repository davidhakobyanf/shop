import { FC } from 'react';
import styles from './ProductCard.module.css';
import ProductCardImg from '../ProductCardImg/ProductCardImg';
import ProductCardText from '../ProductCardText/ProductCardText';
import { CardItem } from '../../type/type';

const ProductCard: FC<CardItem> = ({ name, brand, price, rating, category, imageUrl }) => {
    return (
        <div className={styles.productCardContainer}>
            <ProductCardImg img={imageUrl} />
            <ProductCardText name={name} brand={brand} price={price} rating={rating} category={category} />
        </div>
    );
};
export default ProductCard;
