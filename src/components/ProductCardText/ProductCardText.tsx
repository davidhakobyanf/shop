import React from 'react';
import styles from './ProductCardText.module.css';
import { CardItemTextType } from '../../type/type';

const ProductCardText: React.FC<CardItemTextType> = ({ name, brand, price, rating, category }) => {
    return (
        <div className={styles.cardTextContaier}>
            <h2>{name}</h2>
            <p>{brand}</p>
            <p>{price.toFixed(2)}</p>
            <p>{rating}</p>
            <p>{category}</p>
        </div>
    );
};

export default ProductCardText;
