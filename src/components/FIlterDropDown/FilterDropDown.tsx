import React, { FC, useState } from 'react';
import styles from './FilterDropDown.module.css';
import FilterModal from '../FIlterModal/FilterModal.tsx';
import PriceFilter from '../PriceFilter/PriceFilter.tsx';
import CustomList from '../CustomList/CUstomList.tsx';

interface FilterDropDownProps {
    value: React.ReactNode;
    icon?: React.ReactNode;
    filter: boolean;
    modal?: boolean;
    onClick?: () => void;
}

const FilterDropDown: FC<FilterDropDownProps> = ({ icon, value, filter, modal, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };
    console.log(icon, 'icon');
    const items = [
        { id: 1, text: 'Элемент 1', onClick: () => console.log('Вы нажали на 1') },
        { id: 2, text: 'Элемент 2', onClick: () => console.log('Вы нажали на 2') },
        { id: 3, text: 'Элемент 3', onClick: () => console.log('Вы нажали на 3') },
    ];
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
                    {/* <PriceFilter /> */}
                    <CustomList items={items} />
                </FilterModal>
            )}
        </div>
    );
};

export default FilterDropDown;
