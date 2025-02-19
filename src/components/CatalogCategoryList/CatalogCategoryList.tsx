import React from 'react';
import FilterDropDown from '../FIlterDropDown/FilterDropDown';
import styles from './CatalogCategoryList.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { catalogFilter } from '../../data/data';
import { useFilter } from '../../context/FilterContext';

const CatalogCategoryList: React.FC = () => {
    const { dataFilter, toggleRating } = useFilter();
    return (
        <div className={styles.catalogContainer}>
            {catalogFilter.map(({ id, name }) =>
                name !== 'Рейтинг' ? (
                    <FilterDropDown key={id} value={name} filter={true} modal={true} />
                ) : (
                    <ToggleButton key={id} label='Рейтинг' checked={dataFilter.rating} onChange={toggleRating} />
                ),
            )}
        </div>
    );
};

export default CatalogCategoryList;
