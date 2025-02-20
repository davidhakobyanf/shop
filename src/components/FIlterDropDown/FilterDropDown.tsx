import React, { FC } from 'react';
import { brandData } from '../../data/data.ts';
import FilterModal from '../FIlterModal/FilterModal.tsx';
import PriceFilter from '../PriceFilter/PriceFilter.tsx';
import CustomList from '../CustomList/CustomList.tsx';

interface FilterDropDownProps {
    value: React.ReactNode;
    icon?: React.ReactNode;
    filter: boolean;
}

const FilterDropDown: FC<FilterDropDownProps> = ({ value }) => {
    return (
        <FilterModal label={value}>{value === 'Цена' ? <PriceFilter /> : <CustomList items={brandData} />}</FilterModal>
    );
};

export default FilterDropDown;
