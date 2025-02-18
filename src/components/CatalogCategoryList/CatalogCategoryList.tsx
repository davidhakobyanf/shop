import React, { useState } from 'react';
import FilterDropDown from '../FIlterDropDown/FilterDropDown';
import styles from './CatalogCategoryList.module.css';
import { DataSvg } from '../../data/dataSvg';
import { catalogFilter } from '../../data/data';
import ToggleButton from '../ToggleButton/ToggleButton';

const CatalogCategoryList: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked, 'isChecked');

    return (
        <div className={styles.catalogContainer}>
            {catalogFilter.map(({ id, name, icon }) =>
                name !== 'Рейтинг' ? (
                    <FilterDropDown key={id} icon={DataSvg.icon} value={name} filter={true} modal={true} />
                ) : (
                    <ToggleButton key={id} label='Рейтинг' checked={isChecked} onChange={setIsChecked} />
                ),
            )}
        </div>
    );
};

export default CatalogCategoryList;
