import Input from '../Input/Input';
import LogoSvg from '../LogoSvg/LogoSvg';
import styles from './Header.module.css';
import { useFormState } from '../hook/useFormState';

const Header = () => {
    const { initialValue, handleChange } = useFormState({ name: '' });
    console.log(initialValue, 'initialValue');

    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
            <Input
                placeholder={'Найти на Wildberries' as string}
                value={initialValue.name}
                variant='searchInput'
                onChange={handleChange}
                name={'name'}
            />
        </div>
    );
};

export default Header;
