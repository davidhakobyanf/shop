import React, { FC, useState } from 'react';
import { brandData } from '../../data/data.ts';
import FilterModal from '../FIlterModal/FilterModal.tsx';
import PriceFilter from '../PriceFilter/PriceFilter.tsx';
import CustomList from '../CustomList/CustomList.tsx';
import styles from './FilterDropDown.module.css';

interface FilterDropDownProps {
    value: React.ReactNode;
    icon?: React.ReactNode;
    filter: boolean;
    modal?: boolean;
    onClick?: () => void;
}

const FilterDropDown: FC<FilterDropDownProps> = ({ value, filter, modal, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className={`${styles.filterContainer} ${filter ? styles.filterActive : ''}`}
            style={{ padding: '8px 30px 8px 15px' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {value}
            {modal && (
                <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {value === 'Цена' ? <PriceFilter /> : <CustomList items={brandData} />}
                </FilterModal>
            )}
        </div>
    );
};

export default FilterDropDown;
