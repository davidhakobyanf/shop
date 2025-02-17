import { ChangeEvent, FC, HTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputType extends HTMLAttributes<HTMLInputElement> {
    variant: 'searchInput' | 'defInput';
    placeholder?: string;
}

const Input: FC<InputType> = ({ variant, placeholder, ...props }) => {
    return <input className={` ${styles[variant]}`} placeholder={placeholder} {...props} />;
};

export default Input;
