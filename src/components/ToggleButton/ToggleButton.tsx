import React from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, checked, onChange }) => {
    return (
        <div className={styles.container} onClick={() => onChange(!checked)}>
            <span className={styles.spanText}>{label}</span>
            <div className={`${styles.toggle} ${checked ? styles.checked : ''}`}>
                <div className={styles.circle}></div>
            </div>
        </div>
    );
};

export default ToggleButton;
