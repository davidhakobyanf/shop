import { FC } from 'react';
import { data, imagePath } from '../../data/data';
import ProductCard from '../ProductCard/ProductCard';
import styles from './FilterCardList.module.css';

const FilterCardList: FC = () => {
    return (
        <div className={styles.filterBlockContainer}>
            {data.map(({ id, name, category, brand, price, rating, imageUrl }) => (
                <ProductCard
                    key={id}
                    imageUrl={`${imagePath}${imageUrl}`}
                    name={name}
                    category={category}
                    brand={brand}
                    price={price}
                    rating={rating}
                />
            ))}{' '}
        </div>
    );
};
export default FilterCardList;
