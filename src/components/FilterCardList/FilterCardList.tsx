import { FC } from 'react';
import { data, imagePath } from '../../data/data';
import { useFilter } from '../../context/FilterContext';
import ProductCard from '../ProductCard/ProductCard';
import styles from './FilterCardList.module.css';

const FilterCardList: FC = () => {
    const { filterProducts } = useFilter();
    const filteredData = filterProducts(data);
    console.log(filteredData, 'filteredData');

    return (
        <div className={styles.filterBlockContainer}>
            {filteredData.length ? (
                filteredData.map(({ id, name, category, brand, price, rating, imageUrl }) => (
                    <ProductCard
                        key={id}
                        imageUrl={`${imagePath}${imageUrl}`}
                        name={name}
                        category={category}
                        brand={brand}
                        price={price}
                        rating={rating}
                    />
                ))
            ) : (
                <p>Таких товаров не существует</p>
            )}
        </div>
    );
};

export default FilterCardList;
