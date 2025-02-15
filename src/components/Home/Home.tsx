import FilterDropDown from '../FIlterDropDown/FilterDropDown';
import styles from './Home.module.css';
import {DataSvg} from "../../data/dataSvg.ts";

const Home = () => {
    return (
        <div className={styles.home}>
            home
            <FilterDropDown icon={DataSvg.burgerIcon} value="По популярности" filter={true}  modal={true}/>
        </div>
    );
};
export default Home;
