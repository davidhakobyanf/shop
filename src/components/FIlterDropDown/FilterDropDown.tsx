import React, { FC, useState } from 'react';
import styles from './FilterDropDown.module.css';
import FilterModal from '../FIlterModal/FilterModal.tsx';
import PriceFilter from '../PriceFilter/PriceFilter.tsx';
import CustomList from '../CustomList/CustomList.tsx';
import { brandData } from '../../data/data.ts';

interface FilterDropDownProps {
    value: React.ReactNode;
    icon?: React.ReactNode;
    filter: boolean;
    modal?: boolean;
    onClick?: () => void;
}

const FilterDropDown: FC<FilterDropDownProps> = ({ icon, value, filter, modal, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };
    console.log(icon, 'icon');

    return (
        <div
            className={`${styles.filterContainer} ${filter ? styles.filterActive : ''}`}
            style={
                icon ? { '--icon-url': `url("${icon}")` } : ({ padding: '8px 30px 8px 15px' } as React.CSSProperties)
            }
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
