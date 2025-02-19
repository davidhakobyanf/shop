import Input from '../Input/Input';
import LogoSvg from '../LogoSvg/LogoSvg';
import { useFilter } from '../../context/FilterContext';
import styles from './Header.module.css';

const Header = () => {
    const { dataFilter, handleSearch } = useFilter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
    };

    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
            <Input
                placeholder='Найти на Wildberries'
                value={dataFilter.searchQuery}
                variant='searchInput'
                onChange={handleChange}
                name='search'
            />
        </div>
    );
};

export default Header;
