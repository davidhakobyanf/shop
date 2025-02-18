import { FC, HTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputType extends HTMLAttributes<HTMLInputElement> {
    variant: 'searchInput' | 'defInput';
    type: 'string' | 'number';
    placeholder?: string;
}

const Input: FC<InputType> = ({ variant, placeholder, type, ...props }) => {
    return <input className={` ${styles[variant]}`} placeholder={placeholder} type={type} {...props} />;
};

export default Input;
