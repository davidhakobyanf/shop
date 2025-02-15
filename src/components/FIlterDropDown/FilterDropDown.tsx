import React, { FC, useState } from "react";
import styles from "./FilterDropDown.module.css";
import FilterModal from "../FIlterModal/FilterModal.tsx";

interface FilterDropDownProps {
    value: React.ReactNode;
    icon?: React.ReactNode;
    filter: boolean;
    modal?: boolean;
}

const FilterDropDown: FC<FilterDropDownProps> = ({ icon, value, filter, modal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className={`${styles.filterContainer} ${filter ? styles.filterActive : ""}`}
            style={
                icon
                    ? { "--icon-url": `url("${icon}")` }
                    : ({ padding: "8px 30px 8px 15px" } as React.CSSProperties)
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {value}
            {modal && (
                <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Модальное окно</div>
                </FilterModal>
            )}
        </div>
    );
};

export default FilterDropDown;