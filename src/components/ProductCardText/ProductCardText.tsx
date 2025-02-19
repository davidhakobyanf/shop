import React from 'react';
import { CardItemTextType } from '../../type/type';
import styles from './ProductCardText.module.css';

const ProductCardText: React.FC<CardItemTextType> = ({ name, brand, price, rating, category }) => {
    return (
        <div className={styles.cardTextContaier}>
            <h2>{name}</h2>
            <p>{brand}</p>
            <p>Price {price.toFixed(2)}</p>
            <p>Rating {rating}</p>
            <p>Category {category}</p>
        </div>
    );
};

export default ProductCardText;
