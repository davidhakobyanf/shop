import { FC } from 'react';
import styles from './ProductCardImg.module.css';

interface ProductType {
    img: string;
    alt?: string;
}
const ProductCardImg: FC<ProductType> = ({ img, alt }) => {
    return (
        <div className={styles.cardImgContainer}>
            <img src={img} className={styles.img} alt={alt ? alt : ''} />
        </div>
    );
};
export default ProductCardImg;
