import { useState } from 'react';
import Input from '../Input/Input';
import LogoSvg from '../LogoSvg/LogoSvg';
import styles from './Header.module.css';
import { DataSvg } from '../../data/dataSvg';
const Header = () => {
    const [text, setText] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setText(value);
        console.log(value, 'value');
    };
    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
            <Input
                placeholder='Найти на Wildberries'
                value={text}
                variant='searchInput'
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default Header;
