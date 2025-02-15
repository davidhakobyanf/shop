import React, { useEffect, useRef } from 'react';
import styles from './FilterModal.module.css';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            ref={modalRef}
            className={styles.modal}
            style={{ display: isOpen ? 'flex' : 'none' }}
        >
            {/* Добавляем буферный div */}
            <div className={styles.buffer} />
            {children}
        </div>
    );
};

export default FilterModal;