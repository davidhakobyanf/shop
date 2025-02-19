import { useEffect, useState } from 'react';
import Input from '../Input/Input';
import LogoSvg from '../LogoSvg/LogoSvg';
import { useFilter } from '../../context/FilterContext';
import styles from './Header.module.css';
import { useDebounce } from '../hook/useDebounce';

const Header = () => {
    const { dataFilter, handleSearch } = useFilter();
    const [searchTerm, setSearchTerm] = useState(dataFilter.searchQuery);
    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        handleSearch(debouncedSearch);
    }, [debouncedSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
            <Input
                placeholder='Найти на Wildberries'
                value={searchTerm}
                variant='searchInput'
                onChange={handleChange}
                name='search'
            />
        </div>
    );
};

export default Header;
