import React from 'react';
import { useFilter } from '../../context/FilterContext';
import { CustomListProps } from '../../type/type';
import styles from './CustomList.module.css';

const CustomList: React.FC<CustomListProps> = ({ items }) => {
    const { dataFilter, handleBrandClick } = useFilter();
    const { brandCheckList } = dataFilter;
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={`${styles.listItem} ${
                        brandCheckList.some((el) => el.id === item.id) ? styles.active : ''
                    }`}
                    onClick={() => handleBrandClick(item)}
                >
                    <div className={styles.listItemContent}>
                        <span className={styles.circle}></span>
                        <span className={styles.text}>{item.text}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CustomList;
