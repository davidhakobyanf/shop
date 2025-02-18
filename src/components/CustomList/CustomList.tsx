import React from 'react';
import styles from './CustomList.module.css';

interface ListItem {
    id: number;
    text: string;
    onClick?: () => void;
}

interface CustomListProps {
    items: ListItem[];
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <li key={item.id} className={styles.listItem} onClick={item.onClick}>
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
