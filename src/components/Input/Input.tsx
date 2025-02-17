import { ChangeEvent, FC } from 'react';
import styles from './Input.module.css';

interface InputType {
    value: string | number;
    variant: 'searchInput' | 'defInput';
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputType> = ({ value, variant, placeholder, onChange, onKeyDown }) => {
    return (
        <input
            className={` ${styles[variant]}`}
            value={value}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={onChange}
        />
    );
};

export default Input;
