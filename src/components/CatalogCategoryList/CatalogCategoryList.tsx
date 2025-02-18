import FilterDropDown from '../FIlterDropDown/FilterDropDown';

import styles from './CatalogCategoryList.module.css';
import { DataSvg } from '../../data/dataSvg';
import { catalogFilter } from '../../data/data';

const CatalogCategoryList = () => {
    return (
        <div className={styles.catalogContainer}>
            {catalogFilter.map(({ id, name, icon }) => {
                return <FilterDropDown key={id} icon={DataSvg.icon} value={name} filter={true} modal={true} />;
            })}
        </div>
    );
};
export default CatalogCategoryList;
