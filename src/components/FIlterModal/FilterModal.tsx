import styles from './FilterModal.module.css';
import useOutSideClick from '../hook/useOutSideClick';

export interface FilterModalProps {
    children: React.ReactNode;
    label: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({ children, label }) => {
    const { isOpenOutSide, open, close, dropDownRef } = useOutSideClick();
    return (
        <div className={`${styles.filterContainer} ${styles.filterActive}`} onMouseEnter={open} onMouseLeave={close}>
            <span>{label}</span>
            <div ref={dropDownRef} className={styles.modal} style={{ display: isOpenOutSide ? 'flex' : 'none' }}>
                <div className={styles.buffer} />
                {children}
            </div>
        </div>
    );
};

export default FilterModal;
