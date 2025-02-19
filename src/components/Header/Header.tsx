import Input from '../Input/Input';
import LogoSvg from '../LogoSvg/LogoSvg';
import { useFormState } from '../hook/useFormState';
import styles from './Header.module.css';

const Header = () => {
    const { initialValue, handleChange } = useFormState({ search: '' });
    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
            <Input
                placeholder={'Найти на Wildberries' as string}
                value={initialValue.search}
                variant='searchInput'
                onChange={handleChange}
                name={'search'}
            />
        </div>
    );
};

export default Header;
