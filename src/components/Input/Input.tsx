import { FC, HTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputType extends HTMLAttributes<HTMLInputElement> {
    variant: 'searchInput' | 'defInput';
    type?: 'string' | 'number';
    name?: string;
    value?: string;
    placeholder?: string;
}

const Input: FC<InputType> = ({
    variant,
    placeholder,
    type = 'text', // По умолчанию "text"
    name,
    value,
    ...props
}) => {
    return (
        <input className={styles[variant]} placeholder={placeholder} type={type} name={name} value={value} {...props} />
    );
};
export default Input;
