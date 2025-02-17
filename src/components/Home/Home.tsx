import FilterDropDown from '../FIlterDropDown/FilterDropDown';
import styles from './Home.module.css';
import { DataSvg } from '../../data/dataSvg.ts';
import FilterBlockDropDown from '../FilterCardList/FilterCardList.tsx';
import { Count } from '../hook/useCount.tsx';

const Home = () => {
    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //     }
    // };
    return (
        <div className={styles.home}>
            <p>
                Товаров <Count />
            </p>

            <FilterDropDown icon={DataSvg.burgerIcon} value='По популярности' filter={true} modal={true} />
            <FilterBlockDropDown />
        </div>
    );
};
export default Home;
