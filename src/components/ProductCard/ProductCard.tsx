import { FC } from 'react';
import { CardItem } from '../../type/type';
import ProductCardImg from '../ProductCardImg/ProductCardImg';
import ProductCardText from '../ProductCardText/ProductCardText';
import styles from './ProductCard.module.css';

const ProductCard: FC<CardItem> = ({ name, brand, price, rating, category, imageUrl }) => {
    return (
        <div className={styles.productCardContainer}>
            <ProductCardImg img={imageUrl} />
            <ProductCardText name={name} brand={brand} price={price} rating={rating} category={category} />
        </div>
    );
};
export default ProductCard;
