import styles from './Home.module.css';
import FilterBlockDropDown from '../FilterCardList/FilterCardList.tsx';
import { data } from '../../data/data.ts';
import CatalogCategoryList from '../CatalogCategoryList/CatalogCategoryList.tsx';

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
