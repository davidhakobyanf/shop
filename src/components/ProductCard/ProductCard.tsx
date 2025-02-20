import { FC } from 'react';
import { CardItem } from '../../type/type';
import styles from './ProductCard.module.css';

const ProductCard: FC<CardItem> = ({ name, brand, price, rating, category, imageUrl }) => {
    return (
        <div className={styles.productCardContainer}>
            <div className={styles.cardImgContainer}>
                <img src={imageUrl} className={styles.img} alt={''} />
            </div>
            <div className={styles.cardTextContaier}>
                <h2>{name}</h2>
                <p>{brand}</p>
                <p>Price {price.toFixed(2)}</p>
                <p>Rating {rating}</p>
                <p>Category {category}</p>
            </div>
        </div>
    );
};
export default ProductCard;
