import React from 'react';
import { useActiveSelect } from '../hook/useActiveSelect';
import { CustomListProps } from '../../type/type';
import styles from './CustomList.module.css';

const CustomList: React.FC<CustomListProps> = ({ items }) => {
    const { handleClick, checkList } = useActiveSelect();

    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={`${styles.listItem} ${checkList?.includes(item) ? styles.active : ''}`}
                    onClick={() => handleClick(item)}
                >
                    <div className={styles.listItemContent}>
                        <span className={`${styles.circle}`}></span>
                        <span className={styles.text}>{item.text}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CustomList;
