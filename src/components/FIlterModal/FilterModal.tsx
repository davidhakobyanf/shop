import React, { useEffect, useState } from 'react';
import useOutSideClick from '../hook/useOutSideClick';
import styles from './FilterModal.module.css';

export interface FilterModalProps {
    children: React.ReactNode;
    label: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({ children, label }) => {
    const { isOpenOutSide, open, close, dropDownRef } = useOutSideClick();
    const [modalStyle, setModalStyle] = useState({});

    const calculateModalPosition = () => {
        if (dropDownRef.current) {
            const modalRect = dropDownRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            if (modalRect.right > viewportWidth) {
                setModalStyle({ right: '0px', left: 'auto' });
            } else {
                setModalStyle({ left: '0px', right: 'auto' });
            }
        }
    };

    useEffect(() => {
        if (isOpenOutSide) {
            calculateModalPosition();
        } else {
            setModalStyle({});
        }
    }, [isOpenOutSide]);

    return (
        <div className={`${styles.filterContainer} ${styles.filterActive}`} onMouseEnter={open} onMouseLeave={close}>
            <span>{label}</span>
            <div
                ref={dropDownRef}
                className={styles.modal}
                style={{ display: isOpenOutSide ? 'flex' : 'none', ...modalStyle }}
            >
                <div className={styles.buffer} />
                {children}
            </div>
        </div>
    );
};

export default FilterModal;
