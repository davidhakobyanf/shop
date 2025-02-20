import FilterBlockDropDown from '../FilterCardList/FilterCardList.tsx';
import CatalogCategoryList from '../CatalogCategoryList/CatalogCategoryList.tsx';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <CatalogCategoryList />
            <FilterBlockDropDown />
        </div>
    );
};
export default Home;
