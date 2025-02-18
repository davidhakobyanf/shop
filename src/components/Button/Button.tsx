import { FC } from 'react';
import styles from './Button.module.css';
interface ButtonProps {
    value: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ value }) => {
    return <button className={styles.button}>{value}</button>;
};
export default Button;
