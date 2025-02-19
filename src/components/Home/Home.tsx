import FilterBlockDropDown from '../FilterCardList/FilterCardList.tsx';
import CatalogCategoryList from '../CatalogCategoryList/CatalogCategoryList.tsx';
import { data } from '../../data/data.ts';
import styles from './Home.module.css';

const Home = () => {
    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //     }
    // };
    return (
        <div className={styles.home}>
            <p>Товаров {data?.length}</p>
            <CatalogCategoryList />
            <FilterBlockDropDown />
        </div>
    );
};
export default Home;
